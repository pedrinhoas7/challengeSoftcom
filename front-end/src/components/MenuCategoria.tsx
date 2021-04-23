import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
      marginTop: 1,
      backgroundColor: 'white',
      color: '#3F3F3F'
  }
}));

export default function MenuCategoria() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab
            value="one"
            label="Sugestão do Vendedor"
            wrapped
            {...a11yProps('one')}
          />
          <Tab value="two" label="Brinquedos" {...a11yProps('two')} />
          <Tab value="three" label="Cama e Casinha" {...a11yProps('three')} />
          <Tab value="four" label="Coleiras" {...a11yProps('four')} />
          <Tab value="five" label="Ossos e Petiscos" {...a11yProps('five')} />
          <Tab value="six" label="Saúde" {...a11yProps('six')} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
        Item One
      </TabPanel>
      <TabPanel value={value} index="two">
        Item Two
      </TabPanel>
      <TabPanel value={value} index="three">
        Item Three
      </TabPanel>
      <TabPanel value={value} index="four">
        Item Three
      </TabPanel>
      <TabPanel value={value} index="five">
        Item Three
      </TabPanel>
      <TabPanel value={value} index="six">
        Item Three
      </TabPanel>
    </div>
  );
}
