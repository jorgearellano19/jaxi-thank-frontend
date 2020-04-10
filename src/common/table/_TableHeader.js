import * as React from 'react';
import { TableHead, TableRow, TableCell, makeStyles, createStyles } from '@material-ui/core';
import PropTypes from "prop-types";
const useStyles = makeStyles((theme) =>
    createStyles({
        row: {
            backgroundColor: '#929492',
        },
        cell: {
            color: theme.palette.secondary.main
        }
    })
);

function TableHeader({columns}) {
    const classes = useStyles();
    return(
        <TableHead>
            <TableRow className={classes.row}>
                {columns.map((col, index) => (
                <TableCell key={index} className={classes.cell} >{col}</TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

TableHeader.propTypes = {
    columns: PropTypes.array
}

export default TableHeader;