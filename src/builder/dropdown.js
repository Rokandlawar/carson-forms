import React from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const defaults = {
    value: '',
    items: [],
    fullWidth: true,
    required: true,
    className: 'col',
    disabled: false,
    error:false
}

export default function (props) {
    const { value, handleFieldValue, ...otherProps } = { ...defaults, ...props }
    const { label, helperText, items, name, fullWidth, className, required, error, disabled } = otherProps
    return (
        <div className={className}>
            <FormControl fullWidth={fullWidth} required={required} error={error} disabled={disabled}>
                <InputLabel>{label}</InputLabel>
                <Select
                    value={value}
                    onChange={handleFieldValue}
                    inputProps={{
                        name: name
                    }}
                >
                    {
                        items && items.map(each => {
                            const { name, value } = each
                            return <MenuItem value={value} key={value}>{name}</MenuItem>
                        })
                    }
                </Select>
                <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
        </div>
    )
}