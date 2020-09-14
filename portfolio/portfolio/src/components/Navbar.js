import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import Footer from "./Footer";
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemIcon,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core";
import {
    ArrowBack,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";
import avatar from "../image1.gif";

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: "white",
        height: "100%"

    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    }
        
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <Apps/>,
        listText: "Projects",
        listPath: "/portfolio"

    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact",
        listPath: "/contacts"
    }

]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = (slider, open) => () => {
        setState({
            ...state, [slider]: open });
        
    };

    const classes= useStyles()
    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div"
        onCLick={toggleSlider(slider,false)}
        >
            <Avatar className={classes.avatar} src={avatar} alt="Johnny Huynh"></Avatar>
            <Divider />
                <List>
                    {menuItems.map((lsItem, key)=>(
                        <ListItem button key={key} component={Link} to={lsItem.listPath}>
                            <ListItemIcon className={classes.listItem}>
                                {lsItem.listIcon}
                            </ListItemIcon>
                            <ListItemText 
                                className={classes.listItem}
                                primary={lsItem.listText}
                            />
                        </ListItem>
                    ))}
                </List>
        </Box>
    );

    return (
        <>
            <Box component="nav">
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <iconButton onClick={toggleSlider("right", true)}>
                            <ArrowBack></ArrowBack>
                        </iconButton>
                        <Typography variant="h5" style= {{color: "white"}}>
                            Portfolio
                        </Typography>
                        <MobilRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider("right",false)}>
                            {sideList("right")}
                            <Footer />
                        </MobilRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar
