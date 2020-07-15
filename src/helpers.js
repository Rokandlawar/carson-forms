import React from 'react'
import fieldTypes from './fieldtypes'

const mergeTypes = {
    prop: 'fieldProps',
    value: 'fieldValues',
}

export const Components = (fields, data = {}, extras = {}) => {
    const entries = Object.entries(fields)
    return entries.map(each => {
        const [name, component] = each
        const { type, ...otherProps } = component
        const EachComp = fieldTypes[type]
        return <EachComp key={name}   {...otherProps} value={data[name]} {...extras} />
    })
}

export const mergeUpdates = (values) => {
    return values.reduce((accum, each) => {
        const { type, name, ...otherProps } = each
        const mergeType = mergeTypes[type]
        if (accum[mergeType]) {
            if (accum[mergeType][name])
                //recursive mergin. If needed use the commented code
                //accum[mergeType][name] = merge(accum[mergeType][name], otherProps)
                accum[mergeType][name] = { ...accum[mergeType][name], ...otherProps }
            else accum[mergeType][name] = otherProps
        }
        else {
            accum[mergeType] = {}
            accum[mergeType][name] = otherProps
        }
        return accum
    }, {})
}
