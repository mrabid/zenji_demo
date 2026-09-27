"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
import type { Product, Size } from "@/lib/products";
import { formatPrice } from "@/lib/products";

export type CartItem = {
  lineId: string;
  productId: string;
  name: string;
  price: number;
  size: Size;
  quantity: number;
  image: string;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
};

type CartAction =
  | { type: "ADD_ITEM"; product: Product; size: Size }
  | { type: "REMOVE_ITEM"; lineId: string }
  | { type: "UPDATE_QUANTITY"; lineId: string; quantity: number }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" }
  | { type: "TOGGLE_CART" };

function createLineId(productId: string, size: Size): string {
  return `${productId}-${size}`;
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const lineId = createLineId(action.product.id, action.size);
      const existing = state.items.find((item) => item.lineId === lineId);

      if (existing) {
        return {
          ...state,
          isOpen: true,
          items: state.items.map((item) =>
            item.lineId === lineId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        isOpen: true,
        items: [
          ...state.items,
          {
            lineId,
            productId: action.product.id,
            name: action.product.name,
            price: action.product.price,
            size: action.size,
            quantity: 1,
            image: action.product.image,
          },
        ],
      };
    }
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.lineId !== action.lineId),
      };
    case "UPDATE_QUANTITY": {
      if (action.quantity < 1) {
        return {
          ...state,
          items: state.items.filter((item) => item.lineId !== action.lineId),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.lineId === action.lineId
            ? { ...item, quantity: action.quantity }
            : item
        ),
      };
    }
    case "OPEN_CART":
      return { ...state, isOpen: true };
    case "CLOSE_CART":
      return { ...state, isOpen: false };
    case "TOGGLE_CART":
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
}

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  itemCount: number;
  subtotal: number;
  subtotalLabel: string;
  addItem: (product: Product, size: Size) => void;
  removeItem: (lineId: string) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
  });

  const addItem = useCallback((product: Product, size: Size) => {
    dispatch({ type: "ADD_ITEM", product, size });
  }, []);

  const removeItem = useCallback((lineId: string) => {
    dispatch({ type: "REMOVE_ITEM", lineId });
  }, []);

  const updateQuantity = useCallback((lineId: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", lineId, quantity });
  }, []);

  const openCart = useCallback(() => dispatch({ type: "OPEN_CART" }), []);
  const closeCart = useCallback(() => dispatch({ type: "CLOSE_CART" }), []);
  const toggleCart = useCallback(() => dispatch({ type: "TOGGLE_CART" }), []);

  const itemCount = useMemo(
    () => state.items.reduce((sum, item) => sum + item.quantity, 0),
    [state.items]
  );

  const subtotal = useMemo(
    () =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [state.items]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items: state.items,
      isOpen: state.isOpen,
      itemCount,
      subtotal,
      subtotalLabel: formatPrice(subtotal),
      addItem,
      removeItem,
      updateQuantity,
      openCart,
      closeCart,
      toggleCart,
    }),
    [
      state.items,
      state.isOpen,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      openCart,
      closeCart,
      toggleCart,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
