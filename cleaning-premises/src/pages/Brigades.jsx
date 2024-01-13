import React, { useState, useEffect } from 'react';
import BrigadeItem from '../components/BrigadeItem';
import Footer from '../components/Footer';
import data from './brigadesData.json'
import './../styles/brigades.css'
import { Button } from 'bootstrap';


const Brigades = () => {
  const [brigades, setBrigades] = useState([]);
    
  useEffect(() => {
    fetch('http://localhost:3000/api/brigades')
    .then(response => {
        if (response.ok) {
        return response.json();
        }
        throw new Error('Ошибка при выполнении запроса');
    })
    .then(data => {
        setBrigades(data)
    })
    .catch(error => {
        console.error('Ошибка при выполнении запроса:', error);
    });
  }, []);
  
  // const downloadFile = async (format) => {
  //   try {
  //     const response = await fetch('http://localhost:3000/api/formattedData', {
  //       headers: {
  //         Accept: `application/${format}`,
  //       },
  //     });

  //     const content = await response.text();
  //     const fileName = `data.${format.toLowerCase()}`;
  //     const contentType = `application/${format}`;

  //     const blob = new Blob([content], { type: contentType });
  //     const link = document.createElement('a');
  //     link.href = URL.createObjectURL(blob);
  //     link.download = fileName;
  //     link.click();
  //   } catch (error) {
  //     console.error(`Error downloading ${format}:`, error.message);
  //   }
  // };
  const downloadFile = async (format) => {
    try {
      let acceptHeader = '';
  
      if (format === 'html') {
        acceptHeader = 'text/html';
      } else {
        acceptHeader = `application/${format}`;
      }
  
      const response = await fetch('http://localhost:3000/api/formattedData', {
        headers: {
          Accept: acceptHeader,
        },
      });
  
      const content = await response.text();
      const fileName = `data.${format.toLowerCase()}`;
      const contentType = acceptHeader;
  
      const blob = new Blob([content], { type: contentType });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
    } catch (error) {
      console.error(`Error downloading ${format}:`, error.message);
    }
  };
  
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
            <div className="download">
              <h5 className='ms-5'>Скачать инфoрмацию о бригадах</h5>
              <div className="download-buttons d-flex  align-items-start gap-1 ms-5 mb-3">
              <button onClick={() => downloadFile('json')}>Download JSON</button>
              <button onClick={() => downloadFile('xml')}>Download XML</button>
              <button onClick={() => downloadFile('html')}>Download HTML</button>
              </div>
            </div>
        <Footer/>
      </>

     );
}
 
export default Brigades;