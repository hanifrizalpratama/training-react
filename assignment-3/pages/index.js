import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import { withApollo } from "../lib/apollo";

const CATEGORY_LIST = gql`
{
  categoryList(filters: { ids: { eq: "2" } }) {
    children {
      id
      name
      children {
        id
        name
        children {
          id
          name
        }
      }
    }
  }
}
`;
const Home = () => {
  const response = useQuery(CATEGORY_LIST);
  const { loading, error, data } = response;
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error...</div>;
  }
  const category = data.categoryList;
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
        <ul className="category-list">
          {category[0].children.map((val, key) => {
            return (
              <li key={key}>
                <Link href="/category/[id]" as={`/category/${val.id}`}>
                  <a>{val.name}</a>
                </Link>
                {val.children.length > 0 && (
                  <ul>
                    {val.children.map((valchild) => {
                      return (
                        <li key={valchild.id}>
                          <Link
                            href="/category/[id]"
                            as={`/category/${valchild.id}`}
                          >
                            <a>{valchild.name}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
          </main>
      </div>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Home);
