import Card from "@/components/Card/Card";
import { House } from "@/types/types";
import classes from "./index.module.css";

type PropsHome = {
  houses: House[];
};

// пишем use client если у нас хуки (useState, useEffect), если у нас браузерные апи типо localStorage
// mutationObserever, если у нас обработчики типо клик формы

export default function Home({houses}: PropsHome) {
    //1. если бы я тут использовалаа useState Useeffect то это был бы клиентский компонент
    // автоматически? давно видела что нужно сверху писать типа useClient
    //2.из getStaticProps можно сохранять в стор или нужен отдельный запрос? (или можно создать cardList, туда
    //прокинуть пропсом houses, добавить в стор с новым полем id и отрисовывать из стора?
    //так не потеряется преимущество серверного рендеринга?
    //3.эти функции нужны только для гет запросов, а если delete post то там все по старому?
    //4. есть ли еще какие то особенности связанные с работой с апи в некстжс, про что почитать
    //5.next с app роутером а не с page роутером (ак отправлять DELETE-запросы в этом контексте)

    return (
      <div>
        <main>
            <div className={classes.houses__container}>
            {houses.map((el) => <Card key={houses.length} item={el}/> )}
            </div>
        </main>
        <footer>
          футер
        </footer>
      </div>
    );
  }
  //я думала это хук или типа того, а тут мы пишем просто свою функцию
  //или это особенное название с функционалом под капотом?
  export async function getStaticProps() {
    const response = await fetch('http://localhost:4000/houses')
    const houses = await response.json()
return {
    props: {houses},
}
  }