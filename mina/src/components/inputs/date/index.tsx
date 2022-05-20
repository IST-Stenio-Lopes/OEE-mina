import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment from 'moment';
import * as React from 'react';

interface DateI {
    title: string,
    InputValue: string,
    setInputValue(value: string | undefined): void
}

//(e) => props.setValueInput && props.setValueInput(e.target.value)

const DateInput: React.FC<DateI> = ({ title, InputValue, setInputValue }) => {
    const [value, setValue] = React.useState<Date | null>(null);

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
        setInputValue(newValue?.toString());
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label={title}
                value={value}
                /* onChange={(newValue) => {
                    setValue(newValue);
                }} */
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}
export default DateInput;