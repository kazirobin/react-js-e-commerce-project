import Menu from "./Menu";
import menuData from "./menu-data.json"; // or use the data directly

const Menus = () => {
  return (
    <div className="w-full p-4">
      <Menu items={menuData} />
    </div>
  );
};

export default Menus;
