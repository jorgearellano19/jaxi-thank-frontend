import React from 'react';
import { Grid, Card, CardActionArea, CardContent, Typography } from '@material-ui/core';

export default function CardItem({title, description}) {
    return(
        <Grid item xs={12} sm={6} lg={4} spacing={3}>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography variant="h6" color="textSecondary" component="p">
                                {description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
    )
}