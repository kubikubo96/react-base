import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import HomeIcon from '@material-ui/icons/Home';
import {makeStyles} from '@material-ui/core/styles';
import {
    setDrawerOpen,
    selectDrawerOpen,
} from "../../../stores/slices/drawer/drawerOpenSlice";
import {Link} from 'react-router-dom';
import withUrlParams from "../../higher-order-component/withUrlParams";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 500,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0.5, 0),
        color: '#3f51b5',
    },
    listMenu: {
        "& span": {
            fontSize: 18,
            color: '#3f51b5',
        },
        "& svg": {
            color: '#3f51b5',
        }
    },
}));

const MenuDrawer = (props) => {
    const {uuid} = props;
    const classes = useStyles();
    const drawerOpen = useSelector(selectDrawerOpen);
    const dispatch = useDispatch();

    const toggleDrawer = () => {
        dispatch(setDrawerOpen())
    };

    const LinkHome = `/my-assignment/?uuid=${uuid}`;
    const LinkRecordPlan = `/record-plans/?uuid=${uuid}`;
    const listMenu = () => (
        <div
            className={clsx(classes.list, {[classes.fullList]: drawerOpen === false})} //clsx : thay đổi class theo điều kiện
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <List className={classes.drawerHeader}>
                <ChevronLeft/>
            </List>
            <Divider/>
            <List className={classes.listMenu}>
                <Link to={LinkHome} className="link-route">
                    <ListItem button>
                        <ListItemIcon><HomeIcon/></ListItemIcon>
                        <ListItemText primary="Trang Chủ"/>
                    </ListItem>
                </Link>
                <Link to={LinkRecordPlan} className="link-route">
                    <ListItem button>
                        <ListItemIcon><AssignmentIcon/></ListItemIcon>
                        <ListItemText primary="Lịch Sản Xuất"/>
                    </ListItem>
                </Link>
                <Link to={LinkHome} className="link-route">
                    <ListItem button>
                        <ListItemIcon><DevicesOtherIcon/></ListItemIcon>
                        <ListItemText primary="Quản lý thiết bị"/>
                    </ListItem>
                </Link>
            </List>
        </div>
    );

    return (
        <React.Fragment>
            <Drawer anchor={"left"} open={drawerOpen} onClose={toggleDrawer}>
                {listMenu("left")}
            </Drawer>
        </React.Fragment>
    );
};

export default withUrlParams(MenuDrawer);
