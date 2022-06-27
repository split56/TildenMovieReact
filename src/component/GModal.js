import React,{useRef,useEffect} from 'react'
import { AiOutlineLike,AiOutlinePlayCircle} from 'react-icons/ai'
import {BiAddToQueue} from 'react-icons/bi'
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

function GModal({...props}) {
  const setVoteClass = (vote) => {
        if(vote>= 8) {
            return 'green'
        } else if (vote>=6){
            return 'orange'
        } else {
            return 'red'
        }
    }
    let modalRef = useRef()
  useEffect(()=>{
    const elModal = modalRef.current
    console.log(elModal)
    if(!props.slider) {
      elModal.style.transform = 'translateY(-10%)'
      elModal.style.animation = 'none'
    }
  })
  return (
    <div className='modal-bg'>
      <div className='modal-wrap-big' ref={modalRef}>
        <img src={props.poster_path ? IMGPATH+props.poster_path : ''} alt={props.title} className="movie-img"/>
          <div className='movie-des'>
            <h3 className='movie-name'>{props.title}</h3>
            <span className={`tag ${setVoteClass(props.vote_average)}`}>{props.vote_average}</span>
            <span className='movie-lang'>Language : {props.original_language}</span> 
            <span className='movie-like'><AiOutlineLike/> : {props.vote_count}</span>
            <p className='movie-dec'>
              Description : {props.overview}
            </p>
            <div className='btns'>
              <button className='btn play-btn'><AiOutlinePlayCircle/>Play</button>
              <button className='btn add-btn'><BiAddToQueue/>Add to favourite</button>
            </div>
        </div>
        <button className='modal-out' onClick={()=>props.closeModal(false)}>X</button>
      </div>
    </div>
  )
}

export default GModal