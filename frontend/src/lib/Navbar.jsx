import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, useParams } from 'react-router-dom';

const drawerWidth = 240;

export default function PermanentDrawerLeft()
{
    const { query } = useParams();
    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: '#01030f',
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        // onHover styles
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <List>
                    {[['Search another query', ``], ['Dashboard', query], ['Tweets', `${query}/tweets`], ['TensorBoard', 'tensorboard']].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton component={Link} to={`/${text[1]}`}
                                sx={{
                                    borderRadius: '20px',
                                    '&:hover': {
                                        backgroundColor: '#575859',
                                    },
                                }}
                            >
                                {/* <ListItemIcon>
                                </ListItemIcon> */}
                                <ListItemText primary={text[0]} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}
