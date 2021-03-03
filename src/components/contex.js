import React, { useState } from "react";
export const Mycontext = React.createContext();
export const ContexProvider = (props) => {
  const [childAValue, setChildAValue] = useState([
    {
      name: "Ram",
    },
  ]);
   return (
     <Mycontext.Provider value={childAValue}>
       {props.children}
     </Mycontext.Provider>
   );
};
