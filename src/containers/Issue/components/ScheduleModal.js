import React, { useState } from 'react';
import { Modal, Button, TitleInput } from "@components";
import { useStores } from "@store";
import { observer } from "mobx-react";
import styled from "@emotion/styled";
// import { Editor, EditorState, convertToRaw } from 'draft-js';

const ScheduleModal = () => {
    const { CalendarStore, ScheduleModalStore } = useStores()
    const { visible, closeModal } = ScheduleModalStore
    const { week, timeList } = CalendarStore;
    console.log("timeList", timeList)
    return (
        <Modal open={visible} onClose={closeModal}>
            <div>
            </div>
        </Modal>
    );
};

export default observer(ScheduleModal);
const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 10rem;
`
