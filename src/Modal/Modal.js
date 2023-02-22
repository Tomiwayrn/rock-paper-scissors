import React from 'react'
import closeBtn from '../imgs/icon-close.svg';
import rulesEasy from '../imgs/image-rules.svg';
import rulesHard from '../imgs/image-rules-bonus.svg';
import './Modal.css'
const Modal = ({easy, setModal}) => {

    function handleClick(){
        setModal(false)
    }
  return (
    <div className='modal'>
        <div className='modal-header'>
            <h1>
                RULES
            </h1>
            <button onClick={handleClick}>
                <img alt='close' src={closeBtn} />
            </button>
        </div>

        <img alt='rules' src={easy?rulesEasy:rulesHard} />
    </div>
  )
}

export default Modal