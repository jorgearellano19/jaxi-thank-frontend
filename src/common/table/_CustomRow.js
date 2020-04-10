import * as React from 'react';
import PropTypes from "prop-types";
import { TableRow, TableCell, makeStyles, createStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) =>
    createStyles({
        row: {
            color: theme.palette.secondary.main
        },
        cell: {
            color: theme.palette.secondary.main
        }
    })
);

function CustomRow({row, type}) {
    const classes = useStyles();
    if(type === 'project')
        return(
            <TableRow className={classes.row}>
                <TableCell className={classes.cell} >{row.name}</TableCell>
                <TableCell className={classes.cell} >{row.description}</TableCell>
                <TableCell className={classes.cell} >{row.phase}</TableCell>
                <TableCell className={classes.cell} >{row.technologies.join(' - ')}</TableCell>
            </TableRow>
    )
}

CustomRow.propTypes = {
    columns:PropTypes.arrayOf(PropTypes.string),
    rows: PropTypes.array,
    type: PropTypes.string
}

export default CustomRow;