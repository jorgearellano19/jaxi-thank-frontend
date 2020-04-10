import React, {useState} from 'react';
import { Grid, Modal, makeStyles, createStyles } from '@material-ui/core';
import {useQuery} from "@apollo/react-hooks";
import { getProjects } from "../../services/project";
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

export default function Projects() {
    const classes = useStyles();
    const {loading, data, error} = useQuery(getProjects);
    const [visibleModal, setVisibleModal] = useState(false);
    const [projectDetail, setProjectDetail] = useState(null);
    if(loading) return 'Loading...';
    const columns = ['Name', 'Description', 'Phase', 'Technologies'];

    const seeDetail = (detailUser) => {
        console.log('Ho');
        setProjectDetail(detailUser);
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
            <GeneralTable watchDetails={detailUser => seeDetail(detailUser)}  type="project" columns={columns} rows={data.getProjects} />
            <Modal className={classes.modal} open={visibleModal}>
                <CustomForm onCancel={onCancel} onSubmitForm={(typeOperation, data) => submit(typeOperation, data)} obj={projectDetail} type='project' typeOperation='detail' />
            </Modal>
        </Grid>
    )
    if(error)
        return(
            <div>Ups! Something happened</div>
        )
}