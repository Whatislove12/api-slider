import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ContainerSlider } from "./components/ContainerSlider";
import { Button } from "./components/Button";
import { Slider } from "./components/Slider";
import { DotsContainer } from "./components/DotsContainer";
import { SliderWithArrows } from "./components/SliderWithArrows";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const lenghtOfSlider = [];
  const getNumbers = () => {
    for (let i = 0; i < 10; i++) lenghtOfSlider.push(i);
  };
  getNumbers();

  const leftArrowClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? lenghtOfSlider.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const rightArrowClick = () => {
    const isLastSlide = currentIndex === lenghtOfSlider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <ContainerSlider>
      <SliderWithArrows>
        <Button onClick={leftArrowClick} icon={<FaChevronLeft />} />
        <Slider imageNumber={currentIndex} />
        <Button onClick={rightArrowClick} icon={<FaChevronRight />} />
      </SliderWithArrows>
      <DotsContainer
        sliderLenght={lenghtOfSlider}
        onClick={goToSlide}
        curIndex={currentIndex}
        slIndex={setCurrentIndex}
      />
    </ContainerSlider>
  );
};

export default ImageSlider;
