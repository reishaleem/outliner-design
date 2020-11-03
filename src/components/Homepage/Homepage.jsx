/* eslint-disable import/no-anonymous-default-export */
import { AppBar, Button, makeStyles, Toolbar, Typography, Container, Box } from "@material-ui/core"
import React from "react"

import OnePiece from "../../images/onepieceworld.jpg"

const useStyles = makeStyles(() => ({
    brand: {
        flexGrow: 1
    },
    main: {
        backgroundImage: "url(" + OnePiece + ")",
        backgroundSize: "cover",
    },
    position: {
        position: "absolute",
        top: "30%",
        right: "30%"
    }
}))

export default () => {
    const classes = useStyles();

    return (
        <>
            
            <Box height="100vh" className={classes.main}>
                <AppBar position="static">
                    <Container maxWidth="lg">
                        <Toolbar>
                            
                                <Typography variant="h4" className={classes.brand}>
                                    The Logo
                                </Typography>
                                <Button color="inherit">Sign Up</Button>
                                <Button color="inherit">Login</Button>                               
                        </Toolbar>
                    </Container>
                </AppBar>
                <Box className={classes.position} color="#ffffff">
                    <Typography variant="h3">Here is some text</Typography>
                    <Typography variant="h4">Some more</Typography>
                    <Typography variant="h4">And some more</Typography>
                    <Button color="primary" variant="contained" size="large" fullWidth>Start your journey</Button>
                </Box>
            </Box>
        </>
    )
}