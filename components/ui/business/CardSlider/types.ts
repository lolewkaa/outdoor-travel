import { CatalogItemType } from "@/types/types";

export type PropsSlider = {
  item: CatalogItemType;
};

export type ArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}