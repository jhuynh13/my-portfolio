import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core";
import Navbar from './Navbar';
import project1 from "../images/html.jpeg";
import project2 from "../images/Mean.jpg";
import project3 from "../images/redux.jpg";
import project4 from "../images/mern.jpg";

const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto"
    }
});

const Portfolio = () => {
    const classes = useStyles()
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justify="center">
                <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img" alt="" height="140" image={project1}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Project 1
                                    </Typography>
                                    </CardContent>
                            </CardActionArea>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        E-Commerce web page developed using React library
                                    </Typography>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            <a href="https://clone-91830.web.app">
                                                Live Demo
                                                
                                            </a>
                                        </Button>
                                    
                                    </CardActions>
                                
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img" alt="" height="140" image={project2}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Project 2
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Image gallery web page using the Angular Framework
                                    </Typography>
                                    </CardContent>
                            </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                        <a href="https://jhuynh13.github.io/Mangart-demo">
                                                Live Demo
                                                
                                            </a>
                                        </Button>
                                    
                                    </CardActions>
                                
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img" alt="" height="140" image={project3}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Project 3
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        In Progress
                                    </Typography>
                                    </CardContent>
                            </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Live Demo
                                        </Button>
                                    
                                    </CardActions>
                                
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img" alt="" height="140" image={project4}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Project 4
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        In Progress
                                    </Typography>
                                    </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Live Demo
                                        </Button>
                                    
                                    </CardActions>
                        </Card>
                    </Grid>
            </Grid>
        </Box>
    );
};

export default Portfolio
