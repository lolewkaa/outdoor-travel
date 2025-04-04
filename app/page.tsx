import Card from "@/components/Card/Card";
import { CatalogItem } from "@/types/types";
import classes from "./index.module.css";

type PropsHome = {
  houses: CatalogItem[];
};

export default function Home({houses}: PropsHome) {

    return (
      <section className={classes.houses}>
            home page
            {/* <div className={classes.houses__container}>
            {houses.map((el) => <Card key={el.id} item={el}/> )}
            </div> */}
       </section>
    );
  }
  
//   export async function getStaticProps() {
//     const response = await fetch('http://localhost:4000/houses')
//     const houses = await response.json()
// return {
//     props: {houses},
// }
//   }