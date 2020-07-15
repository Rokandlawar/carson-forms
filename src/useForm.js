import React, { useReducer } from 'react';
import { handleRules as handleEffects } from './rules'
import { mergeUpdates, Components } from './helpers'
import { validations as checkValidations } from './validations'


function handleChanges(updates, data) {
    const entries = Object.entries(updates)
    return entries.reduce((res, each) => {
        const [name, value] = each
        if (typeof value === 'object') {
            return { ...res, [name]: { ...res[name], ...value } }
        }
        else return { ...res, [name]: value }
    }, data)
}


const changesfn = {
    data: handleChanges,
    fields: handleChanges
}

function handleFieldChange(state, action) {
    const entries = Object.entries(action)
    return entries.reduce((res, each) => {
        const [type, value] = each
        return { ...res, [type]: { ...res[type], ...changesfn[type](action[type], res[type]) } }
    }, state)
}

const defaults = {
    fields: {},
    data: {},
    rules: {},
    required: false,
    errors: false
}

export default function useForm(props) {

    const [configs, dispatchFieldsChange] = useReducer(
        handleFieldChange,
        { ...defaults, ...props }
    )

    const { fields, data, rules, required } = configs

    const handleRules = (name, value) => {
        if (rules[name]) {
            handleEffectResults(
                handleEffects(
                    {
                        conditions: rules[name],
                        data: { ...data, [name]: value }
                    }
                )
            )
        }
        else {
            handleUpdates({
                data: {
                    [name]: value
                }
            })
        }
    }

    const handleEffectResults = (res) => {
        Promise.all(res).then(results => {
            handleUpdates(
                {
                    data: data,
                    ...mergeUpdates(results)
                }
            )
        })
    }

    const handleUpdates = (results) => {
        dispatchFieldsChange(results)
    }

    const handleValidationErrors = (name, value) => {
        dispatchFieldsChange({
            fields: {
                [name]: { error: true, helperText: 'Invalid Value' }
            },
            data: {
                [name]: value
            }
        })
    }

    const handleFieldValue = (e) => {
        const { name, value, checked } = e.target
        const { type } = fields[name]
        const temp = checkValidations(type, value)
        if (temp) handleRules(name, value)
        else handleValidationErrors(name, value)
    }


    console.log('form', configs)
    const components = Components(fields, data, { handleFieldValue: handleFieldValue })

    return {
        components
    }
}
