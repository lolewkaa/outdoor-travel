import { CSSProperties } from 'react';

export const nextArrowStyles: CSSProperties = {
  display: "block",
  position: "absolute",
  right: "-25px"
};

export const prevArrowStyles: CSSProperties = {
  display: "block",
  position: "absolute",
  left: "-25px",
  zIndex: 100
};
  

export const nextArrowStylesCard = {
  display: "block",
  position: "absolute",
  right: "2px",
};

export const prevArrowStylesCard = {
  display: "block",
  position: "absolute",
  left: "2px",
  zIndex: "100",
};

export const filterSliderStyles = {
  width: "80%",
  borderRadius: "5px",
  margin: "0 auto",
};

export const dotsStyles = {
  height: "20px",
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
  width: "87%",
  position: "absolute",
  bottom: "10px",
  left: "10px",
};

export const sliderItemStyles = {
  height: "10px",
  width: "10px",
  marginLeft: "5px",
  marginRight: "5px",
};

export const sliderItemContainerStyles = {
  margin: "0",
  padding: "0",
  display: "flex",
};

export const filters = [
    { type: 'A frame', icon: '/frame.svg' },
    { type: 'Барнхауз', icon: '/barnkhauz.svg' },
    { type: 'Кемпинг', icon: '/camping.svg' },
    { type: 'Коттедж', icon: '/cottage.svg' },
    { type: 'Зеркальный дом', icon: '/houseMirror.svg' },
    { type: 'Дом на дереве', icon: '/houseTree.svg' },
    { type: 'Модульный дом', icon: '/moduleHouse.svg' },
    { type: 'Сафари тент', icon: '/safariTent.svg' },
    { type: 'Сфера', icon: '/sfera.svg' },
    { type: 'Шатёр', icon: '/tent.svg' },
    { type: 'Типи', icon: '/tipi.svg' },
    { type: 'Дом на воде', icon: '/waterHouse.svg' },
    { type: 'Юрта', icon: '/yurt.svg' }
  ];
