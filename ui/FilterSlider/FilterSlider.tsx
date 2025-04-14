"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./style.module.css";
import { styleText } from "util";
import { useDispatch } from "react-redux";
import { getFilteredHouses } from "@/store/slices/housesSlice";

type PropsSlider = {
 
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", position: "absolute", right: "-25px"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", position: "absolute", left: '-25px', zIndex: '100' }}
      onClick={onClick}
    />
  );
}

export default function FilterSlider({ item }: PropsSlider) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7.5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  
  };
  const dispatch = useDispatch();
  return (
    <Slider {...settings} style={{  width: '80%', borderRadius: '5px', margin: '0 auto' }}>

      <div onClick={() => dispatch(getFilteredHouses('A frame'))} className={classes.filterSlider}>
      <img className={classes.filterSlider__icon}   src='/frame.svg' />
      </div>
      <div onClick={() => dispatch(getFilteredHouses('Барнхауз'))} className={classes.filterSlider}>
      <img className={classes.filterSlider__icon}   src='/barnkhauz.svg' />
      </div>
      <div onClick={() => dispatch(getFilteredHouses('Кемпинг'))} className={classes.filterSlider}>
      <img className={classes.filterSlider__icon}   src='/camping.svg' />
      </div>
      <div onClick={() => dispatch(getFilteredHouses('Коттедж'))} className={classes.filterSlider}>
      <img className={classes.filterSlider__icon}   src='/cottage.svg' />
      </div>
      <div onClick={() => dispatch(getFilteredHouses('Зеркальный дом'))} className={classes.filterSlider}>
      <img src='/houseMirror.svg' />
      </div>
      <div onClick={() => dispatch(getFilteredHouses('Дом на дереве'))} className={classes.filterSlider}>
      <img src='/houseTree.svg' />
      </div>
      <div onClick={() => dispatch(getFilteredHouses('Модульный дом'))} className={classes.filterSlider}>
      <img  className={classes.filterSlider__icon}  src='/moduleHouse.svg' />
      </div>
      <div onClick={() => dispatch(getFilteredHouses('Сафари тент'))} className={classes.filterSlider}>
      <img className={classes.filterSlider__icon}   src='/safariTent.svg' />
      </div>
      <div onClick={() => dispatch(getFilteredHouses('Сфера'))} className={classes.filterSlider}>
      <img className={classes.filterSlider__icon}   src='/sfera.svg' />
      </div>
      <div onClick={() => dispatch(getFilteredHouses('Шатёр'))} className={classes.filterSlider}>
      <img className={classes.filterSlider__icon}  src='/tent.svg' />
      </div>
      <div onClick={() => dispatch(getFilteredHouses('Типи'))} className={classes.filterSlider}>
      <img className={classes.filterSlider__icon}  src='/tipi.svg' />
      </div>
      <div onClick={() => dispatch(getFilteredHouses('Дом на воде'))} className={classes.filterSlider}>
      <img className={classes.filterSlider__icon}  src='/waterHouse.svg' />
      </div>
      <div onClick={() => dispatch(getFilteredHouses('Юрта'))} className={classes.filterSlider}>
      <img  className={classes.filterSlider__icon}  src='/yurt.svg' />
      </div>

    </Slider>
  );
}