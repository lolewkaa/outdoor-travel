"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./style.module.css";
import {
  dotsStyles,
  nextArrowStylesCard,
  prevArrowStylesCard,
  sliderItemContainerStyles,
  sliderItemStyles,
} from "../../../../utils/constants";
import { ArrowProps, PropsSlider } from "./types";

function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, ...nextArrowStylesCard }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        ...prevArrowStylesCard
      }}
      onClick={onClick}
    />
  );
}

export default function CardSlider({ item }: PropsSlider) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots: React.ReactNode) => (
      <div
        style={dotsStyles}
      >
        <div style={{ ...sliderItemContainerStyles }}>
          {React.Children.map(dots, (dot) => (
            <div
              style={{ ...sliderItemStyles }}
            >
              {dot}
            </div>
          ))}
        </div>
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      {item.gallery.map((imageUrl, index) => (
        <div key={index}>
          <img
            className={classes.cardSlider__img}
            src={imageUrl}
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
    </Slider>
  );
}
