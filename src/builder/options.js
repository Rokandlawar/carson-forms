import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function Options({ data }) {
    const entries = Object.entries(data)
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
        >
            {
                entries.map(each => {
                    const [category, value] = each
                    const { name, fields } = value
                    return <Fragment key={name}>
                        <ListItem button key={name + 'item'} >
                            <ListItemText primary={name} />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit key={name + 'collapse'}>
                            <List component="div" disablePadding>
                                {Object.entries(fields).map((e, i) => {
                                    const [name, value] = e
                                    const { id, content, index } = value
                                    return <Draggable key={name} draggableId={id} index={index}>
                                        {(provided, snapshot) => (
                                            <ListItem button className={classes.nested}
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <ListItemText primary={name} />
                                            </ListItem>
                                        )}

                                    </Draggable>
                                })}
                            </List>
                        </Collapse>
                    </Fragment>

                })
            }
        </List>
    );
}

