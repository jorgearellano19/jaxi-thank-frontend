import React, { forwardRef } from 'react'
import { Grid, TextField, Typography, Button } from '@material-ui/core';
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { mapForms } from "./form-map";
const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            height: '50%',
            width: 350,
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
        },
        warning: {
            color: theme.palette.warning.main
        }
    })
);

const CustomForm = forwardRef(({obj, type, typeOperation, onSubmitForm, onCancel}, ref) => {
    const {register, handleSubmit, errors} = useForm();
    const classes = useStyles();
    const formObject = mapForms(type);

    const onSubmit = (data) => {
        console.log('Submit');
        onSubmitForm(typeOperation, data);
    }
    return (
            <Grid  container direction="column" justify="space-around" className={classes.root}>
                <Grid item>
                    <Typography variant={'h2'}>{type === 'user' ? 'User' :  'Project' }</Typography>
                </Grid>
                <form onSubmit={handleSubmit(onSubmit)}>
                {type === 'user' ? Object.keys(formObject).map((prop, index) => (
                    <Grid item key={index}>
                        <TextField 
                        defaultValue={obj[prop]} 
                        color="secondary" 
                        className={classes.textField} 
                        name={formObject[prop].name} 
                        inputRef={formObject[prop].required ? register({required: 'Name is required'}): null} 
                        variant="outlined" 
                        type={formObject[prop].name === 'timeInCompany' ? 'number' : 'text'}
                        label={formObject[prop].label}
                         ></TextField> 
                       {errors[formObject[prop].name] && <p className={classes.warning}> {formObject[prop].message} </p>}   
                    </Grid>
                )): null}
                <Grid item container justify="flex-end" spacing={2}>
                    <Grid item xs={4}>
                        <Button onClick={onCancel} variant="contained">Cancel</Button>
                    </Grid>
                    <Grid item xs={4}>
                        {typeOperation !== 'create' ? <Button variant="contained">Delete</Button> : null}
                    </Grid>
                    <Grid item xs={4}>
                        <Button type="submit" variant="contained">Save</Button>
                    </Grid>
                </Grid>
                </form>
            </Grid>
    )
});

export default CustomForm;