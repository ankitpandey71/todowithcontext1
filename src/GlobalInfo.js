import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getToDB } from "./PouchDB";

export const GlobalInfoVar = createContext();

export const GlobalInfo = ({ children }) => {
  const [itemsList, setItemsList] = useState([]);

  const getToDBFun = async () => {
    const data = await getToDB();
    setItemsList(data?.rows);
  };

  const value = React.useMemo(
    () => ({ getToDBFun, itemsList }),
    [itemsList.length]
  );

  useEffect(() => {
    getToDBFun();
  }, []);

  console.log("render globsl info", value);
  return (
    <GlobalInfoVar.Provider value={value}>{children}</GlobalInfoVar.Provider>
  );
};

GlobalInfo.propTypes = {
  children: PropTypes.objectOf(PropTypes.node).isRequired,
};
