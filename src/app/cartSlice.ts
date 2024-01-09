import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductModel } from '../models/responses/ProductModel';

const initialState: any = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart:(state, action :PayloadAction<ProductModel> )=>{
            const newItem = action.payload;
            const existingItem = state.find((item:any) => item.id === newItem.id);
        
            if (existingItem) {
              
              // Eğer öğe sepette zaten varsa, miktarını artır
              existingItem.quantity ++;
             
            } else {
              // Eğer öğe sepette yoksa, yeni öğe olarak ekle

              state.push({ ...newItem, quantity: 1 });
            }
            
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
          const removedItemId = action.payload;
          const updatedCart = state.filter((item: any) => item.id !== removedItemId);
      
          // Yeni durumu döndür
          return updatedCart;
      }
    }
})
export const { addToCart , removeFromCart} = cartSlice.actions;

export default cartSlice.reducer