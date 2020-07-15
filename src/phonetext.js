import React, { useState } from "react";
import Cleave from 'cleave.js/react';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input'

export default function (props) {
    const { value, handleFieldValue, ...otherProps } = props
    const { label, name, fullWidth, required, disabled, error, message } = otherProps
    return (
        <div>
            <FormControl margin='dense' fullWidth={fullWidth ? fullWidth : true} disabled={disabled} error={error} required={required}>
                <InputLabel>{label}</InputLabel>
                <Input inputComponent={PhoneMask} onChange={handleFieldValue} value={value} />
                <FormHelperText>{message}</FormHelperText>
            </FormControl>
        </div>
    )
}

function PhoneMask(props) {
    const { inputRef, ...other } = props;

    console.log('phone props', props)

    return <Cleave {...other}
        ref={inputRef} onChange={(e) => props.onChange(e.target.rawValue)}
        options={{
            blocks: [3, 3, 4],
            numericOnly: true
        }}
    />
}