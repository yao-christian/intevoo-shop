import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/features/cart/cart.state";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  // Désactiver les vérifications de sérialisation en développement
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
