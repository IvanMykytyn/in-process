import { FC } from "react";

import scss from "./loading.module.scss";

const Loading: FC = () => {
  return (
    <div className={scss["lds-default"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export { Loading };
