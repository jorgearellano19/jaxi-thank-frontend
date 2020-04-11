import * as React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import { TableContainer, Paper, Table, TableBody, Fab } from '@material-ui/core';
import TableHeader from './_TableHeader';
import CustomRow from './_CustomRow';
import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    createStyles({
        addButton: {
            position: 'absolute',
            top: 0,
            right: 0,
            color: theme.palette.background.paper
        },
        table: {
            position: 'relative'
        }
    })
);


function GeneralTable({columns, rows, type, watchDetails, onCreate}) {
    const classes = useStyles();
    
    return(
        <TableContainer component={Paper}  className={classes.table}>
            <Table>
                <TableHeader columns={columns}/>
                <TableBody>
                    {rows.map((row, index) => (
                        <CustomRow onClickDetail={e => watchDetails(row)} key={index} row={row} type={type}></CustomRow>
                    ))}
                </TableBody>
            </Table>
            <Fab onClick={e => onCreate()} className={classes.addButton} aria-label="add">
                <AddIcon color='secondary'/>
            </Fab>
        </TableContainer>
    )
}

GeneralTable.propTypes = {
    columns:PropTypes.array,
    rows: PropTypes.array,
    type: PropTypes.string
}

export default GeneralTable;
