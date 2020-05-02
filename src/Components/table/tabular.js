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

    // const sortConfirmed = () => {
    //     return (
    //         <>
    //             <TableBody>
    //                 {fetchedState.map((e, i) => (
    //                     <TableRow key={i}>
    //                         <TableCell component="th" scope="row">
    //                             {e.Country}
    //                         </TableCell>
    //                         <TableCell style={{ background: 'rgba(255, 241, 194, 0.3)' }} align="right">{parseInt(e.NewConfirmed)}</TableCell>
    //                         <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{parseInt(e.TotalConfirmed)}</TableCell>
    //                         <TableCell style={{ background: 'rgba(203, 234, 209, 0.3)' }} align="right">{parseInt(e.NewRecovered)}</TableCell>
    //                         <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{parseInt(e.TotalRecovered)}</TableCell>
    //                         <TableCell style={{ background: 'rgba(246, 204, 209, 0.3)' }} align="right">{parseInt(e.NewDeaths)}</TableCell>
    //                         <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{parseInt(e.TotalDeaths)}</TableCell>
    //                     </TableRow>
    //                 ))}
    //             </TableBody>
    //         </>
    //     )
    // }

    return (
        <>
            <div className="container">
                <TableContainer component={Paper}>
                    <Table className={styles.container} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="alert alert-secondary">Country</TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.6)' }} align="center">New Confirmed</TableCell>
                                <TableCell className="alert alert-warning" align="center">Total Confirmed</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.6)' }} align="center">New Recovered</TableCell>
                                <TableCell className="alert alert-success" align="center">Total Recovered</TableCell>
                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.6)' }} align="center">New Deaths</TableCell>
                                <TableCell className="alert alert-danger" align="center">Total Deaths</TableCell>

                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {fetchedState.map((e, i) => (
                                <TableRow key={i}>
                                    <TableCell component="th" scope="row">
                                        {e.Country}
                                    </TableCell>
                                    <TableCell style={{ background: 'rgba(255, 241, 194, 0.3)' }} align="right">{parseInt(e.NewConfirmed)}</TableCell>
                                    <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{parseInt(e.TotalConfirmed)}</TableCell>
                                    <TableCell style={{ background: 'rgba(203, 234, 209, 0.3)' }} align="right">{parseInt(e.NewRecovered)}</TableCell>
                                    <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{parseInt(e.TotalRecovered)}</TableCell>
                                    <TableCell style={{ background: 'rgba(246, 204, 209, 0.3)' }} align="right">{parseInt(e.NewDeaths)}</TableCell>
                                    <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{parseInt(e.TotalDeaths)}</TableCell>
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