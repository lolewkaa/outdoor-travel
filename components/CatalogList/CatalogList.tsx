'use client';

import { useEffect } from 'react';
import { useGetHousesQuery } from '../../store/api/housesApi';
import Card from '../Card/Card';
import classes from "./catalog.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { getHouses } from '@/store/slices/housesSlice';
import { RootState } from '@/store/store';

export default function CatalogList() {
  const { data, error, isLoading } = useGetHousesQuery();
  const dispatch = useDispatch();
  const useAppSelector = useSelector.withTypes<RootState>();
  const houses = useAppSelector((state) => state.houses.displayedHouses);


  useEffect(() => {
    if (data) dispatch(getHouses(data));
  }, [data, dispatch]);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки данных</div>;

  return (
    <div className={classes.catalogList}>
        {houses?.map((house) => (
          <Card key={house.id} item={house}/> 
        ))}
    </div>
  );
}