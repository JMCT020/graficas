import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment from 'moment';

const Calendar = ({label, onChange, value}) => {
    console.log(value);
    return(
        <div style={{margin: "10px", width: "100%"}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                <DatePicker
                    label={label}
                    value={value}
                    onChange={(newValue) => {
                        const format = moment(newValue).format("MM/DD/YYYY")
                        return onChange(format)
                    }}
                />
                </DemoContainer>
            </LocalizationProvider>
        </div>
    )
}

export default Calendar