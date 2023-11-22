import './../styles/roomItem.css'
import React, { useState } from "react";
import MyPopup from './CustomPopup'

const RoomItem = ({room}) => {
    return ( 
        <>
            <div className="roomItem-container">
                <h3 className='roomItem_container-title'>{room.name}</h3>
                <MyPopup 
                    item ={<button className='popup-btn'>Информация</button>}
                    popupContent={<div style={{padding:'2rem 4rem'}}>
                    <p style={{marginBottom:'1rem'}}>Статус: {room.cleaned}</p>
                    <p>Последняя уборка помещения была: {room.lastCleanedDate}</p>
                </div>}
                    />
                
            </div>
        </>
     );
}
 
export default RoomItem;