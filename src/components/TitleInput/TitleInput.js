import React from 'react';
import { Input } from '@material-ui/core';

const TitleInput = ({ title, ...props }) => {
    return (
        <>
            <div>{title}</div>
            <Input
                {...props}
            />
        </>
    );
};


export default TitleInput;
