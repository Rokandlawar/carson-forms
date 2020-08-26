import React, { useState } from "react"
import { fieldTypes } from './fieldTypes'
import Settings from './settings'
import SettingsWindow from './settingsWindow'


export default function ({ components, order }) {
    const entries = Object.entries(components)
    const handleClick = (type, name) => {

    }

    const handleDelete = () => {

    }

    const handleMove = () => {

    }

    return (
        <div >
            {
                entries.map(each => {
                    const [name, value] = each
                    const { type } = value
                    const Comp = fieldTypes[type]
                    return <div key={name}>
                        {/* <Settings type={type} name={name} handleClick={handleClick} handleDelete={handleDelete} handleMove={handleMove}/> */}
                        <SettingsWindow type={type} name={name} />
                        <Comp name={name} key={name} />
                    </div>
                })
            }
        </div>
    )
}