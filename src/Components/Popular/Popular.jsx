import data_product from "../../assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-5 pt-10 p-5 md:p-20">
      <h1 className="text-2xl font-semibold">POPULAR IN WOMEN</h1>
      <div className="h-1 w-28 mb-10 bg-black"></div>
      <div className="flex flex-col gap-8 md:flex-row md:gap-20">
        {data_product.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default Popular;
