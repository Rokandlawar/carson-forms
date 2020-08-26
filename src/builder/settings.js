import React, { useState, Fragment } from "react"
import SettingsIcon from '@material-ui/icons/Settings'
import DragHandleIcon from '@material-ui/icons/DragHandle'
import DeleteIcon from '@material-ui/icons/Delete'


export default function (props) {
    const { type, name, handleClick, handleDelete, handleMove } = props
    return (
        <Fragment>
            <SettingsIcon fontSize="small" key='settings' onClick={() => handleClick(type, name)} />
            <DragHandleIcon fontSize="small" key='drag' onClick={() => handleDelete(type, name)} />
            <DeleteIcon fontSize="small" key='delete' onClick={() => handleMove(type, name)} />
        </Fragment>
    )
}