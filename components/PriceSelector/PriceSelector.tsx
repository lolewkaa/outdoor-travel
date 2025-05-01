"use client";
import { setPriceRange } from "@/store/slices/housesSlice";
import React, { useEffect, useState } from "react";
import classes from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import InputRange, { Range } from "react-input-range";
import "react-input-range/lib/css/index.css";
import { RootState } from "@/store/store";

const PriceSelector: React.FC = () => {
  const dispatch = useDispatch();
  const useAppSelector = useSelector.withTypes<RootState>();
  const minPrice = useAppSelector(
    (state) => state.houses.selectedFilters.priceRange[0]
  );
  const maxPrice = useAppSelector(
    (state) => state.houses.selectedFilters.priceRange[1]
  );
  const [priceRange, setPriceRangeState] = useState<Range>({
    min: 1000,
    max: 50000,
  });

  const handleChange = (value: number | Range) => {
    if (typeof value === "number") {
      setPriceRangeState({ min: value, max: value });
    } else {
      setPriceRangeState(value);
    }
  };

  useEffect(() => {
    setPriceRangeState({
      min: minPrice,
      max: maxPrice,
    });
  }, [minPrice, maxPrice]);

  useEffect(() => {
    dispatch(setPriceRange([priceRange.min, priceRange.max]));
  }, [priceRange, dispatch]);

  return (
    <div className={classes.priceSelector}>
      <label className={classes.priceSelector__label}>
        От {priceRange.min.toLocaleString()} ₽ до{" "}
        {priceRange.max.toLocaleString()} ₽
      </label>
      <InputRange
        minValue={1000}
        maxValue={50000}
        step={61}
        value={priceRange}
        onChange={handleChange}
        formatLabel={() => ""}
      />
    </div>
  );
};

export default PriceSelector;
