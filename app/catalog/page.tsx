import classes from "./catalog.module.css";
import FilterSlider from "@/ui/FilterSlider/FilterSlider";
import CatalogList from "@/components/CatalogList/CatalogList";

export default async function Catalog() {
    return (
      <section className={classes.catalog}>
        <FilterSlider />
        <CatalogList />
       </section>
    );
  }