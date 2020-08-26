import React, { useState } from "react";
import TextField from '@material-ui/core/TextField'


export default function (props) {
    const {name} = props
    const handleChange=()=>{

    }
    return (
        <TextField
            value={''}
            label='Description'
            onChange={handleChange}
            name={name}
            fullWidth={true}
        />
    )
}