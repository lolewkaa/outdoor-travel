import classes from "./catalog.module.css";
import FilterSlider from "@/components/ui/business/FilterSlider/FilterSlider";
import CatalogList from "@/components/CatalogList/CatalogList";
import FilterButtons from "@/components/FilterButtons/FilterButtons";

export default async function Catalog() {
    return (
      <section className={classes.catalog}>
        <FilterSlider />
        <FilterButtons />
        <CatalogList />
       </section>
    );
  }