import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";


const Modal = ({ show, onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
    setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
    };
    
    const modalContent = show ? (
            <div className="w-1/4 h-2/4 bg-white top-20 left-80 absolute flex rounded-2xl border-2">
                <a href="#" onClick={handleCloseClick}>x</a>
                {children}
            </div>
    ) : null;

    if (isBrowser) {
    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
    );
    } else {
    return null;
    }
};

export default Modal;

