import Footer from "../components/Footer";


import React from 'react';
import { PDFDownloadLink, Document, Page, Text, StyleSheet, View  } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import {Docxtemplater} from 'docxtemplater';
import PizZip from 'pizzip';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    padding: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
  section: {
    marginBottom: 10,
  },
});

const generatePDFReport = () => {
  const data = [
    { room: 'Кухня', cleaner: 'Иванова', date: '10.01.2024' },
    { room: 'Ванная комната', cleaner: 'Петров', date: '11.01.2024' },
    // Добавьте другие данные об уборке помещений
  ];

  const MyPDFReport = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Отчет по учету уборки помещений</Text>
        {data.map((item, index) => (
          <View key={index} style={styles.section}>
            <Text>Помещение: {item.room}</Text>
            <Text>Уборщик: {item.cleaner}</Text>
            <Text>Дата: {item.date}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );

  const blob = new Blob([<MyPDFReport />], { type: 'application/pdf' });
  saveAs(blob, 'report.pdf');
};

const generateDOCXReport = () => {
    const data = [
      { room: 'Кухня', cleaner: 'Иванова', date: '10.01.2024' },
      { room: 'Ванная комната', cleaner: 'Петров', date: '11.01.2024' },
      // Добавьте другие данные об уборке помещений
    ];
  
    const template = `
    <h1>Отчет по учету уборки помещений</h1>
    {{#each this}}
        <div>
        <p>Помещение: {{room}}</p>
        <p>Уборщик: {{cleaner}}</p>
        <p>Дата: {{date}}</p>
        </div>
    {{/each}}
    `;
  
    const doc = new Docxtemplater();
    doc.loadZip(new PizZip(template));
    doc.setData({ data });
    doc.render();
  
    const generatedDocument = doc.getZip().generate({ type: 'blob' });
    saveAs(generatedDocument, 'report.docx');
  };

const UserProfile = () => {
  return (
    <>
      <div className="container" style={{ minHeight: '60vh' }}>
        <h1 className="text-center mt-5">ПРОФИЛЬ</h1>
        <div className="d-flex justify-content-center mt-5">
          <button className="btn btn-outline-secondary" onClick={generatePDFReport}>
            Скачать отчет об уборке (PDF)
          </button>
          <button className="btn btn-outline-secondary ms-2" onClick={generateDOCXReport}>
            Скачать отчет об уборке (DOCX)
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;