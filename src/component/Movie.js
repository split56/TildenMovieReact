import React,{useState,useRef} from 'react'
import Modal1 from './Modal1';
import GModal from './GModal';
import {FiMoreVertical} from 'react-icons/fi'
import {GrCircleInformation} from 'react-icons/gr'

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

function Movie({title,poster_path,overview,vote_average,original_language,vote_count,slider}) {
    const [modal,setModal] = useState(false)
    const [gModal,setGModal] = useState(false)
    const handleModalOpen  = () =>{
        setModal(true)
        document.body.style.overflow = 'hidden';
        document.body.classList.add('menu-open')
    }
    const handleModalClose = () => {
        setModal(false)
        document.body.style.overflow = 'unset';
        document.body.classList.remove('menu-open')
    }
    const handleGModalOpen  = () =>{
        setGModal(true)
        document.body.style.overflow = 'hidden';
        document.body.classList.add('menu-open')
    }
    const handleGModalClose = () => {
        setGModal(false)
        document.body.style.overflow = 'unset';
        document.body.classList.remove('menu-open')
    }
  return (
    <>
    <div className='movie'>
        <img src={poster_path ? IMGPATH+poster_path : ''} alt={title}/>
        <div className='movie-info'>
            {/* <h3>{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span> */}
            <div className='info-icon' onClick={
                handleGModalOpen
            }><GrCircleInformation/></div>
            <div className='more-icon' onClick={
                handleModalOpen
            }><FiMoreVertical/></div>
            
        </div>
        
    </div>
    {modal && <Modal1 closeModal = {handleModalClose} slider ={slider}/>}
    {gModal && <GModal closeModal = {handleGModalClose} title={title}
    poster_path = {poster_path} overview = {overview} vote_average = {vote_average} original_language={original_language} vote_count={vote_count} slider={slider}/>}
    </>
    
  )
}
// title,poster_path,overview,vote_average
export default Movie