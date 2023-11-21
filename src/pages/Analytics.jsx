import React from "react";
import SideNav from "../components/SideNav";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import { GeoChart } from "../Barchat/GeoChart";
import { CityChart } from "../Barchat/CityChart";
import { PieChart } from "../Barchat/PieChart";
import { ProductStockChart } from "../components/api";

const Analytics = ({ setUser }) => {
  return (
    <>
      <div className="bgcolor">
        {" "}
        <Navbar setUser={setUser} />
        <Box height={80} />
        <Box sx={{ display: "flex" }}>
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Box sx={{ width: "80%" }}>
                  <Stack spacing={2}>
                    <Stack spacing={2} direction="row">
                      <Card
                        sx={{ height: "19vh", minWidth: 49 + "%" }}
                        className="gradient"
                      >
                        <CardContent>
                          {/* Content for the first card */}
                          <Typography
                            gutterBottom
                            variant="p"
                            component="div"
                            sx={{ color: "#ffff", padding: "7px 0px" }}
                          >
                            Visitors
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            color="#f0fcfc"
                          >
                            500
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body2"
                            color="text.secondary"
                            sx={{ color: "#ccd1d1" }}
                          >
                            Since Last week
                          </Typography>
                        </CardContent>
                      </Card>
                      <Card
                        sx={{ height: "19vh", minWidth: 49 + "%" }}
                        className="gradient2"
                      >
                        <CardContent>
                          {/* Content for the second card */}
                          <Typography
                            gutterBottom
                            variant="p"
                            component="div"
                            sx={{ color: "#ffff", padding: "7px 0px" }}
                          >
                            Visitors
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            color="#f0fcfc"
                          >
                            500
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body2"
                            color="text.secondary"
                            sx={{ color: "#ccd1d1" }}
                          >
                            Since Last week
                          </Typography>
                        </CardContent>
                      </Card>
                    </Stack>
                    <Stack spacing={2} direction="row">
                      <Card
                        sx={{ height: "19vh", minWidth: 49 + "%" }}
                        className="gradient"
                      >
                        <CardContent>
                          {/* Content for the third card */}
                          <Typography
                            gutterBottom
                            variant="p"
                            component="div"
                            sx={{ color: "#ffff", padding: "7px 0px" }}
                          >
                            Visitors
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            color="#f0fcfc"
                          >
                            500
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body2"
                            color="text.secondary"
                            sx={{ color: "#ccd1d1" }}
                          >
                            Since Last week
                          </Typography>
                        </CardContent>
                      </Card>
                      <Card
                        sx={{ height: "19vh", minWidth: 49 + "%" }}
                        className="gradient2"
                      >
                        <CardContent>
                          {/* Content for the fourth card */}
                          <Typography
                            gutterBottom
                            variant="p"
                            component="div"
                            sx={{ color: "#ffff", padding: "7px 0px" }}
                          >
                            Visitors
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            color="#f0fcfc"
                          >
                            500
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body2"
                            color="text.secondary"
                            sx={{ color: "#ccd1d1" }}
                          >
                            Since Last week
                          </Typography>
                        </CardContent>
                      </Card>
                    </Stack>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={7}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent>
                    <CityChart />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Box height={16} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent>
                    {" "}
                    <GeoChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent>
                    <PieChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent>
                    <ProductStockChart />
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

export default Analytics;
