import { createContext, useContext, useState } from "react";

const sidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <sidebarContext.Provider value={{ sidebar, handleSidebar }}>
      {children}
    </sidebarContext.Provider>
  );
};
export const useSidebar = () => {
  const context = useContext(sidebarContext);
  return context
};
