import Menu from "./Menu";
import menuData from "../../../public/menu-data.json"; // or use the data directly

const Menus = () => {
  return (
    <div className="w-full h-10/12 p-4">
      <Menu items={menuData} />
    </div>
  );
};

export default Menus;
