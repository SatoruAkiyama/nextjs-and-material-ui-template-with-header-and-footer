import Layout from "components/layout/Layout";

import { Container, Grid, Typography, Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  img: {
    width: "100%",
    height: "auto",
    boxShadow: "0px 2px 20px rgba(0,0,0,0.4)",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Layout
      // type your page title and page description.
      title="Template - Next.js and Material-UI with Header and Footer"
      description="This is a Template using Next.js and Material-UI with Header and Footer."
    >
      <Container maxWidth="md">
        <Typography
          variant="h1"
          align="center"
          gutterBottom
          style={{ marginBottom: "1em" }}
        >
          Template - Next.js and Material-UI with Header and Footer
        </Typography>
        <Grid container direction="column" alignItems="center" spacing={4}>
          <Grid item>
            <Button
              component={"a"}
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/SatoruAkiyama/nextjs-and-material-ui-template-with-header-and-footer/"
              className={classes.btn}
            >
              Get Started
            </Button>
          </Grid>
          <Grid item>
            <Container maxWidth="sm">
              <Typography variant="h2" align="center">
                This is a Template using Next.js and Material-UI with Header and
                Footer.
              </Typography>
            </Container>
          </Grid>
          <Grid item>
            <img
              src="https://i.imgur.com/1H2TK2B.png"
              alt="img"
              className={classes.img}
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default About;
