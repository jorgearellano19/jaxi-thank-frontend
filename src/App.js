import React, {useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from '@material-ui/core/Toolbar';
import { ThemeProvider } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from '@apollo/react-hooks';
import Sidebar from './components/Sidebar/Sidebar';
import appTheme from './App.theme';
import { Switch, Route, useLocation } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Projects from './components/projects/Projects';

const drawerWidth = 240;

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      minWidth: 360
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      padding: theme.spacing(3),
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [title, setTitle] = useState('');
  const location = useLocation();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    console.log(location);
  };

  useEffect(() => {
    getTitle();
  }, [location]);

  const getTitle = () => {
    location.pathname === '/' ? setTitle('HOME') : 
    location.pathname === '/projects' ? setTitle('PROJECTS'):
    location.pathname === '/users' ? setTitle('USERS'): setTitle('');
  };

  return (
    <ApolloProvider client={client}>
    <ThemeProvider theme={appTheme}>
      <div className={classes.root}>
        <CssBaseline/>
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant={'h2'} noWrap>
                {title}
          </Typography>
            </Toolbar>
            <Sidebar changeMobileSidebar={handleDrawerToggle} isOpen={mobileOpen} />
          </AppBar>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route path="/" exact component={Dashboard} ></Route>
              <Route path="/projects" exact component={Projects}></Route>
            </Switch>
          </main>
      </div>
    </ThemeProvider>
    </ApolloProvider>
  )
}

export default App;
