import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offer from "../Components/Offer/Offer";
import NewCollection from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Shop = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-10">
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <NewsLetter />
    </div>
  );
};

export default Shop;
