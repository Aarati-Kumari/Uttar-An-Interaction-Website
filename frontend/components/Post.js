import { Avatar } from '@material-ui/core'
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlineRounded, MoreHorizOutlined, RepeatOneOutlined, ShareOutlined } from '@material-ui/icons'
import React from 'react'
import './css/Post.css'
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Post() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const Close = <CloseIcon />;

  return (
    <div className='post'>
       <div className='post_info'>
        <Avatar />
        <h4>User Name</h4>
        <small>Timestamp</small>
       </div>
       <div className='post_body'>
         <div className='post_question'>
          <p>
            Question......
          </p>
          <button 
          onClick={() => setIsModalOpen(true)}
          className='post_btnAnswer'>Answer</button>
          <Modal
          open={isModalOpen}
          closeIconIcon={Close} onClose ={()=>setIsModalOpen(false)}
           closeOnEsc 
           center
           closeOnOverlayClick={false}  
           styles={{
             overlay:{
               height:"auto"
             },
           }}      
           >
            <div className='modal_question'>
            <h1> This is test question.</h1>
            <p>asked by{" "}<span>
              Username</span>{" "}on<span>{" "}timestamp</span></p>
           </div>
           <div  className="modal_answer"> 
           <ReactQuill placeholder="Enter your answer"/>
           </div>
           <div className ="modal_buttons">
           <button className="cancel" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="submit" className="add" >
                Add Question
              </button>
           </div>
           </Modal>
         </div>
        </div>  
        <div className='post_footer'>
            <div className='post_footerAction'>
                <ArrowUpwardOutlined />
                <ArrowDownwardOutlined />
            </div>
            <RepeatOneOutlined />
            <ChatBubbleOutlineRounded />
            <div className='post_footerLeft'>
                <ShareOutlined />
                <MoreHorizOutlined />
            </div>
       </div>
       <p
          style={{
            color: "whitesmoke",
            fontSize: "12px",
            fontWeight: "bold",
            margin: "10px 0" 
          }}
       >1 Answer</p>
       <div 
         style={{
            margin: "5px 0px 0px 0px",
            padding: "5px 0px 0px 20px",
            borderTop: "1px solid gray",
            marginTop: "10px",
         }}
       className='post_answer'>
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: "10px 5px",
            borderTop: "1px solid gray",
        }} className='post_answer_container'>
            <div style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                fontSize: "12px",
                fontWeight: 600,
                color: "whitesmoke",
            }} className='post_answered'>
                <Avatar />
                <div style={{
                    margin: "0px 10px",
                    marginTop:"10px",
                }} className='post-info'>
                    <p>
                        UserName
                    </p>
                    <span>Timestamp</span>
                </div>
            </div>
            <div className='post-answer'>Answer.....</div>
        </div>
       </div>
    </div>
  )
}

export default Post