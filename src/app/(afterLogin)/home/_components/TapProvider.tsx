import React, { createContext, PropsWithChildren } from "react";

export const TabContext = createContext({
  tap: "rec",
  setTap: (_tap: "rec" | "fol") => {},
});

const TapProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [tap, setTap] = React.useState<"rec" | "fol">("rec");

  return (
    <TabContext.Provider value={{ tap, setTap }}>
      {children}
    </TabContext.Provider>
  );
};

export default TapProvider;
