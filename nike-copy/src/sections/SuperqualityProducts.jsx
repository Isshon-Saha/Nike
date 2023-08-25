import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperqualityProducts = () => {
  return (
    <section
      id="about-us"
      className="flex max-lg:flex-col justify-between item-center gap-10 max-container"
    >
      <div className="flex flex-1 flex-col">
        <h3 className="mt-10 text-4xl font-palanqin font-bold capitalize lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <br />
          <span className="text-coral-red">Quality </span>
          Shoes
        </h3>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="big ass shoe"
          height={577}
          width={520}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperqualityProducts;
