import React, { Fragment } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import FormHelperText from '@material-ui/core/FormHelperText';

function DatePicker(props) {

    const { value, handleFieldValue, ...otherProps } = props
    const { label, helperText, name, fullWidth } = otherProps

    return (
        <div>
            <KeyboardDatePicker
                fullWidth={fullWidth ? fullWidth : true}
                clearable
                value={value}
                label={label}
                onChange={handleFieldValue}
                name={name}
                format="MM/dd/yyyy"
            />
            <FormHelperText>{helperText}</FormHelperText>
        </div>
    );
}

export default DatePicker;