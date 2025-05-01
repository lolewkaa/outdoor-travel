"use client";
import Button from "@/components/ui/ui-kit/Button/Button";
import classes from "./style.module.css";
import { useState } from "react";
import PopupFilter from "@/components/ui/business/PopupFilter/PopupFilter";
import { useDispatch } from "react-redux";
import { SortType } from "@/store/slices/types";
import { setSortType } from "@/store/slices/housesSlice";
import Dropdown from "@/components/ui/ui-kit/Dropdown/Dropdown";

export default function FilterButtons() {
  const [popupFilter, setIsOpenPopupFilter] = useState(false);
  const [selectedSort, setSelectedSort] = useState<SortType | null>(null);
  const dispatch = useDispatch();

  const sortOptions = [
    { value: "expensive", label: "Сначала дороже" },
    { value: "cheapest", label: "Сначала дешевле" },
    { value: "none", label: "Без сортировки" },
  ];

  const handleSortSelect = (value: string) => {
    const sortValue = value as SortType;
    setSelectedSort(sortValue);
    dispatch(setSortType(sortValue));
  };

  return (
    <div className={classes.filterButtons}>
      <div className={classes.filterButtons__container}>
        <Button
          clickButton={() => setIsOpenPopupFilter(true)}
          text="Фильтры"
          buttonStyle={classes.filterButtons__btn}
        />
        <Button text="Цена" buttonStyle={classes.filterButtons__btn} />
      </div>
      <Dropdown
        options={sortOptions}
        selectedValue={selectedSort || undefined}
        onSelect={handleSortSelect}
        placeholder="Сортировка"
        className={classes.filterButtons__btn}
      />
      {popupFilter && (
        <PopupFilter setIsOpenPopupFilter={setIsOpenPopupFilter} />
      )}
    </div>
  );
}
