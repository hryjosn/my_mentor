import React, { useState } from 'react';
import { addDays, format, differenceInDays } from 'date-fns';
import { useStores } from "@store";
import Button from '@material-ui/core/Button';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import { observer } from "mobx-react";
import { SectionTitle, ColumnBox } from "./Calendar.styles";
import { dayFormatter } from "@utils/format";

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const Calendar = () => {
    const { week, assignData, timeList } = useStores()['CalendarStore']
    const [selectedDate, setSelectedDate] = useState(new Date().setHours(0, 0, 0, 0));
    return (
        <div>
            <div>
                <span>
                    {`${format(new Date(), "MM/dd")}, ${dayFormatter[new Date().getDay()]}`}
                </span>
                <Button disabled={week === 0} onClick={() => {
                    assignData({ week: week - 1 })
                }}>
                    <BiChevronLeft size={30}/>
                </Button>
                <Button style={{ marginLeft: 0, marginRight: 10 }} onClick={() => {
                    assignData({ week: week + 1 })
                }}>
                    <BiChevronRight size={30}/>
                </Button>
            </div>
            <ColumnBox>
                {DAYS.map((item, index) => {
                    const currentDate = addDays(new Date(), index - new Date().getDay() + week * 7)
                    if (!(week === 0 && new Date().getDay() > index)) {
                        return (
                            <div key={`Day_${index}`} className={`flex-grow-1 `} onClick={()=>{
                                setSelectedDate(currentDate);
                            }}>
                                <div
                                    className={`root cursor-pointer ${differenceInDays(selectedDate, currentDate.setHours(0, 0, 0, 0)) === 0 ? 'validDay' : 'invalidDay'}`}
                                    key={index}>
                                    <div className={`title-box`}>
                                        <div>
                                            {item}
                                        </div>
                                        <div>
                                            {format(currentDate, "dd")}
                                        </div>
                                    </div>

                                </div>
                                {/*<div>*/}
                                {/*    {timeList?.[format(selectedDate, "yyyy-MM-dd")]?.map((item, index) => <div*/}
                                {/*        key={`time_${index}`}>{(format(new Date(item.time), "HH:mm"))}</div>)}*/}
                                {/*</div>*/}
                            </div>
                        )
                    }
                })}
            </ColumnBox>
            <div>
                {timeList?.[format(selectedDate, "yyyy-MM-dd")]?.map((item, index) => <div
                    key={`time_${index}`}>{(format(new Date(item.time), "HH:mm"))}</div>)}
            </div>
        </div>
    );
}


export default observer(Calendar);
