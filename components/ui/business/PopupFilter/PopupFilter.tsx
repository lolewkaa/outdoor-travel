import React from "react";
import styles from "./style.module.css";
import Popup from "../../ui-kit/Popup/Popup";
import { PropsPopupFilter } from "./types";
import PopupFilterItem from "@/components/PopupFilterItem/PopupFilterItem";
import {
  comfort,
  entertainment,
  environment,
  typePlacement,
  typesOfHouses,
} from "@/utils/constants";
import PriceSelector from "@/components/PriceSelector/PriceSelector";

const PopupFilter: React.FC<PropsPopupFilter> = ({ setIsOpenPopupFilter }) => {
  return (
    <Popup onClose={() => setIsOpenPopupFilter(false)}>
      <button
        className={styles.filterPopup__btn}
        onClick={() => setIsOpenPopupFilter(false)}
      >
        <img src="./close.svg" />
      </button>
      <div className={styles.filterPopup__box}>
        <PriceSelector />
        <div className={styles.filterPopup__container}>
          <PopupFilterItem
            name="Тип размещения"
            array={typePlacement}
            category="typePlacement"
          />
          <PopupFilterItem
            name="Типы домов"
            array={typesOfHouses}
            category="typesOfHouses"
          />
          <PopupFilterItem
            name="Окружение"
            array={environment}
            category="environment"
          />
          <PopupFilterItem name="Удобства" array={comfort} category="comfort" />
          <PopupFilterItem
            name="Впечатления"
            array={entertainment}
            category="entertainment"
          />
        </div>
      </div>
    </Popup>
  );
};

export default PopupFilter;
