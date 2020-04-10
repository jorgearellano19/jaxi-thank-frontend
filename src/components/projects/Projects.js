import React from 'react';
import { Grid } from '@material-ui/core';
import {useQuery} from "@apollo/react-hooks";
import { getProjects } from "../../services/project";
import GeneralTable from "../../common/table/GeneralTable";


export default function Projects() {
    const {loading, data, error} = useQuery(getProjects);
    if(loading) return 'Loading...';
    const columns = ['Name', 'Description', 'Phase', 'Technologies'];
    if(data)
        return (
        <Grid container>
            <GeneralTable type="project" columns={columns} rows={data.getProjects} />
        </Grid>
    )
    if(error)
        return(
            <div>Ups! Something happened</div>
        )
}