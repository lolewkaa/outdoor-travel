"use client";
import { useGetHousesQuery } from "../../store/api/housesApi";
import Card from "../Card/Card";
import classes from "./catalog.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { CatalogListProps } from "./types";
import { useEffect, useState } from "react";
import { setHouses } from "@/store/slices/housesSlice";
import Pagination from "../Pagination/Pagination";

export default function CatalogList({ initialHouses }: CatalogListProps) {
  const { error, isLoading } = useGetHousesQuery();
  const useAppSelector = useSelector.withTypes<RootState>();
  const displayedHouses = useAppSelector(
    (state) => state.houses.displayedHouses
  );

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const currentHouses = displayedHouses?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    dispatch(setHouses(initialHouses));
    setCurrentPage(1);
  }, [dispatch, initialHouses]);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки данных</div>;

  return (
    <div className={classes.catalogList}>
      <div className={classes.catalogList__box}>
        {currentHouses?.map((house) => (
          <Card key={house.id} item={house} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        displayedHouses={displayedHouses}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
// "use client";
// import { useGetHousesQuery } from "../../store/api/housesApi";
// import Card from "../Card/Card";
// import classes from "./catalog.module.css";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store/store";

// export default function CatalogList() {
//   const { error, isLoading, data } = useGetHousesQuery();
//   const useAppSelector = useSelector.withTypes<RootState>();
//   const houses = useAppSelector((state) => state.houses.displayedHouses);

//   const data = await request;

//   // const { data } = useHouseStore((state) => ({
//   //   data: state.houses,
//   // }));

//   if (isLoading) return <div>Загрузка...</div>;
//   if (error) return <div>Ошибка загрузки данных</div>;

//   return (
//     <div className={classes.catalogList}>
//       <div className={classes.catalogList__box}>
//         {houses?.map((house) => (
//           <Card key={house.id} item={house} />
//         ))}
//       </div>
//     </div>

//   );
// }

// // Упрощенная внутренняя реализация useGetHousesQuery
// function useGetHousesQuery(arg, options) {
//   // Используется useState для хранения состояния запроса
//   const [data, setData] = useState(undefined);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   // Используется useEffect для выполнения запроса
//   useEffect(() => {
//     let ignore = false;

//     async function fetchData() {
//       setIsLoading(true);

//       try {
//         // Получение данных из кэша или выполнение запроса
//         const result = await queryFn(arg);

//         if (!ignore) {
//           setData(result);
//           setIsSuccess(true);
//           setIsLoading(false);
//         }
//       } catch (err) {
//         if (!ignore) {
//           setError(err);
//           setIsLoading(false);
//         }
//       }
//     }

//     fetchData();

//     // Очистка при размонтировании
//     return () => {
//       ignore = true;
//     };
//   }, [arg, queryFn, options.skip]);

//   // Возвращаем объект с состоянием запроса
//   return { data, error, isLoading, isSuccess };
// }
