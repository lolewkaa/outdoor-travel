import { useDispatch, useSelector } from "react-redux";

import classes from "./style.module.css";
import { RootState } from "@/store/store";
import { toggleFilter } from "@/store/slices/housesSlice";
import { FilterCheckboxProps } from "./types";

export default function FilterCheckbox({
  item,
  category,
}: FilterCheckboxProps) {
  const dispatch = useDispatch();
  const isChecked = useSelector((state: RootState) =>
    state.houses.selectedFilters[category].includes(item)
  );
  const handleChange = () => {
    dispatch(toggleFilter({ category, value: item }));
  };

  return (
    <div className={classes.filterCheckbox}>
      <input
        type="checkbox"
        id={item}
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor={item}>{item}</label>
    </div>
  );
}
