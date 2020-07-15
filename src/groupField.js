import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { Components } from './helpers'

const defaults = {
    className: 'col'
}

export default function GroupField(props) {

    const { type, isGrid, fields, value, handleFieldValue, ...otherProps } = { ...defaults, ...props }

    const { className } = otherProps

    const addField = () => {
        console.log('addField')
    }

    const data = value || {}

    return (
        <div className='col-12'>
            {isGrid ?
                <Button onClick={addField} color="primary">
                    <AddIcon />
                </Button> : null
            }
            <div className='row'>
                {Components(fields, data, { handleFieldValue: handleFieldValue })}
            </div>
        </div>
    )

}
