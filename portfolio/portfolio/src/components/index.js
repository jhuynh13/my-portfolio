import React from 'react'
import Navbar from './Navbar.js';
import Header from'./Header.js';
import Particles from "react-particles-js"
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute"
    }
})

const Home = () => {

    const classes = useStyles()

    return (
        <>
            <Navbar />
            <Header />
            <Particles 
                canbasClassName={classes.particlesCanva}
                params={{
                    particles:{
                        number: {
                            value: 45,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 1,
                                color: "tomato"
                            }
                        },
                        size: {
                            value: 8,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 5,
                                size_min: 0.1,
                                sync: false
                            }
                        }
                    }
                }}
            />
        </>
    );
}

export default Home

