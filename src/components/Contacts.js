import React from 'react';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {TextField, Typography, Button, Grid, Box} from "@material-ui/core";
import { useAlert } from 'react-alert'
import Navbar from "./Navbar";
import emailjs from "emailjs-com"


const useStyles = makeStyles((theme) => ({
    form: {
        top: "35%",
        left: "40%",
        transform: "translate(-50%,-50%",
        position: "absolute"
    },
    buttons: {
        marginTop: "1rem",
        color: "tomato",
        borderColor: "tomato"
    }
}));

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato",
        },
        "& label": {
            color: "tan",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "tan",
            },
            "&:hover fieldset": {
                borderColor: "tan",
            },
            "& .Mui-focused fieldset": {
                borderColor: "tan",
            }
        }
    },
})(TextField);

const Contacts = () => {

    const classes = useStyles();

    const sendFeedback = (e) =>{

        e.preventDefault();

        emailjs.sendForm('service_goofbvs', 'template_3qqw5zo', e.target, 'user_mHFr5q4Vb7p1XKtiwvifM')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        e.target.reset();

        alert.show('Successfully Sent');
    };

    const alert = useAlert()

    return (
        
        <Box component="div" style={{ background: "#233", height: "100vh"}}>
            <Navbar />
            <Grid container justify="center">
                <Box component="form" className={classes.form} onSubmit={sendFeedback}>
                    <Typography variant="h5" style={{color: "tomato",textAlign:"center",textTransform:"uppercase",}}>
                        Contact Me 
                    </Typography>
                    <InputField 
                        fullWidth={true} 
                        label="Name" 
                        variant="outlined" 
                        inputProps={{style:{color: "white"} }} 
                        margin="dense" 
                        size="medium" 
                        name="name"
                    />
                    <br />
                    <InputField 
                        fullWidth={true} 
                        label="Email" 
                        variant="outlined" 
                        inputProps={{style:{color: "white"} }} 
                        margin="dense" 
                        size="medium" 
                        name="email"
                    />
                    <br />
                    <InputField
                        id="outlined-multiline-static"
                        label="Message"
                        fullWidth={true} 
                        multiline
                        margin="dense" 
                        rows={5}
                        inputProps={{style:{color: "white"} }} 
                        variant="outlined"
                        name="message"
                    />
                    
                    <Button type="submit" style = {{
                        color: "white", 
                        background: "lightsalmon",
                        margin: "1rem 0 0 0",
                        width: "100%"
                        }}>
                        Send Message
                    </Button>
                </Box>
            </Grid>
        </Box>
    
    );
};

export default Contacts
