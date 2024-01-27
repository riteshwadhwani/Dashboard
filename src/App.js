import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './Dashboard/Dashboard';
import Sidebar from './Dashboard/Sidebar';
import Contacts from './scenes/Contacts';
import City from './scenes/City';
import Sector from './scenes/SectorChart';
import Bar from './scenes/Bar';
import Pie from './scenes/Pie';
import Live from './scenes/Live';
import Geography from './scenes/Geography';
import { useContext, useEffect } from 'react';
import { AppContext } from './hooks/useContext';


function App() {
  const {fetchbardata}  = useContext(AppContext);
  useEffect(()=>{
    fetchbardata();
  },[]);
  return (
    <div className='h-[750px] w-vw'>
     <div className=" flex h-[750px] flex-row items-start  bg-slate-400">
     <Sidebar/>
     <main className='h-screen'>
     <Navbar className=" h-20% w-[100%]"/>
     <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/contact' element={<Contacts/>}/>
      <Route path='/city' element={<City/>}/>
      <Route path='/sector' element={<Sector/>}/>
      <Route path='/bar' element={<Bar/>}/>
      <Route path='/piechart' element={<Pie/>}/>
      <Route path='/livechart' element={<Live/>}/>
      <Route path='/location' element={<Geography/>}/>
     </Routes>
     </main>
    </div>
    </div>
   
  );
}

export default App;
