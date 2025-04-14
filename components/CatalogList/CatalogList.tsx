'use client'
import { useGetHousesQuery } from '../../store/api/housesApi';
import Card from '../Card/Card';
import classes from "./catalog.module.css";
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function CatalogList() {
  const { error, isLoading } = useGetHousesQuery();
  const useAppSelector = useSelector.withTypes<RootState>();
  const houses = useAppSelector((state) => state.houses.displayedHouses);

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