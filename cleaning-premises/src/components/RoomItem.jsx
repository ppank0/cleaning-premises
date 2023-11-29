import './../styles/roomItem.css'
import React, { useState } from "react";
import MyPopup from './CustomPopup'

const RoomItem = ({room}) => {
    return ( 
        <>
        
        <div className="card" style={{width: '18rem'}}>
        <div className="roomItem-card_header">
                <h5 className="card-title">{room.name}</h5>
        </div>
            <hr className='roomItem-hr'/>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <div className="roomItem-popup_container">
                <MyPopup 
                    item ={<button className='popup-btn'>Информация</button>}
                    popupContent={<div style={{padding:'2rem 4rem'}}>
                    <p style={{marginBottom:'1rem'}}>Статус: {room.cleaned}</p>
                    <p>Последняя уборка помещения была: {room.lastCleanedDate}</p>
                    </div>}
                />
               </div>
        </div>
            
        </>
     );
}
 
export default RoomItem;