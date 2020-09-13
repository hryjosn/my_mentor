import React from 'react';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useStores } from "@store";

const MyInput = ({ children }) => {
    const { snackBarVisible, handleClose, snackBarContent } = useStores()['LayoutStore']
    return (
        <div style={{ height: "100%" }}>
            {children}
            <Snackbar open={snackBarVisible} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    {snackBarContent}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default MyInput;
