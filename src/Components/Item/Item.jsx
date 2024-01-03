/* eslint-disable react/prop-types */
const Item = (props) => {
  return (
    <div className="flex flex-col gap-2 w-72 md:w-52">
      <img src={props.image} />
      <p className="text-lg md:text-base">{props.name}</p>
      <div className="flex gap-5">
        <p className="text-lg">${props.new_price}</p>
        <p className="text-base text-gray-500 line-through">
          ${props.old_price}
        </p>
      </div>
    </div>
  );
};

export default Item;
