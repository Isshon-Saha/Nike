import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, star_rating }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt="img" className="w-[280px] h-[280px]" />
      <div className="flex items-center">
        <img src={star} alt="star" className="h-5 w-5" />
        <p className="mx-2 font-palanquin font-semibold text-xl">
          ( {star_rating} )
        </p>
      </div>
      <h3 className="flex font-semibold font-palanquin mt-2 text-2xl leading-normal">
        {name}
      </h3>
      <p className="mt-2 font-montserrat font-semibold text-coral-red">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
