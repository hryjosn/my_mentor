import React from 'react';
import { Modal } from '@material-ui/core';
import styled from "@emotion/styled";
import { MdCancel } from 'react-icons/md';

const MyModal = (props) => {
    const { children, onClose } = props;
    return (
        <Modal
            {...props}
        >
            <div>
                <MainContainer>
                    <HeaderContainer>
                        <HeaderCloseButton onClick={onClose}>
                            <HeaderCloseIcon size={20}/>
                        </HeaderCloseButton>
                    </HeaderContainer>
                    {children}
                </MainContainer>
            </div>
        </Modal>
    );
};

export default MyModal;
const MainContainer = styled.div`
    position: fixed;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    outline: none;
`
const HeaderContainer = styled.div`
  display: flex;
  //height: 40px;
  //padding: 20px 5px;
  //color: white;
  //align-items: center;
  //background-color: darkseagreen;
`;

const HeaderCloseButton = styled.div`
   margin-left: auto;
   cursor: pointer;
   display: flex;
   justify-content: center;
`;

const HeaderCloseIcon = styled(MdCancel)`
    color: white;
`;
