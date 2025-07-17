import menuData from "/src/store/menu-data.json"; // or use the data directly
import Menu from './Menu';

const Menus = ({handleSidebar}) => {
  return (
    <div className="w-full h-10/12 p-4">
      <Menu items={menuData} handleSidebar={handleSidebar}/>
    </div>
  );
};

export default Menus;
