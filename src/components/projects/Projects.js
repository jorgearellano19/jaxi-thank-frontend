import React from 'react';
import { Grid, Fab } from '@material-ui/core';
import GeneralTable from "../../common/table/GeneralTable";


export default function Projects() {
    const columns = ['Name', 'Description', 'Phase', 'Technologies'];
    const rows = [
        {
            name: 'Project',
            description: 'Description project',
            phase: 'Dev',
            technologies: ['Node JS', 'React', 'Graphql']
        }
    ]
    return (
        <Grid container>
            <GeneralTable type="project" columns={columns} rows={rows} />

        </Grid>
    )
}