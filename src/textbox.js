import React, { useState } from "react";
import TextField from '@material-ui/core/TextField'

const defaults = {
    value: '',
    fullWidth: true,
    className: 'col',
    required: true,
    helperText: '',
    error: false,
    disabled: false
}

export default function (props) {
    const { value, handleFieldValue, ...otherProps } = { ...defaults, ...props }
    const { label, name, fullWidth, className, required, helperText, error, disabled } = otherProps
    return (
        <div className={className}>
            <TextField
                required={required}
                value={value}
                label={label}
                onChange={handleFieldValue}
                name={name}
                fullWidth={fullWidth}
                error={error}
                helperText={helperText}
                disabled={disabled}
            />
        </div>
    )
}