import { useSidebar } from "../context/SidebarContext";

const Test = () => {
  const { sidebar, handleSidebar } = useSidebar();
  return (
    <div>
      Test
      <button onClick={handleSidebar}>toggle</button>
      {sidebar && <>hello</>}
    </div>
  );
};
export default Test;
