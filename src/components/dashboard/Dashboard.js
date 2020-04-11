import React from 'react';
import { Grid } from '@material-ui/core';
import CardItem from "./_CardItem";
import { useHistory } from "react-router-dom";

function Dashboard() {
    const history = useHistory();
    const items = [
        {
            title: 'Projects',
            description: 'See the projects that your company are working on!',
            link: '/projects'
        },
        {
            title: 'Users',
            description: 'See the users in the company!',
            link: 'users'
        },
    ];

    const changeRoute = (link) => {
        history.push(link);
    }
    return (
        <Grid container spacing={3}>
            {items.map((item, index) => (
                <CardItem onChangeRoute={(link) => changeRoute(link)} key={index} {...item}/>
            ))}
        </Grid>
    )
}

export default Dashboard;