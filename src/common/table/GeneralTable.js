import * as React from 'react';
import PropTypes from 'prop-types';
import { TableContainer, Paper, Table, TableBody } from '@material-ui/core';
import TableHeader from './_TableHeader';
import CustomRow from './_CustomRow';


function GeneralTable({columns, rows, type}) {
    return(
        <TableContainer component={Paper}>
            <Table>
                <TableHeader columns={columns}/>
                <TableBody>
                    {rows.map((row, index) => (
                        <CustomRow key={index} row={row} type={type}></CustomRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

GeneralTable.propTypes = {
    columns:PropTypes.array,
    rows: PropTypes.array,
    type: PropTypes.string
}

export default GeneralTable;
