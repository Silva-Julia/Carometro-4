import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import iconFoto from '../../assets/img/IconFoto.png';
import { parseJwt } from '../../Services/auth';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 90;

`;

const ModalWrapper = styled.div`
  width: 600px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  border: #0D2538 1px solid;

`;



const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modall = ({ showModal, setShowModal, aluno }) => {
  const modalRef = useRef();

  let history = useHistory();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(100%)`
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
                <div className='box_modal'>
                  <div className='box_foto_nome_modal'>
                    <div className='foto_perfil_modal'>
                      <img className='foto_modal' src={"data:image/png;base64," + aluno.fotoDoPerfil} />
                    </div>
                    <h1>{aluno.nomeAluno}</h1>

  
                    <button onClick={() => history.push(`/Perfil/${aluno.idAluno}`) }> Atualizar Dados</button>
                
                    
                  </div>



                  <div className='box_informações_modal'>
                    <div className='box_span'>
                      <span className='box_span_key'>RM: </span>
                      <span className='span_value_modal'>{aluno.rm}</span>
                    </div>

                    <div className='box_span'>
                      <span className='box_span_key_modal'>Turma:</span>
                      <span className='span_value_modal'>{aluno.idSalaNavigation.nomeSala}</span>
                    </div>


                    <div className='box_span'>
                      <span className='box_span_key'>Situacao: </span>
                      {<span
                        className='span_value_modal'

                        style={{
                          'color': aluno.situacao === true ?
                            '#12FE0D' : '#E40A0A'
                        }}
                      >{
                          aluno.situacao === true ?
                            'Aprovado' : 'Reprovado'

                        }</span>}
                    </div>

                    <div className='box_span'>
                      <span className='box_span_key'>Telefone: </span>
                      <span className='span_value_modal'>{aluno.telefone}</span>
                    </div>

                  </div>
                </div>
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