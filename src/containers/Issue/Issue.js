import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import { observer } from 'mobx-react';
import { useStores } from "@store";

const Issue = () => {
    const router = useRouter()
    const params = router.query.params || []
    const issueId = params[0];
    const { IssueStore } = useStores();
    const { init, title, description, author,reset } = IssueStore;
    useEffect(() => {
        init(issueId);
        return()=>{
            reset();
        }
    }, []);

    return (
        <>
            <div>
                title: {title}
            </div>
            <div>
                description: {description}
            </div>
            <div>
                Author: {author?.firstName + author?.lastName}
            </div>
        </>
    );
};


export default observer(Issue);

