import React, { useState } from 'react';
import { addDays } from 'date-fns';
import { MdModeEdit } from 'react-icons/md';
import { useStores } from "@/store";

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const getDateNum = (nextDay) => {

    const today = new Date()
    let dateNum = addDays(today, nextDay).getDate()
    if (dateNum < 10) {
        dateNum = "0" + dateNum
    }
    return dateNum
}

const Calendar = () => {
    const [week, setWeek] = useState(0)
    const { openModal, paramsUpdate } = useStores()['ScheduleModalStore']
    return (
        <div>
            <h3 className={"section-title"}>
                <span>
                    Available times
                </span>
                <MdModeEdit size={20}/>
            </h3>
            <div className={"at-column-box"}>
                {DAYS.map((item, index) => {
                    const pastDay = week === 0 && new Date().getDay() > index
                    return (
                        <div className={`root cursor-pointer ${pastDay ? 'invalidDay' : 'validDay'}`}
                             key={index}
                             onClick={() => {
                                 openModal()
                                 paramsUpdate("date", new Date(new Date().getFullYear(), new Date().getMonth(), getDateNum(index - new Date().getDay() + week * 7)))
                             }}>
                            <div className={"title-box"}>
                                <div>
                                    {item}
                                </div>
                                <div>
                                    {getDateNum(index - new Date().getDay() + week * 7)}
                                </div>
                            </div>
                        </div>)
                })}
            </div>
        </div>
    );
}


export default Calendar;
