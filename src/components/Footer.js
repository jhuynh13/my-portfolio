import React from 'react'
import { makeStyles } from "@material-ui/styles"
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
                fill: "tomato",
                fontSize: "1.8rem",
            }
        } 
    },
});

const Footer = () => {

    const classes = useStyles()

    return (
        <BottomNavigation width="auto" style={{background: "#222"}}>
            <BottomNavigationAction 
                className={classes.root}
                style={{padding: 0}}
                icon={<LinkedInIcon/>}
                href={"https://www.linkedin.com/in/johnny-huynh-1738391b8/"}
                target={"_blank"}
            />
            <BottomNavigationAction 
                className={classes.root}
                style={{padding: 0}}
                icon={<GitHubIcon/>}
                href={"https://github.com/jhuynh13"}
                target={"_blank"}
            />
        </BottomNavigation>
    )
}

export default Footer
