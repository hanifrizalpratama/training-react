import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/layout';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function Cart() {
    const data = useSelector((state) => state.cart);
    const [datacart, setDataCart] = useState([]);
    useEffect(() => {
        const getData = () => {
            for (let key in data.cart) {
                setDataCart(prevArray => [...prevArray,
                {
                    img: data.cart[key].data.img,
                    title: data.cart[key].data.title,
                    qty: data.cart[key].data.qty,
                    price: data.cart[key].data.price
                },
                ]);
            }
        };
        getData();
    }, []);
    const classes = useStyles();
    return (
        <Layout>
            <div className={styles.container}>
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className={styles.main}>
                    <div className={styles.cartcategory}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Item</TableCell>
                                        <TableCell align="right">Title</TableCell>
                                        <TableCell align="right">Price</TableCell>
                                        <TableCell align="right">Qty</TableCell>
                                        <TableCell align="right">Subtotal</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {datacart.length > 0 ? (
                                        datacart.map((val, index) => (
                                            <TableRow key={index}>
                                                <TableCell component="th" scope="row">
                                                    <img style={{ maxWidth: '200px' }} src={val.img} />
                                                </TableCell>
                                                <TableCell align="right">{val.title}</TableCell>
                                                <TableCell align="right">{val.price}</TableCell>
                                                <TableCell align="right">{val.qty}</TableCell>
                                                <TableCell align="right">{val.qty * val.price}</TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                            <TableRow><TableCell colSpan={5}>Cart Empty</TableCell></TableRow>
                                        )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </main>
            </div>
        </Layout>
    );
}


export default Cart;