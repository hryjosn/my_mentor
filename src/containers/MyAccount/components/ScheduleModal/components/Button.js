import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const ScheduleButton = (props) => {
    const { children } = props

    return (
        <Button  variant="outlined" {...props}>
            {children}
        </Button>
    );
};
export default (ScheduleButton);

