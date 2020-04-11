import React, {useState} from 'react';
import { Grid, Modal, makeStyles, createStyles } from '@material-ui/core';
import {useQuery, useMutation} from "@apollo/react-hooks";
import { getProjects, updateProject } from "../../services/project";
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
    const [updateMutation] = useMutation(updateProject);
    const [visibleModal, setVisibleModal] = useState(false);
    const [projectDetail, setProjectDetail] = useState(null);
    if(loading) return 'Loading...';
    const columns = ['Name', 'Description', 'Phase', 'Technologies'];

    const seeDetail = (detailUser) => {
        setProjectDetail(detailUser);
        setVisibleModal(true);
    }

    const onCancel = () => {
        setVisibleModal(false);
    }
    const submit = (typeOperation, {name, description, phase, technologies}) => {
        console.log(projectDetail);
        let id = projectDetail.id;
        setProjectDetail(data);
        setVisibleModal(false);
        switch(typeOperation) {
            case 'update':
                return updateMutation({variables: {
                    name,
                    description,
                    phase,
                    technologies,
                    id

                }})
            default:
                return null;
        }
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