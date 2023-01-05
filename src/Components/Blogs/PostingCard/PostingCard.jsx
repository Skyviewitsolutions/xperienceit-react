import React from 'react';
import "./postingCard.css";
import CardImg from "../../../assets/images/blogsimg.png"
import {GiPlainSquare} from "react-icons/gi"


const PostingCard = () => {
  return (
    <>
    <div className='row'>
        <img src={CardImg} alt="" className='mb-2'/>
        <div className="col-12 d-flex align-items-center">
            <h6 className='text-secondary pr-2 fs-6'>ADITI ABROL</h6>
            <h6 className='text-secondary pr-2 fs-6'><GiPlainSquare size={6}/></h6>
            <h6 className='text-secondary pr-2 fs-6'>DECEMBER 26, 2022</h6>
            <h6 className='text-secondary pr-2 fs-6'><GiPlainSquare size={6}/></h6>
            <h6 className='text-secondary pr-2 fs-6'>LEAVE A COMMENT</h6>
        </div>
    </div>
    </>
  )
}

export default PostingCard