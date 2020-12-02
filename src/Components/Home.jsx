import {
  Box,
  ButtonBase,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Shoes from "../shoes.json";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 3,
  },
  link: {
    textDecoration: "none",
    fontWeight: "bolder",
    color: "black",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h2" style={{ marginTop: 40, marginBottom: 20 }}>
          Nike Sneakers
        </Typography>
        <Box style={{ marginTop: 20 }}>
          <Grid container xl={12} style={{ display: "flex" }} spacing={4}>
            {Object.entries(Shoes).map(([key, value]) => {
              return (
                <Grid item key={key} sm={3} md={3} lg={3} xl={3}>
                  <ButtonBase>
                    <Link to={`/shoe/${key}`} className={classes.link}>
                      <Paper elevation={6}>
                        <CardMedia
                          component="img"
                          image={value.img}
                          title={value.name}
                          // style={{ width: "100%" }}
                        />
                        <Typography>{value.name}</Typography>
                      </Paper>
                    </Link>
                  </ButtonBase>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
