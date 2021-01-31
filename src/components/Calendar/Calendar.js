import React, { useState } from 'react';
import { addDays, format } from 'date-fns';
import { useStores } from '@/store';
import Button from '@material-ui/core/Button';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import { observer } from 'mobx-react';
import { SectionTitle, ColumnBox } from './Calendar.styles';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const Calendar = () => {
    const { openModal, paramsUpdate } = useStores()['EditTimeModalStore'];
    const { week, assignData, period, timeList } = useStores()['CalendarStore'];
    const { startDate, endDate } = period;
    return (
        <div>
            <SectionTitle>
                <span>
                    Available times
                </span>
            </SectionTitle>
            <div>
                <Button disabled={week === 0} onClick={() => {
                    assignData({ week: week - 1 });
                }}>
                    <BiChevronLeft />
                </Button>
                <Button style={{ marginLeft: 0, marginRight: 10 }} onClick={() => {
                    assignData({ week: week + 1 });
                }}>
                    <BiChevronRight />
                </Button>
                <span>
                    {startDate} - {endDate}
                </span>
            </div>
            <ColumnBox>
                {DAYS.map((item, index) => {
                    const pastDay = week === 0 && new Date().getDay() > index;
                    const currentDate = addDays(new Date(), index - new Date().getDay() + week * 7);
                    return (
                        <div key={`Day_${index}`} className={'flex-grow-1'}>
                            <div className={`root cursor-pointer ${pastDay ? 'invalidDay' : 'validDay'}`}
                                 key={index}
                                 onClick={() => {
                                     openModal();
                                     paramsUpdate('date', currentDate.setHours(0, 0, 0, 0));
                                 }}>
                                <div className={'title-box'}>
                                    <div>
                                        {item}
                                    </div>
                                    <div>
                                        {format(currentDate, 'dd')}
                                    </div>
                                </div>

                            </div>
                            <div>
                                {timeList[format(currentDate, 'yyyy-MM-dd')]?.map((item, index) => <div
                                    key={`time_${index}`}>{(format(new Date(item.time), 'HH:mm'))}</div>)}
                            </div>
                        </div>
                    );
                })}
            </ColumnBox>
        </div>
    );
};


export default observer(Calendar);
