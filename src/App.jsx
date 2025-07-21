import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from './routes/route';
import { SidebarProvider } from "./context/SidebarContext";


function App() {
  return (
  <SidebarProvider>
  <RouterProvider router={router}/>
  </SidebarProvider>)
}

export default App;
