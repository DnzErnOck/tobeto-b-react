import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dropdown, DropdownDivider, DropdownItem, DropdownMenu, Label } from "semantic-ui-react";
import { removeFromCart } from "../../app/cartSlice";
import { ProductModel } from "../../models/responses/ProductModel";

export default function CartSummary() {

    const {cart} = useSelector((state: any) => state);

    const dispatch = useDispatch();

    const removeFromCartFonk = (productId: number) => {
        dispatch(removeFromCart(productId));
      };
  return (
    <Dropdown item text="Sepetiniz">
      <DropdownMenu>
        {
          cart.map((product:any) => (
            <DropdownItem key={product.id}>
                {product.title}
                <Label>
                  {product.quantity}
                </Label>
                <button onClick={() => removeFromCartFonk(product.id)}> Sil</button>
            </DropdownItem>
          ))
        }
        
        <DropdownDivider/>
      </DropdownMenu>
    </Dropdown>
  );
}
