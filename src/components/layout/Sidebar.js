import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Home from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
}));

const Sidebar = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItem button key={"Home"} component={Link} to="/">
                    <ListItemIcon><Home /></ListItemIcon>
                    <ListItemText primary={"Home"} />
                </ListItem>
            </List>
        </div>
    )
}

export default Sidebar;