import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { withApollo } from "../../lib/apollo";
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/layout';
import Link from "next/link";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
        width: 345,
    },
    media: {
        height: 400,
    },
});
const PRODUCT_LIST = gql`
  query getProductCategory($category_id: String!) {
    products(filter: { category_id: { eq: $category_id } }) {
      total_count
      items {
        id
        name
        url_key
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
const CategoryPage = () => {
    const router = useRouter();
    const id = router.query.id;
    const response = useQuery(PRODUCT_LIST, {
        variables: {
            category_id: id,
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
    return (
        <Layout>
            <div className={styles.container}>
                <main className={styles.main}>
                    <div className={styles.wrappercategory}>
                        {product.map((val, idx) => {
                            return (
                                <>
                                    <Card className={classes.root} key={idx}>
                                            <CardMedia
                                                className={classes.media}
                                                image={val.thumbnail.url}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    <Link href="/product/[url_key]" as={`/product/${val.url_key}`}>
                                                        <a>{val.name}</a>
                                                    </Link>
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {val.price_range.maximum_price.final_price.currency} {val.price_range.maximum_price.final_price.value}
                                                </Typography>
                                            </CardContent>
                                    </Card>
                                </>
                            );
                        })}
                    </div>
                </main>
            </div>
        </Layout>
    );
};
export default withApollo({ ssr: true })(CategoryPage);