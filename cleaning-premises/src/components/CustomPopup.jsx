import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './../styles/customPopup.css'

const CustomPopup = ({buttonText, popupContent}) => {

    return ( 
        <Popup trigger={<button className='popup-btn'>{buttonText}</button>} modal>
      {close => (
        <div  onClick={close}>
           <div onClick={e => e.stopPropagation()}>
                {popupContent}
            </div>
        </div>
      )}
    </Popup>
     );
}
 
export default CustomPopup;