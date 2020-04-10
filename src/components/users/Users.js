import React from 'react';
import { Grid } from '@material-ui/core';
import {useQuery} from "@apollo/react-hooks";
import { getUsers } from "../../services/user";
import GeneralTable from "../../common/table/GeneralTable";


export default function Users() {
    const {loading, data, error} = useQuery(getUsers);
    if(loading) return 'Loading...';
    const columns = ['Name', 'Time in company', 'Labour'];
    console.log(data.getUsers);
    if(data)
        return (
        <Grid container>
            <GeneralTable type="user" columns={columns} rows={data.getUsers} />
        </Grid>
    )
    if(error)
        return(
            <div>Ups! Something happened</div>
        )
}