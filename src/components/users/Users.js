import React, { useState } from 'react';
import { Grid, Modal, makeStyles, createStyles } from '@material-ui/core';
import {useQuery, useMutation} from "@apollo/react-hooks";
import { getUsers, updateUser, createUser, deleteUser } from "../../services/user";
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
    const [typeInModal, setTypeOperation] = useState('');
    const [userDetail, setUserDetail] = useState(null);
    const [updateMutation] = useMutation(updateUser);
    const [createMutation] = useMutation(createUser);
    const [deleteMutation] = useMutation(deleteUser);
    const {loading, data, error} = useQuery(getUsers);
    if(loading) return 'Loading...';
    const columns = ['Name', 'Time in company', 'Current job'];
    const seeDetail = (detailUser) => {
        setTypeOperation('detail');
        setUserDetail(detailUser);
        setVisibleModal(true);
    }

    const onCancel = () => {
        setVisibleModal(false);
    }

    const onDeleteItem = () => {
        deleteMutation({
            variables: {
                id: userDetail.id
            },
            refetchQueries: [
                { query: getUsers }
            ]
        });
        setVisibleModal(false);
    }
    const submit = (typeOperation, {name, timeInCompany, currentJob}) => {
        setVisibleModal(false);
        switch(typeOperation) {
            case 'update':
                let id = userDetail.id;
                return updateMutation({
                    variables: {
                        name,
                        timeInCompany: parseInt(timeInCompany, 10),
                        currentJob,
                        id
                    },
                    refetchQueries: [
                        {query: getUsers}
                    ]
            });
            case 'create':
                return createMutation({
                    variables: {
                        name,
                        timeInCompany: parseInt(timeInCompany, 10),
                        currentJob
                    },
                    refetchQueries: [
                        {query: getUsers}
                    ]
                })
            default:
                return null;
        }
    }

    const openNewForm = () => {
        setTypeOperation('create');
        setUserDetail({
            name: '',
            currentJob: '',
            timeInCompany: 0,
        });
        setVisibleModal(true);
    }

    if(data)
        return (
        <Grid container>
            <GeneralTable onCreate={openNewForm} watchDetails={detailUser => seeDetail(detailUser)}  type="user" columns={columns} rows={data.getUsers} />
            <Modal className={classes.modal} open={visibleModal}>
                <CustomForm onDelete={onDeleteItem} onCancel={onCancel} onSubmitForm={(typeOperation, data) => submit(typeOperation, data)} obj={userDetail} type='user' typeOperation={typeInModal} />
            </Modal>
        </Grid>
    )
    if(error)
        return(
            <div>Ups! Something happened</div>
        )
}