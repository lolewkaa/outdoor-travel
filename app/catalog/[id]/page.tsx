import { CatalogItemType } from "@/types/types";
import classes from "./catalogItem.module.css";

type CatalogProps = {
  params: CatalogItemType;
};

export default async function CatalogItem({ params }: CatalogProps) {
  const response = await fetch(`http://localhost:4000/houses/${params.id}`);
  const house = await response.json();
    return (
      <div className={classes.catalogItem}>
        {house.title}
      </div>
    );
  }