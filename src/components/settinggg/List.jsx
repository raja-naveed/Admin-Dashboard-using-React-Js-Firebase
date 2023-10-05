import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, Stack, TextField } from "@mui/material";
import styled from "@mui/material/styles/styled";
import PersonalDetails from "./PersonalDetails";
import { auth } from "../../firebase/firebase";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "#141414",
    fontWeight: "400",
    "&.Mui-selected": {
      color: "#0c828f",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#30c1d1",
    },
  })
);

export default function List() {
  const [value, setValue] = React.useState(0);
  const [user, setUser] = React.useState(null);
  const [personal, setPersonal] = React.useState({
    address: "",
    phone: "",
    dob: "",
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handlePersonalChange = (event) => {
    const { name, value } = event.target;
    setPersonal({ ...personal, [name]: value });
  };

  React.useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Stack spacing={2}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <StyledTab label="Profile" {...a11yProps(0)} />
                <StyledTab label="Personal" {...a11yProps(1)} />
                <StyledTab label="Item Three" {...a11yProps(2)} />
              </StyledTabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Stack spacing={4}>
                <TextField
                  label="Address"
                  name="address"
                  value={personal.address}
                  onChange={handlePersonalChange}
                  fullWidth
                />
                <TextField
                  label="Phone Number"
                  name="phone"
                  value={personal.phone}
                  onChange={handlePersonalChange}
                  fullWidth
                />
                <TextField
                  label="Date of Birth"
                  name="dob"
                  value={personal.dob}
                  onChange={handlePersonalChange}
                  fullWidth
                />
                <Button variant="contained" color="primary">
                  Update Personal Details
                </Button>
              </Stack>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <PersonalDetails user={user} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Item Three
            </CustomTabPanel>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
