import React,{useRef,useEffect} from 'react'
import {HiOutlineInformationCircle} from 'react-icons/hi'
import { AiOutlineDownload,AiOutlineDislike,AiOutlineLike,AiOutlineHeart} from 'react-icons/ai'
import {IoIosRemoveCircleOutline,IoIosCloseCircleOutline} from 'react-icons/io'
function Modal1({title,poster_path,overview,vote_average,closeModal,slider}) {
  let modalRef = useRef()
  useEffect(()=>{
    const elModal = modalRef.current
    console.log(elModal)
    if(!slider) {
      elModal.style.transform = 'translateY(60%)'
      elModal.style.animation = 'none'
    }
  })
  
  return (
    <div className='modal-bg'>
      <div className='modal-wrap' ref={modalRef}>
        <ul className='modal-list'>
          <li className='ml-item'>
            <span>
              <HiOutlineInformationCircle/>
            </span>Episodes and Info
          </li>
          <li className='ml-item'>
            <span><AiOutlineDownload/></span>Download Episode
          </li>
          <li className='ml-item'>
            <span><AiOutlineDislike/></span>
            Not for me
          </li>
          <li className='ml-item'>
            <span><AiOutlineLike/></span>
            I like this
          </li>
          <li className='ml-item'>
            <span><AiOutlineHeart/></span>
            Love this !
          </li>
          <li className='ml-item'>
            <span><IoIosRemoveCircleOutline/></span>
            Remove From Row
          </li>
        </ul>
        <button className='modal-out' onClick={()=>closeModal(false)}><IoIosCloseCircleOutline/></button>
      </div>
    </div>
  )
}

export default Modal1