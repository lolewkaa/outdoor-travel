import Card from "@/components/Card/Card";
import { CatalogItemType } from "@/types/types";
import classes from "./catalog.module.css";

export default async function Catalog() {
  const response = await fetch('http://localhost:4000/houses');
  const houses = await response.json();

    return (
      <section className={classes.catalog}>
            catalog
            <div className={classes.catalog__container}>
            {houses.map((el: CatalogItemType) => <Card key={el.id} item={el}/> )}
            </div>
       </section>
    );
  }