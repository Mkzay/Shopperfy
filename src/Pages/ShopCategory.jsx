/* eslint-disable react/prop-types */

import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="flex flex-col items-center justify-center gap-7 mb-28">
      <img className="w-11/12 md:10/12" src={props.banner} />
      <div className="flex items-center justify-between w-11/12 md:px-20">
        <p className="text-sm">
          <span className="font-bold">Showing 1 - 12</span> out of 36 products
        </p>
        <div className="flex gap-1 items-center border border-gray-500 rounded-full p-2 w-20">
          <p className="text-sm ">Sort by</p>
          <FontAwesomeIcon className="text-gray-700" icon={faCaretDown} />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-20 p-5">
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
          } else {
            return null;
          }
        })}
      </div>
      <button className="text-sm bg-gray-300 p-3 font-semibold text-gray-500 rounded-full w-2/12">
        Explore More
      </button>
    </div>
  );
};

export default ShopCategory;
