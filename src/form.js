import React, { useReducer } from 'react';
import formJson from './formJson'
import useForm from './useForm'

const defaults = {
    fields: {},
    data: {},
    rules: {},
    required: false,
    errors: false,
    className: 'row',
    ...formJson
}


export default function Form(props) {

    const { data, fields, ...otherProps } = { ...defaults, ...props }

    const { components } = useForm({ data, fields })

    const { className } = otherProps

    return (
        <form className={className}>
            {components}
        </form>
    )

}
