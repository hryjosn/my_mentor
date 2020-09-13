import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import styled from "@emotion/styled";


export default function TextArea(props) {
    return <MyTextArea aria-label="minimum height" rowsMin={3} {...props}/>;
}
const MyTextArea = styled(TextareaAutosize)`
  width: 100%;
`


