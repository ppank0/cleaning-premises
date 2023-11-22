import React, { useState, useEffect } from 'react';
import BrigadeItem from '../components/BrigadeItem';
import Footer from '../components/Footer';
import data from './brigadesData.json'
import './../styles/brigades.css'


const Brigades = () => {
  const [brigades, setBrigades] = useState([]);
    
  useEffect(() => {
    setBrigades(data)
  }, []);
  
  
    if (brigades.length === 0) {
      return <div>Loading...</div>;
    }

  
    return ( 
      <>
        <div className="brigades_page-container">
            {brigades.map(brigade => (
              <BrigadeItem key={brigade.id} brigade={brigade} />
            ))}
            
        </div>
        <Footer/>
      </>

     );
}
 
export default Brigades;