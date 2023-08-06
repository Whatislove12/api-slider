import { ButtonDot } from "./ButtonDot";

export const DotsContainer = ({sliderLenght, curIndex, slIndex, onClick}) => {
  return (
    <div className="flex justify-center gap-2 mt-3">
      {sliderLenght.map((slide, slIndex) => (
        <ButtonDot
          key={slIndex}
          onClick={() => onClick(slIndex)}
          isActive={slIndex === curIndex}
        />
      ))}
    </div>
  );
};
