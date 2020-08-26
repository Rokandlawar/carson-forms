import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SettingsIcon from '@material-ui/icons/Settings'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { fieldConfigs } from './helpers'

export default function (props) {
    const { type } = props
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(2);
    const { name, tabs } = fieldConfigs[type]
    const entries = Object.entries(tabs)
    const handleChange = (event, newValue) => {
        console.log(newValue)
        setValue(newValue);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                <SettingsIcon fontSize="small" />
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{name}</DialogTitle>
                <DialogContent>
                    <Paper square>
                        {entries.map(each => {
                            const [name, value] = each
                            return <Tabs
                                value={value}
                                indicatorColor="primary"
                                textColor="primary"
                                onChange={handleChange}
                                aria-label="disabled tabs example"
                            >
                                <Tab label="Active" />
                                <Tab label="Disabled" />
                                <Tab label="Active" />
                            </Tabs>
                        })}

                    </Paper>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
