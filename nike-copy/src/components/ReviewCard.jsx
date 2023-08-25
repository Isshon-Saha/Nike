import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="mt-6 flex flex-row max-sm:flex-col">
      <div className="max-w-sm flex flex-1 flex-col text-center items-center">
        <img
          src={imgURL}
          alt="Customerpic"
          height={120}
          width={120}
          className="rounded-full object-cover"
        />
        <p className="info-text mt-6">{feedback}</p>
        <div className="flex flex-row flex-1 justify-start gap-4 mt-6">
          <img src={star} alt="star" className="w-6 h-6 object-contain" />
          <p className="font-montserrat m-auto text-xl text-slate-gray">
            ({rating})
          </p>
        </div>
        <p className="font-bold font-palanquin text-2xl mt-4">{customerName}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
