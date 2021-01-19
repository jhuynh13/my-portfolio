import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import {
    Typography,
    Avatar,
    Grid, 
    Box
} from "@material-ui/core"
import avatar from "../images/0.jpeg"
import Typed from "react-typed"

const useStyles = makeStyles (theme=> ({
    avatar: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        margin: theme.spacing(1)
    },
    title: {
        color: "white",
        fontFamily: "Raleway",
        fontSize: "50px"
    },
    subtitle: {
        color: "#004080",
        fontFamily: "Raleway",
        marginBottom: "3rem",
        fontSize: "35px"
    },
    typedContainer:{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}));

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Johnny Huynh" />
            </Grid>
            <Typography className={classes.title} variant ="h4">
                <Typed strings={["Johnny Huynh"]} typeSpeed={80}/>
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant="h5">
                <Typed
                    Typed strings={["Web Design", "Web Development", "MERN Stack"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </Typography>
        </Box>
    );
};

export default Header;
