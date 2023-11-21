import React, { useState } from "react";
import './../styles/brigadeItem.css'

const BrigadeItem = ({brigade}) => {
    const [selectedMember, setSelectedMember] = useState(null);

    const handleDoubleClick = (member) => {
    setSelectedMember(member);
  };
  const handleCloseModal = () => {
    setSelectedMember(null);
  };
    return ( 
        <div className="brigade-container">
            <div className="brigadeItem-title">
                <h2 className="brigade-name">{brigade.name}</h2>
            </div>
            <ul className="brigadeItem-member-container">
                {brigade.members.map(member => (
                    <li key={member.id} onDoubleClick={() => handleDoubleClick(member)}>
                        <h3 className="brigadeItem_member-name">{member.name}</h3>
                        <p>Стаж работы: {member.experience}</p>
                    </li>
                ))}
            </ul>

            {selectedMember && (
    <div className="modal-overlay">
      <div className="modal">
        <h3>{selectedMember.name}</h3>
        <p>Стаж работы: {selectedMember.experience}</p>
        <button onClick={handleCloseModal}>Закрыть</button>
      </div>
    </div>
  )}
        </div>
     );
}
 
export default BrigadeItem;