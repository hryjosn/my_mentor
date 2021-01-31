import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import { observer } from 'mobx-react';
import { useStores } from "@store";
import Calendar from "./components/Calendar";
import { Button, Page } from '@components';
import ScheduleModal from "./components/ScheduleModal";

const Issue = () => {
    const router = useRouter()
    const params = router.query.params || []
    const issueId = params[0];
    const { IssueStore, CalendarStore, ScheduleModalStore } = useStores();
    const { init, title, description, author, reset, } = IssueStore;
    const { openModal } = ScheduleModalStore;
    const { getListById, week } = CalendarStore;
    useEffect(() => {
        (async () => {
            await init(issueId);
            await getListById(IssueStore.author._id);
        })()
        return () => {
            reset();
        }
    }, [week]);

    return (
        <Page>
            <div>
                title: {title}
            </div>
            <div>
                description: {description}
            </div>
            <div>
                Author: {author?.firstName + author?.lastName}
            </div>
            <Button onClick={()=>{
                openModal();
            }}>Schedule</Button>
            <Calendar/>
            <ScheduleModal/>
        </Page>
    );
};


export default observer(Issue);

