import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import logo from '../../logo.svg';

const useStyles = makeStyles((theme) => 
    createStyles({
        root: {
            backgroundColor: theme.palette.background.paper,
            height: 200
        },
        logo: {
            height:100,
            weight: 100
        },
        logoContainer: {
            paddingTop: 30,
            marginRight:10
        }

    })
)

function SidebarHeader () {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div className={classes.logoContainer}>
                <img alt="logo" className={classes.logo} src={logo}></img>
            </div>
            <div>
                <Typography color={'primary'} variant={'h5'}>Jorge Arturo Arellano del Aguila</Typography>
                <Typography color={'primary'} variant={'h5'}>Full Stack developer</Typography>
            </div>
        </div>
    )
}

export default SidebarHeader;