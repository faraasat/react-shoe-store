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
import { Link, useParams } from "react-router-dom";
import Shoes from "../shoes.json";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    fontWeight: "bolder",
    color: "black",
  },
}));

export default function ShoeDetail() {
  const classes = useStyles();
  const { shoeId } = useParams();

  return (
    <div className={classes.root}>
      {Object.entries(Shoes)
        .filter((shoe) => {
          return shoe[0].includes(shoeId);
        })
        .map(([key, value]) => {
          return (
            <div key={key}>
              <Container>
                <Typography
                  style={{
                    marginTop: 40,
                    marginBottom: 20,
                    width: "100%",
                  }}
                  variant="h2"
                >
                  Details of {value.name}
                </Typography>
              </Container>
              <Container>
                <Box style={{ marginTop: 20 }}>
                  <Grid container style={{ display: "flex" }} spacing={4}>
                    <Grid item sm={5} md={5} lg={5} xl={5}>
                      <ButtonBase>
                        <Link to={`/shoe/${key}`} className={classes.link}>
                          <Paper elevation={6}>
                            <CardMedia
                              height="10%"
                              component="img"
                              image={value.img}
                              title={value.name}
                            />
                          </Paper>
                        </Link>
                      </ButtonBase>
                    </Grid>
                    <Grid item sm={7} md={7} lg={7} xl={7}>
                      <ButtonBase style={{ width: "100%", textAlign: "left" }}>
                        <Paper elevation={6} style={{ width: "100%" }}>
                          <Typography variant="h2">
                            Name: {value.name}
                          </Typography>
                          <Typography variant="h2">
                            Brand: {value.name.split(" ")[0]}
                          </Typography>
                          <Typography variant="h2">
                            Actual Price:
                            <del style={{ color: "red" }}>$5.00</del>
                          </Typography>
                          <Typography variant="h2">
                            Discounted Price:
                            <span style={{ color: "blue" }}>$4.00</span>
                          </Typography>
                        </Paper>
                      </ButtonBase>
                    </Grid>
                  </Grid>
                </Box>
              </Container>
            </div>
          );
        })}
    </div>
  );
}
