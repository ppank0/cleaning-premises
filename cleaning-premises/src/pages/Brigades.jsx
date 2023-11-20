import React, { useState, useEffect } from 'react';
import BrigadeItem from '../components/BrigadeItem';
import Footer from '../components/Footer';


const Brigades = () => {
    const [brigades, setBrigades] = useState([]);
    
    async function fetchData() {
      try {
        const response = await fetch('/brigadesData.json');
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const jsonData = await response.json();
        console.log('ЭТО ДАННЫЕ:', jsonData);
        setBrigades(jsonData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    }
  useEffect(() => {
      fetchData();
  }, []);
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('./brigadesData.json');
  //       if (!response.ok) {
  //         throw new Error('Ошибка загрузки данных');
  //       }
  //       const data = await response.json();
  //       setBrigades(data);
  //     } catch (error) {
  //       console.error('Произошла ошибка:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  
    if (brigades.length === 0) {
      return <div>Loading...</div>;
    }

  
    return ( 
        <div className="brigades_page-container">
            {brigades.map(brigade => (
            <ul><li>{brigade.name}</li></ul>
            ))}
            <p>ТУТ ЕСТЬ ТЕЛО</p> 
        </div>

        
      
     );
}
 
export default Brigades;