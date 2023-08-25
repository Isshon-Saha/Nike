const Button = ({ label, iconURL, bgColor, borderColor, textColor, fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 border px-7 py-4 font-montserrat text-lg leading-none
      ${
        bgColor
          ? `${bgColor} ${textColor} ${borderColor}`
          : `bg-coral-red text-white`
      }
      rounded-full
      ${fullWidth ? `w-full`:``}
      `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right"
          className="w-5 h-5 rounded-full ml-2"
        />
      )}
    </button>
  );
};

export default Button;
