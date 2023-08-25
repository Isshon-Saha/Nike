import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="flex flex-wrap items-center max-sm:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>
      <div>
        <h3 className="mt-10 text-4xl font-palanqin font-bold capitalize lg:max-w-lg">
          <span className="text-coral-red"> Special </span> Offer
        </h3>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            bgColor="bg-white"
            borderColor="border-slate.gray"
            textColot="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
