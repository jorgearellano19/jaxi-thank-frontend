import React from 'react';
import { Grid } from '@material-ui/core';
import CardItem from "./_CardItem";

function Dashboard() {

    const items = [
        {
            title: 'Projects',
            description: 'See the projects that your company are working on!'
        },
        {
            title: 'Users',
            description: 'See the users in the company!'
        },
    ];
    return (
        <Grid container spacing={3}>
            {items.map((item, index) => (
                <CardItem key={index} {...item}/>
            ))}
        </Grid>
    )
}

export default Dashboard;