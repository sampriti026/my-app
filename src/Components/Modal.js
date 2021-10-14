import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import {FaUserCircle} from "react-icons/fa";
import { BiPlus } from "react-icons/bi";


const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 380px;
  height: 380px;
  background: #fff;
  color: #000;
  position: relative;
  border-radius: 15px;
  
`;


const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
`;



const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 13px;
  left: 346px;
  width: 18px;
  height: 18px;
  padding: 0;
  z-index: 10;
  border: 1px;
`;

const UserIcon = styled(FaUserCircle)
`
left: 28px;
top: 111px;
position: absolute;
width: 20px;
height: 20px;
`
const AddIcon = styled(BiPlus)
`
position: absolute;
left: 348px;
top: 114px;
color: #979797;
`

const Title = styled.div
`
position: absolute;
left: 28px;
top: 28px;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;  
    line-height: 24px;
    display: flex;
    
    color: #0D0A07;  
`;
const Input = styled.input
`
position: absolute;
left: 28px;
top: 67px;
width: 235px;
height: 27px;
border: 1px solid #979797;
box-sizing: border-box;
border-radius: 5px;
font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 8px;
line-height: 10px;
color: #C4C4C4;
padding: 11px;
`;

const Button = styled.button
`
position: absolute;
left: 273px;
top: 67px;
width: 74.57px;
height: 27px;
background: #0D0A07;
border-radius: 5.14286px;
font-family: Inter;
font-style: normal;
font-weight: 300;
font-size: 9px;
display: flex;
align-items: center;
padding-left: 15px;
line-height: 11px;
color: #FFFFFF;
border-width: 0px;
`
const AssignButton = styled.button
`
position: absolute;
left: 273px;
top: 331px;
width: 74.57px;
height: 27px;
background: #EC535B;
border-radius: 5.14286px;
font-family: Inter;
font-style: normal;
font-weight: 300;
font-size: 9px;
display: flex;
align-items: center;
padding-left: 13px;
line-height: 11px;
color: #FFFFFF;
elevation: 0;
box-shadow: none;
border-style: solid;
border-width: 0px;
`
const User = styled.div
`
left: 62px;
top: 116px;
position: absolute;
width: 59px;
height: 10px;
font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 8px;
line-height: 10px;
color: #0D0A07;
`;

const UserId = styled.div
`
left: 156px;
top: 116px;
position: absolute;
width: 103px;
height: 10px;
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 8px;
line-height: 10px;
color: #979797
`
const Task = styled.div
`
left: 299px;
top: 116px;
position: absolute;
width: 59px;
height: 10px;
font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 8px;
line-height: 10px;
color: #0D0A07;
`

const Link = styled.div
`
position: absolute;
left: 28px;
top: 339px;
width: 69px;
height: 11px;
font-family: Inter;
font-style: 'underline';
font-weight: 500;
font-size: 8px;
line-height: 10px;
color: #0D0A07;
text-decoration: underline;
`


export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <Title>Drafting/PAS-3</Title>
                <Input type="text" placeholder="Enter their email address" />
                <Button> 
                    Send Invite
                </Button>
                <UserIcon/>
                <AssignButton>Assign Case</AssignButton>
                <User>Sharique Uddin</User>
                <UserId>shariqueuddin@icloud.com</UserId>
                <Task>Drafting</Task>
                <AddIcon/>
                <Link >Copy Invite Link</Link>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};


