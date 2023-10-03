import React from "react";
import SideNav from "../components/SideNav";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid";
import StorefrontIcon from "@mui/icons-material/Storefront";
import "../Dash.css";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccordionDash from "../components/AccordionDash";
import { BarChart } from "../Barchat/BarChart";
import CountUp from 'react-countup';

const Home = ({setUser, user}) => {

  return (
    <>
      <div className="bgcolor">
        <Navbar setUser={setUser} user={user} />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack spacing={2} direction={`row`}>
                  <Card
                    sx={{ minWidth: 49 + "%", height: 150 }}
                    className="gradient"
                  >
                    <CardContent>
                      <div className="white">
                        <CreditCardIcon color={"aliceblue"} />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        color={"aliceblue"}
                      >
                        $ <CountUp delay={0.4} end={599} duration={0.6} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        color={`#c1c1d1`}
                      >
                        Total Earnings
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ minWidth: 49 + "%", height: 150 }}
                    className="gradient2"
                  >
                    <CardContent>
                      <div className="white">
                        <CreditCardIcon color={"aliceblue"} />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        color={"aliceblue"}
                      >
                        $<CountUp delay={0.4} end={900} duration={0.6} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        color={`#c1c1d1`}
                      >
                        Total Orders
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={2}>
                  <Card sx={{ maxWidth: 345 }} className="gradient2">
                    <Stack spacing={2} direction={`row`}>
                      <div className="iconstyle">
                        <StorefrontIcon className="iconstyle" />
                      </div>
                      <div className="paddingall">
                        <span className="pricetitle">$<CountUp delay={0.4} end={300} duration={0.6} />k</span>
                        <br />
                        <span className="pricesubtitle">Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                  <Card sx={{ maxWidth: 345 }}>
                    <Stack spacing={2} direction={`row`}>
                      <div>
                        <StorefrontIcon className="iconstylewhite" />
                      </div>
                      <div className="paddingall">
                        <span className="pricetitle">$<CountUp delay={0.4} end={230} duration={0.6} />k</span>
                        <br />
                        <span className="pricesubtitle">Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={20} />

            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <BarChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <div className="paddingall">
                      <span className="pricetitle">Popular Products </span>
                    </div>
                    <AccordionDash />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Home;
