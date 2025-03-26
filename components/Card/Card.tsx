import { House } from "@/types/types";
import classes from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";

type PropsCard = {
  item: House;
};
const Card: React.FC<PropsCard> = ({ item }) => {
  return (
    <Link href={`/houses/${item.id}`}>
    <div className={classes.card}>
      <Image width={273} height={180} src={item.gallery[0]} alt="house image" />
      <p>{item.title}</p>
      <p>{item.description}</p>
      <p>{item.location}</p>
      <p>{`${item.price} Цена за одну ночь`}</p>
    </div>
    </Link>
  );
};

export default Card;

