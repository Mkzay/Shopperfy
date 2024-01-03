/* eslint-disable react/prop-types */

import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  console.log("all_product:", all_product);
  console.log("props.banner:", props.banner);
  console.log("props.category:", props.category);
  return (
    <div>
      <img src={props.banner} />
      <div>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          return null; // No need for an else statement
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
