import React, { useState, useEffect } from 'react';
import BrigadeItem from '../components/BrigadeItem';
import Footer from '../components/Footer';
import data from './brigadesData.json'


const Brigades = () => {
  const [brigades, setBrigades] = useState([]);

  useEffect(() => {
    setBrigades(data)
  }, []);

  if (brigades.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="brigades_page-container">
      <ul>
        {brigades.map(brigade => (
          <li key={brigade.id}>{brigade.name}</li>
        ))}
      </ul>
      <p>ТУТ ЕСТЬ ТЕЛО</p>
    </div>
  );
}

export default Brigades;

