import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardProduct from '../produtos/CardProduct';
import SugestaoVendedor from '../produtos/SugestaoVendedor';
import Brinquedos from '../produtos/Brinquedos';
import CamaCasinha from '../produtos/CamaCasinha';
import Coleiras from '../produtos/Coleiras';
import OssosPetiscos from '../produtos/OssosPetiscos';
import Saude from '../produtos/Saude';
import ProdutoAutoComplete from '../search/ProdutosAutoComplete';

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
        <Box p={1}>
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
    backgroundColor: theme.palette.background.paper,
    marginTop: 100,
    width: '101.35%',
    marginLeft: -10
  },
  appBar: {
      marginTop: 60,
      backgroundColor: 'white',
      color: '#3F3F3F',
      borderTop: '3px solid',
      borderTopColor: '#B41C8B'
  },
  table: {
   /*  fontSize: 8,
    fontFamily: 'Quicksand',
    minWidth: '16.5%',
    padding: 1, */
  },
  tabs:{
    /* minWidth: '80%', */
    
  },
  panel:{
    /* width: 20 */
  }
}));

export default function Content() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs value={value} onChange={handleChange} className={classes.tabs}  aria-label="wrapped label tabs example">
          <Tab
            className={classes.table}
            value="one"
            label="Sugestão do Vendedor"
            wrapped
            {...a11yProps('one')}
          />
          <Tab value="two" label="Brinquedos" {...a11yProps('two')} className={classes.table}/>
          <Tab value="three" label="Cama e Casinha" {...a11yProps('three')} className={classes.table}/>
          <Tab value="four" label="Coleiras" {...a11yProps('four')} className={classes.table}/>
          <Tab value="five" label="Ossos e Petiscos" {...a11yProps('five')} className={classes.table}/>
          <Tab value="six" label="Saúde" {...a11yProps('six')} className={classes.table}/>
        </Tabs>
      </AppBar>
      <TabPanel  value={value} index="one">
        <ProdutoAutoComplete/>
        <SugestaoVendedor/>
        <Brinquedos/>
        <CamaCasinha/>
        <Coleiras/>
        <OssosPetiscos/>
        <Saude/>
      </TabPanel>
      <TabPanel value={value} index="two">
        <ProdutoAutoComplete/>
        <Brinquedos/>
        <SugestaoVendedor/>
        <CamaCasinha/>
        <Coleiras/>
        <OssosPetiscos/>
        <Saude/>
      </TabPanel>
      <TabPanel value={value} index="three">
        <ProdutoAutoComplete/>
        <CamaCasinha/>
        <SugestaoVendedor/>
        <Brinquedos/>
        <Coleiras/>
        <OssosPetiscos/>
        <Saude/>
      </TabPanel>
      <TabPanel value={value} index="four">
      <ProdutoAutoComplete/>
        <Coleiras/>
        <SugestaoVendedor/>
        <Brinquedos/>
        <CamaCasinha/>
        <OssosPetiscos/>
        <Saude/>
      </TabPanel>
      <TabPanel value={value} index="five">
        <ProdutoAutoComplete/>
        <OssosPetiscos/>
        <SugestaoVendedor/>
        <Coleiras/>
        <Brinquedos/>
        <CamaCasinha/>
        <Saude/>
      </TabPanel>
      <TabPanel value={value} index="six">
      <ProdutoAutoComplete/>
        <Saude/>
        <SugestaoVendedor/>
        <OssosPetiscos/>
        <Coleiras/>
        <Brinquedos/>
        <CamaCasinha/>
      </TabPanel>
    </div>
  );
}
