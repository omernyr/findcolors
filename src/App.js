import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import MainContext from './MainContext';
import BrandsData from "./brands.json";
import { useEffect, useState } from 'react';

function App() {

  const brandArray = []

  Object.keys(BrandsData).map(key => {
    brandArray.push(BrandsData[key])
  });

  const [brands, setBrands] = useState(brandArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [search, setSearch] = useState('');

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    search,
    setSearch,
  }


  useEffect(() => {
    console.log(selectedBrands);
  }, [selectedBrands])

  useEffect(() => {
    console.log(search);
    setBrands(brandArray.filter(brand => brand.title.toLowerCase().includes(search)))
  }, [search])

  return (
    <>
      <MainContext.Provider value={data}>
        <Sidebar />
        <Content />
      </MainContext.Provider>
    </>
  );
}

export default App;
