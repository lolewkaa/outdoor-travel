import React from "react";
import styles from "./style.module.css";
import Popup from "../../ui-kit/Popup/Popup";
import { PropsPopupFilter } from "./types";
import PopupFilterItem from "@/components/PopupFilterItem/PopupFilterItem";
import {
  filterConfigs,
} from "@/utils/constants";
import PriceSelector from "@/components/PriceSelector/PriceSelector";

const PopupFilter: React.FC<PropsPopupFilter> = ({ setIsOpenPopupFilter }) => {
  const handleClose = () => setIsOpenPopupFilter(false);
  return (
    <Popup onClose={handleClose}>
      <button
        className={styles.filterPopup__btn}
        onClick={handleClose}
      >
        <img src="./close.svg" />
      </button>
      <div className={styles.filterPopup__box}>
        <PriceSelector />
        <div className={styles.filterPopup__container}>
          {filterConfigs.map((filter) => (
            <PopupFilterItem
              key={filter.category}
              name={filter.name}
              filterArray={filter.array}
              category={filter.category}
            />
          ))}
        </div>
      </div>
    </Popup>
  );
};

export default PopupFilter;
