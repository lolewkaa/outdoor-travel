import { CatalogItemType } from "@/types/types";
import classes from "./Card.module.css";
import Link from "next/link";
import CardSlider from "@/ui/CardSlider/CardSlider";
import Button from "@/ui/Button/Button";

type PropsCard = {
  item: CatalogItemType;
};
const Card: React.FC<PropsCard> = ({ item }) => {
  return (
    
    <div className={classes.card}>
      <div className={classes.card__slider}>
      <CardSlider item={item}/>
      </div>
      {item.discount !== '' && (<div className={classes.card__sale_box}>
        <p className={classes.card__sale_text}>{item.discount}</p>
      </div>)}
      <Button buttonStyle={classes.card__btn_like}/>
      <p className={classes.card__text}>{item.title}</p>
      <p className={classes.card__text}>{item.description}</p>
      <p className={classes.card__text}>{item.location}</p>
      <p className={classes.card__text}>{`${item.price} Цена за одну ночь`}</p>
      <Link className={classes.card__link} href={`/catalog/${item.id}`}>
        <div className={classes.card__link_box}>
          <p>Выбрать</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;

