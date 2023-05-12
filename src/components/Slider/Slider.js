import React, { useState, useEffect } from "react";
import slide1 from "../../assets/avata.webp";
import slide2 from "../../assets/avata2.jpg";
import slide3 from "../../assets/avata3.jpg";
import slide4 from "../../assets/avata5.jpg";
import slide5 from "../../assets/avata6.jpeg";
import "./Slider.css";

const img = [
  <img key={slide1} src={slide1} alt="avata" />,
  <img key={slide2} src={slide2} alt="avata pro"/>,
  <img key={slide3} src={slide3} alt="avata min"/>,
  <img key={slide4} src={slide4} alt="avata max"/>,
  <img key={slide5} src={slide5} alt="avata s1"/>,
];

export function Slider() {
  // Индекс текущего слайда
  const [activeIndex, setActiveIndex] = useState(0);

  // Хук Effect
  useEffect(() => {
    // Запускаем интервал
    // Выключаем интервал
    return () => clearInterval();
  }, []);

  // Вычисляем индекс предыдущего слайда
  const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
  // Вычисляем индекс следующего слайда
  const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;

  return (
    <div className="slider">
        <div className="slider-img slider-img-prev"
                key={prevImgIndex}>
            {img[prevImgIndex]}
        </div>
        <div className="slider-img"
                key={activeIndex}>
            {img[activeIndex]}
        </div>
        <div className="slider-img slider-img-next"
                key={nextImgIndex}>
            {img[nextImgIndex]}
        </div>
    </div>
)
}


