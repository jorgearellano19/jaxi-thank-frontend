import React, { forwardRef } from 'react'
import { Grid, TextField } from '@material-ui/core';
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            height: '60%',
            width: 300,
            minHeight: 500,
            backgroundColor: theme.palette.background.default,
            overflow: 'auto',
            justifyItems: 'center',
            textAlign: 'center'
        },
        playerInfo: {
            height:'100%',
            paddingTop: 10,
            textAlign: 'center'
        },
        textField: {
            marginBottom: 10
        }
    })
);

const UserDetail = forwardRef(({player, onCreate, onUpdate, onDelete}, ref) => {
    const {register, handleSubmit, errors} = useForm();
    const classes = useStyles();
    return (
            <Grid  container direction="column" justify="center" className={classes.root}>
                <Grid item>
                   <TextField color="secondary" className={classes.textField} name="user" inputRef={register({required: 'Name is required'})} variant="outlined" label="Name" ></TextField> 
                </Grid>
                <Grid item>
                <TextField name="user" inputRef={register({required: 'Name is required'})} variant="outlined" label="Name" ></TextField> 
                </Grid>
                <Grid item>
                <TextField name="user" inputRef={register({required: 'Name is required'})} variant="outlined" label="Name" ></TextField> 
                </Grid>
                <Grid item>
                <TextField name="user" inputRef={register({required: 'Name is required'})} variant="outlined" label="Name" ></TextField> 
                </Grid>
            </Grid>
    )
});

export default UserDetail;