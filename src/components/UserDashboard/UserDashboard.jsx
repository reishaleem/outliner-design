import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Avatar, Box, Button, ButtonGroup, Card, Grid, ListItemAvatar, Paper, Tab, Tabs, CardContent } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    //display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#f2a922",
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function TabPanel(props) {
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
        <Box p={1}>
          {children}
        </Box>
      )}
    </div>
  );
}



function UserDashboard() {
    const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [recentlyEdtedTabsValue, setRecentlyEdtedTabsValue] = React.useState(0);

  const handleRecentlyEditedTabsChange = (event, newValue) => {
    setRecentlyEdtedTabsValue(newValue);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

    return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen }
            edge="start"
            className={clsx(classes.menuButton)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader} style={{backgroundColor: "#f2b705"}}>
          Change this to the darker orange.
        </div>
        {/* <Divider /> */}
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
                <Card>
                 <CardContent style={{backgroundColor: "#f2a922"}}>
                 <Typography variant="h6" component="h2">
                        Recently Edited
                    </Typography>
                 </CardContent>
                    <Paper square elevation={0}>
                    
                    <Tabs
                      value={recentlyEdtedTabsValue}
                      indicatorColor="primary"
                      textColor="primary"
                      onChange={handleRecentlyEditedTabsChange}
                      aria-label="recently edited tabs"
                      variant="fullWidth"
                    >
                      <Tab label="Worlds" />
                      <Tab label="Pages" />
                    </Tabs>
                    </Paper>
                    <TabPanel value={recentlyEdtedTabsValue} index={0}>
                    <List>
                      <ListItem button>
                        <ListItemAvatar>
                          <Avatar>
                            I
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="World Name" secondary="Updated time" />
                      </ListItem>
                      <ListItem button>
                        <ListItemAvatar>
                          <Avatar>
                            I
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="World Name" secondary="Updated time" />
                      </ListItem>
                      <ListItem button>
                        <ListItemAvatar>
                          <Avatar>
                            I
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="World Name" secondary="Updated time" />
                      </ListItem>
                    </List>
                    </TabPanel>
                    <TabPanel value={recentlyEdtedTabsValue} index={1}>
                    <List>
                      <ListItem button>
                        <ListItemAvatar>
                          <Avatar>
                            W
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Page Name" secondary="Updated time" />
                      </ListItem>
                      <ListItem button>
                        <ListItemAvatar>
                          <Avatar>
                            W
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Page Name" secondary="Updated time" />
                      </ListItem>
                      <ListItem button>
                        <ListItemAvatar>
                          <Avatar>
                            W
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Page Name" secondary="Updated time" />
                      </ListItem>
                    </List>
                    </TabPanel>

                    

                </Card>
            </Grid>
        </Grid>
      </main>
    </div>
  );
} 

export default UserDashboard;