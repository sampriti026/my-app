import React, { useState } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './Components/globalStyles';
import { Modal } from './Components/Modal';
import Ownership from './Components/Ownership';
import {Route, Link} from 'react-router-dom';
import Navbar from './Components/Navbar';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <Container>
        <Button onClick={openModal}>I'm a modal</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <Route exact path="/ownership" component={Ownership}/>
        <GlobalStyle/>
        <Navbar/>
      </Container>
    </>
  );
}

export default App;