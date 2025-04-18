import classes from "./Card.module.css";
import Link from "next/link";

import Button from "@/components/ui/ui-kit/Button/Button";
import { PropsCard } from "./types";
import CardSlider from "../ui/business/CardSlider/CardSlider";

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

