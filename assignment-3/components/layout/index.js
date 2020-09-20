import Link from "next/link";
import { useRouter } from "next/router";
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const layout = (props) => {
  const { children } = props;
  const router = useRouter();
  const classes = useStyles();
  return (
    <main>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Typography>
          <Button color="inherit">
            <Link href="/cart">
              <a>Cart</a>
            </Link></Button>
        </Toolbar>
      </AppBar>
      <div className="container">{children}</div>
    </main>
  );
};
export default layout;