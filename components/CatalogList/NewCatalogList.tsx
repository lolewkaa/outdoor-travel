// app/components/NewCatalogList/NewCatalogList.tsx
import Card from "../Card/Card";
import classes from "./catalog.module.css";
import request from "@/utils/request";
import { housesStore } from "../../store/zustand/index";

interface CatalogItemType {
  id: string;
  environment: string[];
  comfort: string[];
  entertainment: string[];
  type: string[];
  description: string[];
  price: string;
  [key: string]: any;
}

async function NewCatalogList() {
  // 1. Загрузка данных на сервере
  let houses: CatalogItemType[] = [];
  try {
    houses = await request({ url: 'http://localhost:4000/houses' });
  } catch (error) {
    console.error('Failed to load houses:', error);
  }

  // 2. Инициализация хранилища серверными данными
  if (houses.length > 0) {
    housesStore.setState({
      originalHouses: houses,
      displayedHouses: houses,
      isLoading: false,
      error: false
    });
  }

  // 3. Получение текущего состояния для рендеринга
  const { displayedHouses, isLoading, error } = housesStore.getState();

  // 4. Рендеринг на сервере
  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки данных</div>;

  return (
    <div className={classes.catalogList}>
      <div className={classes.catalogList__box}>
        {displayedHouses?.map((house) => (
          <Card key={house.id} item={house} />
        ))}
      </div>
    </div>
  );
}

export default NewCatalogList;