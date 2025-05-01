import FilterCheckbox from "../ui/business/FilterCheckbox/FilterCheckbox";
import classes from "./style.module.css";
import { PopupFilterItemProps } from "./types";

export default function PopupFilterItem({ name, filterArray, category }:PopupFilterItemProps) {
  return (
    <div className={classes.popupFilterItem}>
      <p className={classes.popupFilterItem__text}>{name}</p>
      {filterArray.map((el) => (
        <FilterCheckbox
          key={el} 
          item={el} 
          category={category} 
        />
      ))}
    </div>
  );
}