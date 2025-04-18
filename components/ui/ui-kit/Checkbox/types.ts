import { ChangeEvent } from "react";

export type PropsCheckbox = {
    text: string;
    type: string;
    checked: boolean;
    // eslint-disable-next-line no-unused-vars
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  };