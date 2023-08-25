import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeBar from "../components/ShoeBar";
import { shoes, statistics } from "../constants";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <>
      <section
        id="home"
        className="w-full flex lg:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full pt-28 max-xl:padding-x">
          <p className="flex flex-col flex-start justify-start items-start text-coral-red font-montserrat">
            Our Summer collections
          </p>
          <h1 className="mt-10 text-8xl font-palanqin max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className="lg:bg-white relative z-10 pr-10 xl:whitespace-nowrap">
              The New Arrival
            </span>
            <br />
            <span className="relative z-10 text-coral-red">Nike </span>
            Shoes
          </h1>
          <p className="font-montserrat py-5 text-slate-gray text-lg leading-8 mb-5 sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <Button label="Shop now" iconURL={arrowRight} />
          <div className="flex justify-start items-start gap-16 w-full mt-20 max-sm:gap-10">
            {statistics.map((stat, index) => (
              <div key={index}>
                <p className="font-palanquin font-bold text-4xl max-md:text-3xl">
                  {stat.value}
                </p>
                <p className="font-montserrat text-2xl max-md:text-xl text-slate-gray">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex relative bg-cover bg-center justify-center items-center xl:min-h-screen max-xl:py-40 bg-white bg-hero flex-1">
          <img
            src={bigShoeImg}
            height={300}
            width={510}
            alt="Big shoe"
            className="object-contain relative z-10"
          />
          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe) => (
              <div key={shoe}>
                <ShoeBar
                  imgURL={shoe}
                  changeBigShoeImg={(shoe) => setBigShoeImg(shoe)}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
