import React, { useState } from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const WebAPI = JSON.stringify('../CARSON_API/api'),

const defaults = {
    value: '',
    items: [],
    fullWidth: true,
    error: false,
    disabled: false,
    required: true,
    helperText: '',
    upload: true
}

export default function (props) {
    const { value, handleFieldValue, ...otherProps } = { ...defaults, ...props }
    const { label, helperText, items, name, fullWidth } = otherProps

    const control = useRef(null)
    const [state,setState] = useState(()=>{
        return {
            file: result,
            value: result.id,
            progress: false,
            upload: false
        }
    })

    const onSelect = (event) => {
        event.preventDefault();
        let file = control.current.files[0]
        if (file.size < 4194304) {
            uploadFile(file, this.attachmentId).then(result => {
                setState({
                    file: result,
                    value: result.id,
                    progress: false,
                    upload: false
                })
                console.log('after upload res---', result)
            }).catch(ex => {
                console.log(ex);
                setState({
                    progress: false,
                    error: true,
                    message: ex
                })
            })
        }
    }
    return (
        <div>
            <FormControl fullWidth={fullWidth} error={error} required={required} disabled={disabled}>
                <FormLabel>{label}</FormLabel>
                <div className={upload ? 'd-block' : 'd-none'}>
                    <div className='form-row'>
                        <input type="file"
                            className='form-control'
                            name="attachments"
                            disabled={disabled}
                            onChange={onSelect}
                            ref={e => control = e}
                        />
                    </div>
                </div>
                {
                    (file) && <div key={file.id}>
                        {file && file.name}
                        <span>
                            {this.props.isEdit && <IconButton onClick={this.handleDelete}>
                                <DeleteIcon />
                            </IconButton>}
                        </span>
                        <span>
                            <IconButton href={WebAPI + '/Files/View/' + file.id}>
                                <DownwardIcon />
                            </IconButton>
                        </span>
                    </div>
                }
                <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
        </div>
    )
}