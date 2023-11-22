import React, { useState } from "react";
import './../styles/brigadeItem.css'
import MyPopup from './CustomPopup'


const BrigadeItem = ({brigade}) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isShow, setIsShow] = useState(true);
  const [editedMember, setEditedMember] = useState(null);

  function handleMemberChange(member) {
    setIsShow(false);
    setEditedMember(member);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setEditedMember((prevMember) => ({
      ...prevMember,
      [name]: value,
    }));
  }

  function handleSaveChanges(other) {
    console.log('Сохранены изменения:', editedMember);

    setEditedMember(null);
    setSelectedMember(editedMember);
    brigade.members.map(member=>{
      if(member.id === other.id){
        member.name = editedMember.name;
        member.contact = editedMember.contact;
        member.experience = editedMember.experience;
      }
    })
    setIsShow(true);
    
  }

  function handleCancelChanges() {
    setIsShow(true);
    setEditedMember(null);
  }
    return ( 
        <div className="brigade-container">
            <div className="brigadeItem-title">
                <h2 className="brigade-name">{brigade.name}</h2>
            </div>
            <div className="brigade-body-container">
              <div className="brigade-member">
                <ul className="brigadeItem-member-container">
                    {brigade.members.map(member => (
                        <li key={member.id} >
                          <div className="brigade_member-textbox">
                            <h3 className="brigadeItem_member-name">{member.name}</h3>
                            <p>Стаж работы: {member.experience}</p>
                          </div>
                          
                            <MyPopup
                              buttonText = "Подробнее"
                              popupContent = {<div style={{display: 'flex',
                                        gap: '2rem', padding:'2rem 3rem'}}>
                              <img src={member.img} alt="img"  style={{width:'50%'}}/>
                                 {isShow ? <div style={{fontSize:'1.2rem'}}>
                                  <p style={{fontSize:'2rem', margin:'1.5rem 0'}}>{member.name}</p>
                                  <p style={{marginBottom:'.5rem'}}>Контакты: {member.contact}</p>
                                  <p style={{marginBottom:'.7rem'}}>Стаж работы: {member.experience}</p>
                                  <button className="popup-btn" onDoubleClick={() => handleMemberChange(member)}>Изменить</button>
                                </div> : <div style={{display: 'flex', flexDirection:'column'}}>
                                  <label htmlFor="name">Имя</label>
                                  <input
                                    type="text"
                                    name="name"
                                    value={editedMember?.name || ''}
                                    onChange={handleInputChange}
                                  />
                                  <label htmlFor="contact">Контакты</label>
                                  <input
                                    type="text"
                                    name="contact"
                                    value={editedMember?.contact || ''}
                                    onChange={handleInputChange}
                                  />
                                  <label htmlFor="experience">Стаж работы</label>
                                  <input
                                    type="text"
                                    name="experience"
                                    value={editedMember?.experience || ''}
                                    onChange={handleInputChange}
                                  />
                                    <div style={{display:'flex', gap:'1rem', marginTop:'1rem'}}>
                                      <button onClick={() => handleSaveChanges(member)}>Сохранить</button>
                                      <button onClick={handleCancelChanges}>Отмена</button>
                                    </div>
                                </div>}
                              </div>}
                            />

                        </li>
                    ))}
                </ul>
              </div>

              <div className="brigadeItem-schedule">
                <h3 className="brigadeItem_schedule-title">Расписание:</h3>
                <div className="brigade_schedule-textbox">
                  {brigade.schedule.map(item => (
                          <li key={item.id}>
                              <p className="brigadeItem_shedule date">Дата: {item.date}</p>
                              <p className="brigadeItem_shedule time">Время: {item.time}</p>
                              <p className="brigadeItem_shedule room">Помещение: {item.room}</p>
                              <hr />
                          </li>
                      ))}
                </div>
              </div>     
            </div>     
        </div>
  );
};
 
 
export default BrigadeItem;