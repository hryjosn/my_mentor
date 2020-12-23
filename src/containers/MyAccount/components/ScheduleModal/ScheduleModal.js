import React from 'react';
import {
    ScheduleContent,
} from "./ScheduleModal.styles";
import { Modal } from "@components";
import { useStores } from "@store";
import { observer } from "mobx-react";
import styled from "@emotion/styled";
import { format } from "date-fns";
import Slider from "@material-ui/core/Slider";
import { addHours } from 'date-fns';

const ScheduleModal = () => {
    const { visible, closeModal, params } = useStores()['ScheduleModalStore']
    const { date } = params
    const [value, setValue] = React.useState([0, 3]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    console.log(value);

    function valuetext(value) {
        return format(addHours(date, 9 + value), "HH:mm");
    }

    const marks = [];

    if (date) {
        for (let i = 0; i <= 12; i++) {
            marks.push({ value: i, label: format(addHours(date, 9 + i), "HH:mm") });
        }
    }

    return (
        <Modal open={visible} onClose={closeModal} width={"100%"}>
            <div>
                <ScheduleContent>
                    {date && <div>{format(date, "yyyy/MM/dd")}</div>}
                    <Slider
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="always"
                        max={12}
                        marks={marks}
                        // aria-labelledby="range-slider"
                        valueLabelFormat={valuetext}
                        getAriaLabel={valuetext}
                    />
                </ScheduleContent>
                <div className={"text-center"}>
                    <span>
                        {value.map((value, index) => {
                            return (
                                <span
                                    key={`dateTime${index}`}>{format(addHours(date, 9 + value), "HH:mm")} {index === 0 && "- "}</span>
                            )
                        })}
                    </span>

                </div>
            </div>


        </Modal>
    );
};

export default observer(ScheduleModal);
const TextArea = styled.textarea`
    resize: none;
    width: 100%;
    height: 10rem;
`
