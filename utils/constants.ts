import { CatalogItemType, FilterableProperty, FilterConfig } from "@/types/types";
import { CSSProperties } from "react";

export const nextArrowStyles: CSSProperties = {
  display: "block",
  position: "absolute",
  right: "-25px",
};

export const prevArrowStyles: CSSProperties = {
  display: "block",
  position: "absolute",
  left: "-25px",
  zIndex: 100,
};

export const nextArrowStylesCard: CSSProperties = {
  display: "block",
  position: "absolute",
  right: "2px",
};

export const prevArrowStylesCard: CSSProperties = {
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

export const dotsStyles: React.CSSProperties = {
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
  { type: "A frame", icon: "/frame.svg" },
  { type: "Барнхауз", icon: "/barnkhauz.svg" },
  { type: "Кемпинг", icon: "/camping.svg" },
  { type: "Коттедж", icon: "/cottage.svg" },
  { type: "Зеркальный дом", icon: "/houseMirror.svg" },
  { type: "Дом на дереве", icon: "/houseTree.svg" },
  { type: "Модульный дом", icon: "/moduleHouse.svg" },
  { type: "Сафари тент", icon: "/safariTent.svg" },
  { type: "Сфера", icon: "/sfera.svg" },
  { type: "Шатёр", icon: "/tent.svg" },
  { type: "Типи", icon: "/tipi.svg" },
  { type: "Дом на воде", icon: "/waterHouse.svg" },
  { type: "Юрта", icon: "/yurt.svg" },
];

export const typePlacement = [
  "Кемпинг",
  "Гостевой дом",
  "Глэмпинг",
  "Загородный отель",
  "База отдыха",
  "Эко-отель",
];

export const typesOfHouses = [
  "A frame",
  "Дом на дереве",
  "Сфера",
  "Сафари тент",
  "Дом на воде",
  "Зеркальный дом",
  "Барнхауз",
  "Кемпинг",
  "Модульный дом",
  "Типи",
  "Коттедж",
  "Юрта",
  "Шатёр",
];

export const environment = ["Горы", "Лес", "Водоемы"];

export const comfort = [
  "Wi-Fi",
  "Зона барбекю",
  "Парковка",
  "Детская площадка",
  "Спортивная площадка"
]

export const entertainment = [
  "Аренда лодок",
  "Каток",
  "Горнолыжный склон",
  "Йога",
  "Велопрогулки",
  "Конные прогулки",
  "Аренда сапов",
  "Сплавы",
  "Чан/купель",
  "Рыбалка",
  "Крытый бассейн",
  "Открытый бассейн",
  "Ферма",
  "Баня",
  "СПА",
  "Тюбинг",
  "Зимняя рыбалка",
  "Новогодняя программа",
  "Снегоходы",
  "Беговые лыжи",
  "Собачья упряжка",
  "Караоке",
  "Веревочный парк"
]

export const filterConfigs: FilterConfig[] = [
  {
    name: "Тип размещения",
    category: "typePlacement",
    array: typePlacement,
  },
  {
    name: "Типы домов",
    category: "typesOfHouses",
    array: typesOfHouses,
  },
  {
    name: "Окружение",
    category: "environment",
    array: environment,
  },
  {
    name: "Удобства",
    category: "comfort",
    array: comfort,
  },
  {
    name: "Впечатления",
    category: "entertainment",
    array: entertainment,
  },
];

export function filterBy (selectedFilters: string[], filteredHouses: CatalogItemType[], property: FilterableProperty) {
  if (selectedFilters.length > 0) {
    filteredHouses = filteredHouses.filter((house) =>
      selectedFilters.every((filter) =>
        house[property].includes(filter)
      )
    );
  }
  return filteredHouses;
}

// Паттерны функционального программирования
// Композиция функций - compose => справа налево
// Пайплайн - pipe => слева направо
export const compose = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...fns: Array<(...args: any[]) => any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) => (x: any) => fns.reduceRight((p, f) => f(p), x);

// compose(
//   filterByComfort,
//   filterByEnvironment,
//   filterByOther,
// )(filteredHouses)

// let filteredByComfort = filterByComfort(array);
// let filterByEnv = filterByEnvironment(filteredByComfort)