import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


interface DateAndTimeI {
    title: string,
    InputValue: string,
    setInputValue(value: string | undefined): void
}

//(e) => props.setValueInput && props.setValueInput(e.target.value)

const DateAndTimeInput: React.FC<DateAndTimeI> = ({ title, InputValue, setInputValue }) => {
    const [value, setValue] = React.useState<Date | null>(
        new Date(), //'2014-08-18T21:11:54'
    );

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
        setInputValue(newValue?.toString());
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
                <DateTimePicker
                    label={title}
                    //value={value}
                    //mask="DD | hh | mm | ss" "dd/mm/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                    minDateTime={new Date()}
                //React.FormEvent<HTMLInputElement>
                />
            </Stack>
        </LocalizationProvider>
    );
}
export default DateAndTimeInput;