"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./style.module.css";
import { useDispatch } from "react-redux";

import {
  nextArrowStyles,
  prevArrowStyles,
  filterSliderStyles,
  filters,
} from "@/utils/constants";
import { ArrowProps } from "./types";
import { selectSingleType } from "@/store/slices/housesSlice";

function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, ...nextArrowStyles }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, ...prevArrowStyles }}
      onClick={onClick}
    />
  );
}

export default function FilterSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7.5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    style: filterSliderStyles,
  };
  const dispatch = useDispatch();

  return (
    <Slider {...settings}>
      {filters.map((filter) => (
        <div
          key={filter.type}
          onClick={() => dispatch(selectSingleType(filter.type))}
          className={classes.filterSlider}
        >
          <img
            className={classes.filterSlider__icon}
            src={filter.icon}
            alt={filter.type}
          />
        </div>
      ))}
    </Slider>
  );
}
