import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-palanqin font-bold text-4xl text-center">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h3>
        <p className="info-text mt-10 leading-normal max-w-lg text-center max-sm:max-w-sm m-auto">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="mt-12 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((review)=>(
            <ReviewCard {...review}/>
          ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
