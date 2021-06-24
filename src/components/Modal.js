import React from 'react';

const Modal = ({open, children, onClose}) => {
    return(
        <div>
            {open === true
                ?   <div> 
                        <button onClick={onClose} className="button"> X </button> {children} 
                    </div>
                : null
            }
        </div>
)
}

export default Modal;