import React, {useState} from 'react';
import { Grid, Modal, makeStyles, createStyles } from '@material-ui/core';
import {useQuery, useMutation} from "@apollo/react-hooks";
import { getProjects, updateProject, createProject, deleteProject } from "../../services/project";
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
    const [createMutation] = useMutation(createProject);
    const [deleteMutation] = useMutation(deleteProject);
    const [visibleModal, setVisibleModal] = useState(false);
    const [typeInModal, setTypeOperation] = useState('');
    const [projectDetail, setProjectDetail] = useState(null);

    if(loading) return 'Loading...';
    const columns = ['Name', 'Description', 'Phase', 'Technologies'];

    const seeDetail = (detailUser) => {
        setProjectDetail(detailUser);
        setTypeOperation('detail');
        setVisibleModal(true);
    }

    const onCancel = () => {
        setVisibleModal(false);
    }

    const onDeleteItem = () => {
        deleteMutation({
            variables: {
                id: projectDetail.id
            },
            refetchQueries: [
                { query: getProjects }
            ]
        });
        setVisibleModal(false);
    }
    const submit = (typeOperation, {name, description, phase, technologies}) => {
        setVisibleModal(false);
        switch(typeOperation) {
            case 'update':
                let id = projectDetail.id;
                return updateMutation({variables: {
                    name,
                    description,
                    phase,
                    technologies,
                    id

                }})
            case 'create':
                return createMutation({
                    variables: {
                        name, 
                        description,
                        phase,
                        technologies
                    },
                    refetchQueries: [
                        {query: getProjects}
                    ]
                })
            default:
                return null;
        }
    }

    const openNewForm = () => {
        setTypeOperation('create');
        setProjectDetail({
            name: '',
            technologies: '',
            description: '',
            phase: ''
        });
        setVisibleModal(true);
    }

    if(data)
        return (
        <Grid container>
            <GeneralTable onCreate={openNewForm} watchDetails={detailUser => seeDetail(detailUser)}  type="project" columns={columns} rows={data.getProjects} />
            <Modal className={classes.modal} open={visibleModal}>
                <CustomForm onDelete={onDeleteItem} onCancel={onCancel} onSubmitForm={(typeOperation, data) => submit(typeOperation, data)} obj={projectDetail} type='project' typeOperation={typeInModal} />
            </Modal>
        </Grid>
    )
    if(error)
        return(
            <div>Ups! Something happened</div>
        )
}