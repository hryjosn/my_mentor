import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import { observer } from 'mobx-react';
import { useStores } from "@store";
import Calendar from "@components/Calendar";

const Issue = () => {
    const router = useRouter()
    const params = router.query.params || []
    const issueId = params[0];
    const { IssueStore, CalendarStore } = useStores();
    const { init, title, description, author, reset } = IssueStore;
    const { getListById } = CalendarStore;

    useEffect(() => {
        (async () => {
            await init(issueId);
            getListById(IssueStore.author._id);
        })()
        return () => {
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
            <Calendar />
        </>
    );
};


export default observer(Issue);

