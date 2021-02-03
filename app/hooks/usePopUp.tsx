import { useState, useEffect } from "react";
import PopUp from "../components/common/PopUp";

export const usePopUp = (
  initVisible?: boolean
): [
  boolean,
  (flag: boolean) => void,
  (popUpType: string, title: string, msg: string, close: string) => JSX.Element
] => {
  const [isPopUp, setIsPopUp] = useState<boolean>(false);

  const togglePopUp = (flag: boolean) => {
    flag ? setIsPopUp(false) : setIsPopUp(true);
  };

  const onClose = () => {
    setIsPopUp(false);
  };

  const renderPopUp = (
    popUpType: string,
    title: string,
    msg: string,
    close: string
  ) => {
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
    console.log("usePopup start");
    if (initVisible) {
      setIsPopUp(true);
    }
    return () => {};
  }, []);

  return [isPopUp, togglePopUp, renderPopUp];
};
