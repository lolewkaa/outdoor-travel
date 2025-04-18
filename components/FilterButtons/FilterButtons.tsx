"use client";
import Button from "@/components/ui/ui-kit/Button/Button";
import classes from "./style.module.css";
import { useState } from "react";
import PopupFilter from "@/components/ui/business/PopupFilter/PopupFilter";

export default function FilterButtons() {
    const [popupFilter, setIsOpenPopupFilter] = useState(false);
  return (
    <div className={classes.filterButtons}>
      <div className={classes.filterButtons__container}>
        <Button clickButton={() => setIsOpenPopupFilter(true)} text="Фильтры" buttonStyle={classes.filterButtons__btn}/>
        <Button text="Цена" buttonStyle={classes.filterButtons__btn}/>
      </div>
      <Button text="Сортировка" buttonStyle={classes.filterButtons__btn}/>
      {popupFilter && (
            <PopupFilter setIsOpenPopupFilter={setIsOpenPopupFilter} />
          )}
    </div>
  );
}
