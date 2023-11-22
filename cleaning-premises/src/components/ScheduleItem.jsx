import './../styles/scheduleItem.css'
import React, { useState } from "react";
import MyPopup from './CustomPopup'

const ScheduleItem = ({schedule}) => {
    const [schedule_item, setSchedule_item] = useState({

        id: schedule.id,
        room: schedule.room,
        brigade: schedule.brigade,
        date:schedule.date,
        time: schedule.time,
        CleanStatus: schedule.CleanStatus
    }
    );
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    function handleDeleteFunction() {
        setIsPopupOpen(true);
    }
    function handleCancel(){
        setIsPopupOpen(false);
    }
    function handleConfirm(schedule_id) {
        if(schedule.id===schedule_id){
            setSchedule_item(
                null
            );
            console.log(schedule_item);
            handleCancel();
        }
        else{
            handleCancel();
        }
    }
    const rowClassName = schedule_item === null ? "schedule_item-tr-hidden" : "schedule_item-tr";
    return ( 
        <>
        {isPopupOpen && (
            <MyPopup
            item={<tr onClick={handleDeleteFunction} className={rowClassName} key={schedule.id}>
            <td>{schedule.room}</td>
            <td>{schedule.brigade}</td>
            <td>{schedule.date}</td>
            <td>{schedule.time}</td>
            <td>{schedule.CleanStatus}</td>
        </tr>}
              popupContent={<div style={{padding:'2rem 4rem', textAlign:'center'}}>
                <p>Действительно хотите удалить эту строку?</p>  
                <div style={{marginTop:'1rem', display:'flex', justifyContent:'center'}}>
                    <button onDoubleClick={() => handleConfirm(schedule.id)} className='popup-btn'>Да</button>
                    <button onClick={handleCancel} className='popup-btn'>Нет</button>
                </div>
            </div>}/>
            )
        }

           {!isPopupOpen&&
           <tr onClick={handleDeleteFunction} className={rowClassName} key={schedule.id}>
                <td>{schedule.room}</td>
                <td>{schedule.brigade}</td>
                <td>{schedule.date}</td>
                <td>{schedule.time}</td>
                <td>{schedule.CleanStatus}</td>
            </tr>
           } 
            
        </>
     );
}
 
export default ScheduleItem;