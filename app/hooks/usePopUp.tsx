import { useState, useEffect } from "react";
import PopUp from "../components/common/PopUp";

export const usePopUp = (
  initVisible?: boolean
): [
  boolean,
  (flag: boolean) => void,
  (
    popUpType: string,
    title: string,
    msg: string,
    close: string,
    cb: () => void
  ) => JSX.Element
] => {
  const [isPopUp, setIsPopUp] = useState<boolean>(false);

  const togglePopUp = (flag: boolean) => {
    flag ? setIsPopUp(false) : setIsPopUp(true);
  };

  const renderPopUp = (
    popUpType: string,
    title: string,
    msg: string,
    close: string,
    cb: () => void
  ) => {
    const onClose = () => {
      setIsPopUp(false);
      cb();
    };

    return (
      <PopUp
        popUpType={popUpType}
        visible={isPopUp}
        onClose={onClose}
        title={title}
        msg={msg}
        close={close}
      />
    );
  };

  useEffect(() => {
    if (initVisible) {
      setIsPopUp(true);
    }
    return () => {};
  }, []);

  return [isPopUp, togglePopUp, renderPopUp];
};
