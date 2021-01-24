import React, { useEffect, useCallback, useState } from 'react';
import {
    ScheduleContent,
} from "./ScheduleModal.styles";
import { Modal } from "@components";
import { useStores } from "@store";
import { observer } from "mobx-react";
import { format } from "date-fns";
import { addHours } from 'date-fns';
import Button from './components/Button';
import { Button as SubmitButton } from '@components';

const ScheduleModal = () => {
    const { ScheduleModalStore } = useStores()
    const { visible, closeModal, params, onSubmit } = ScheduleModalStore
    const { date } = params
    const [timeList, setTimeList] = useState([])
    useEffect(() => {
        let list = [];
        for (let i = 9; i <= 20; i++) {
            if (date) {
                list.push({
                    value: addHours(new Date(new Date(date).setHours(0, 0, 0, 0)), i),
                    label: format(addHours(new Date(new Date(date).setHours(0, 0, 0, 0)), i), "HH:mm"),
                    selected: false,
                });
            }
        }
        setTimeList([...list])
    }, [date])


    const handleClick = (item, index) => {
        const copyList = timeList.slice();
        copyList[index] = { ...item, selected: !item.selected }
        setTimeList(copyList)
    }

    return (
        <Modal open={visible} width={"50%"} onClose={() => {
            closeModal();
            const copyList = timeList.map(item => {
                    return { ...item, selected: false }
                }
            )
            setTimeList(copyList);
        }}>
            <div>
                <ScheduleContent>
                    <form onSubmit={async (e) => {
                        await onSubmit(e, timeList);
                    }}>
                        <div>{format(date || new Date(), "yyyy-MM-dd")}</div>
                        <div>
                            {timeList.map((item, index) =>
                                <Button style={{ backgroundColor: item.selected ? "#02cab9" : "" }}
                                        key={`MorningButton_${index}`}
                                        onClick={() => {
                                            handleClick(item, index)
                                        }}>
                                    {item.label}
                                </Button>)}
                        </div>
                        <SubmitButton onClick={(e) => {
                            onSubmit(e, timeList)
                        }}>Submit</SubmitButton>
                    </form>

                </ScheduleContent>
            </div>


        </Modal>
    );
};

export default observer(ScheduleModal);
