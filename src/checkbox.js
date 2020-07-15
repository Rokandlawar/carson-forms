import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText'

const defaults = {
    value: '',
    items: [],
    fullWidth: true,
    required: true,
    className: 'col',
    disabled: false,
    error: false
}


export default function (props) {
    const { value, handleFieldValue, ...otherProps } = { ...defaults, ...props }
    const { name, label, className, items, helperText, fullWidth, error, required, disabled } = otherProps
    return (
        <div className={className}>
            <FormControl component="fieldset" required={required} error={error} fullWidth={fullWidth}>
                <FormGroup row>
                    {
                        items && items.map(each => {
                            const { name, value } = each
                            return <FormControlLabel
                                key={value}
                                value={value}
                                control={<Checkbox checked={value === props.value} onChange={handleFieldValue} name={props.name} />}
                                label={name}
                                labelPlacement="end"
                            />
                        })
                    }
                    <FormHelperText>{helperText}</FormHelperText>
                </FormGroup>
            </FormControl>
        </div>
    )
}