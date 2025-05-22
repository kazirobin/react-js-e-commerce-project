import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import TopAd from './components/TopAd/TopAd'

function App() {
  const [sidebar,setSidebar] = useState(true)
 const handleSidebar = () => { setSidebar(!sidebar) }

  return (
    <>
     <TopAd/>
     <Navbar handleSidebar={handleSidebar}/>
     {sidebar && <Sidebar handleSidebar={handleSidebar}/>}
     
    </>
  )
}

export default App
