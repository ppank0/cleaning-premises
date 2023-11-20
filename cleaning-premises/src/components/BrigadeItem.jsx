import React from "react";
import './../styles/brigade.css'

const BrigadeItem = ({brigade}) => {
    return ( 
        <div className="brigade-container">
            <h2 className="brigade-name">{brigade.name}</h2>
            <ul>
                {brigade.members.map(member => (
                    <li key={member.id}>
                        <h3>{member.name}</h3>
                        <p>Стаж работы: {member.experience}</p>
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default BrigadeItem;