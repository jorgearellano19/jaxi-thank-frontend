import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import SidebarHeader from './_SidebarHeader';
import {useHistory} from "react-router-dom";
const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: theme.palette.background.default,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    })
);

function Sidebar(props) {
    const classes = useStyles();
    const history = useHistory();
    const optionsBar = [
        {name: 'Dashboard', link: '/', icon: <HomeIcon/>},
        {name: 'Users', link: '/players', icon: (<AccessibilityIcon/>)},
        {name: 'Projects', link: '/stats', icon: (<FormatListNumberedIcon/>)},
    ];

    const handleClick = (link: string) => {
        history.push(link)
    };
    const drawer = (
        <div>
            <SidebarHeader />
            <Divider />
            <List>
                {optionsBar.map((link, index) => (
                    <ListItem button key={link.name} onClick={e => handleClick(link.link)}>
                        {link.icon}
                        <ListItemText primary={link.name} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );
    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
                <Drawer
                    variant="temporary"
                    open={props.isOpen}
                    onClose={props.changeMobileSidebar}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    )
};

export default Sidebar;