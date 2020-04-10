import React, { useState } from 'react';
import { Grid, Modal, makeStyles, createStyles } from '@material-ui/core';
import {useQuery} from "@apollo/react-hooks";
import { getUsers } from "../../services/user";
import GeneralTable from "../../common/table/GeneralTable";
import CustomForm from '../../common/Form/Form';

const useStyles = makeStyles((theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
    })
);


export default function Users() {
    const classes = useStyles();
    const [visibleModal, setVisibleModal] = useState(false);
    const [userDetail, setUserDetail] = useState(null);
    const {loading, data, error} = useQuery(getUsers);
    if(loading) return 'Loading...';
    const columns = ['Name', 'Time in company', 'Labour'];
    const seeDetail = (detailUser) => {
        console.log('Ho');
        setUserDetail(detailUser);
        setVisibleModal(true);
    }

    const onCancel = () => {
        setVisibleModal(false);
    }
    const submit = (typeOperation, data) => {
        console.log(typeOperation, data);
        setVisibleModal(false);
    }
    if(data)
        return (
        <Grid container>
            <GeneralTable watchDetails={detailUser => seeDetail(detailUser)}  type="user" columns={columns} rows={data.getUsers} />
            <Modal className={classes.modal} open={visibleModal}>
                <CustomForm onCancel={onCancel} onSubmitForm={(typeOperation, data) => submit(typeOperation, data)} obj={userDetail} type='user' typeOperation='detail' />
            </Modal>
        </Grid>
    )
    if(error)
        return(
            <div>Ups! Something happened</div>
        )
}