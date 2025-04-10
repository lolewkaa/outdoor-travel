// import Card from "@/components/Card/Card";
// import { CatalogItemType } from "@/types/types";
import classes from "./catalog.module.css";
import FilterSlider from "@/ui/FilterSlider/FilterSlider";
import CatalogList from "@/components/CatalogList/CatalogList";

export default async function Catalog() {
  // const response = await fetch('http://localhost:4000/houses');
  // const houses = await response.json();

    return (
      <section className={classes.catalog}>
        <FilterSlider />
        <CatalogList />
            {/* <div className={classes.catalog__container}>
            {houses.map((el: CatalogItemType) => <Card key={el.id} item={el}/> )}
            </div> */}
       </section>
    );
  }