import React, { useState } from 'react';
import { format, addDays } from 'date-fns';
import { Button } from '@material-ui/core';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let hours = [];
for (let i = 9; i <= 24; i++) {
    hours.push(i);
}
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
    return (
        <div>
            <h3 className={"section-title"}>
                    <span>
                        Available times
                    </span>
            </h3>
            <div>
                <Button disabled={week === 0} onClick={() => {
                    setWeek(week - 1)
                }}>
                    <BiChevronLeft/>
                </Button>
                <Button style={{ marginLeft: 0, marginRight: 10 }} onClick={() => {
                    setWeek(week + 1)
                }}>
                    <BiChevronRight/>
                </Button>
                <span>
                        {format(addDays(new Date(), week * 7), "yyyy-MM-dd")}
                    </span>
            </div>
            <div className={"at-column-box"}>
                {DAYS.map((item, index) => {
                    const pastDay = week === 0 && new Date().getDay() > index
                    return (
                        <div className={`root ${pastDay ? 'invalidDay' : 'validDay'}`} key={index}>
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
