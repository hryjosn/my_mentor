import React, { useEffect } from 'react';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useStores } from "@store";

const Page = ({ children }) => {

    const { snackBarVisible, handleClose, snackBarContent, checkUserInfo } = useStores()['LayoutStore']
    useEffect(() => {
        checkUserInfo()
    }, [])
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

export default Page;
