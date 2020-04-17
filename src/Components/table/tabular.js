import React, { useState, useEffect } from "react";
import { fetchDataCountries } from "../../api/fetchApi";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from "../table/table.css";


const Tabular = () => {

    const [fetchedState, setFetchedState] = useState([])

    useEffect(() => {
        const fetchAPIState = async () => {
            const dailyData = await fetchDataCountries()
            setFetchedState(dailyData)
            // console.log(dailyData)
        }
        fetchAPIState()
    }, [])

    return (
        <>
            <div className="container">
                <TableContainer component={Paper}>
                    <Table className={styles.container} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="alert-secondary">Country</TableCell>
                                <TableCell className="alert-warning" align="right">Total Infected</TableCell>
                                <TableCell className="alert-success" align="right">Total Recovered</TableCell>
                                <TableCell className="alert-danger" align="right">Total Deaths</TableCell>

                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {fetchedState.map((e, i) => (
                                <TableRow key={i}>
                                    <TableCell component="th" scope="row">
                                        {e.Country}
                                    </TableCell>
                                    <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{parseInt(e.TotalConfirmed) + parseInt(e.NewConfirmed)}</TableCell>
                                    <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{parseInt(e.TotalRecovered) + parseInt(e.NewRecovered)}</TableCell>
                                    <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{parseInt(e.TotalDeaths) + parseInt(e.NewDeaths)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )

}
export default Tabular