"use client";
import { CatalogItemType } from "@/types/types";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./style.module.css";

type PropsSlider = {
  item: CatalogItemType;
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", position: "absolute", right: "2px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", position: "absolute", left: '2px', zIndex: '100' }}
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
    appendDots: (dots) => (
      <div
        style={{
          height: "20px",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
          width: "87%",
          position: "absolute",
          bottom: "10px",
          left: '10px'
        }}
      >
        <div style={{ margin: "0", padding: "0", display: "flex" }}>
          {React.Children.map(dots, (dot) => (
            <div style={{ height: '10px', width: '10px', marginLeft:'5px', marginRight:'5px' }}>
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
