import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { withApollo } from "../../lib/apollo";
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/layout';
import Link from "next/link";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { cart } from "../redux/action/cart";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    media: {
        height: 500,
    },
}));
const PRODUCT = gql`
  query getProduct($url_key: String!) {
    products(filter: { url_key: { eq: $url_key } }) {
      items {
        id
        name
        description{
            html
          }
        price_range{
            maximum_price{
            final_price{
                value
                currency
            }
            }
        }
        thumbnail{
            url
        }
      }
    }
  }
`;
const ProductPage = () => {
    const router = useRouter();
    const url_key = router.query.url_key;
    const response = useQuery(PRODUCT, {
        variables: {
            url_key: url_key,
        },
    });
    const { loading, error, data } = response;
    if (loading) {
        return <div>loading...</div>;
    }
    if (error) {
        return <div>error...</div>;
    }
    const product = data.products.items;
    const classes = useStyles();
    const [count, setCount] = useState(0);

    const dispatch = useDispatch();

    const Addcart = (id) => {
        dispatch(
          cart({
            id: id,
            img: document.getElementById("img").src,
            title: document.getElementById("title").innerText,
            qty: parseInt(document.getElementById("qty").value),
            price: parseInt(document.getElementById("price").innerText)
          })
        )
      };
    return (
        <Layout>
            <div className={styles.container}>
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className={styles.main}>
                    {product.map((val, idx) => {
                        return (
                            <>
                                <div className={classes.root} key={idx}>
                                    <Grid container>
                                        <Grid item xs={5} className={classes.mediasection}>
                                        <img id="img" src={val.thumbnail.url} className={classes.media}/>
                                        </Grid>
                                        <Grid item xs={6}>
                                            
                                    <h2 id="title">{val.name}</h2>
                                    <h4>{val.price_range.maximum_price.final_price.currency} <div id="price" style={{ display: 'inline-block' }}>{val.price_range.maximum_price.final_price.value}</div></h4>

                                    <div dangerouslySetInnerHTML={{ __html: val.description.html }}></div>
                                    <button style={{ background: '#ccc', color: '#232323' }} onClick={() => { if (count > 0) { setCount(count - 1) } }}>-</button>
                                            <input style={{ width: '30px', display: 'inline-block', textAlign: 'center' }} id="qty" type="text" min="0" value={count} readOnly />
                                            <button style={{ background: '#ccc', color: '#232323' }} onClick={() => setCount(count + 1)}>+</button>
                                            <button onClick={() => { if (count > 0) { Addcart(val.id) }}}>Add To Cart</button>
                                        </Grid>
                                    </Grid>
                                    
                                </div>
                            </>
                        );
                    })}
                </main>
            </div>
        </Layout>
    );
};
export default withApollo({ ssr: true })(ProductPage);