import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import Logo from '../assets/logo1.png'

const drawerWidth = 240;

export default function PermanentDrawerLeft()
{
    const { query } = useParams();
    return (<>
        <div className='Logo'>
            <img src={Logo} alt='logo'></img>
            <span>Little Birdy</span>
        </div>

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
                    {[['Search another query',
                        ``,
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='nav-icon' />
                    ],
                    ['Dashboard',
                        query,
                        <FontAwesomeIcon icon={faChartLine} className='nav-icon' />
                    ],
                    ['Tweets',
                        `${query}/tweets`,
                        <FontAwesomeIcon icon={faTwitter} className='nav-icon' />
                    ]].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton component={Link} to={`/${text[1]}`}
                                sx={{
                                    borderRadius: '20px',
                                    '&:hover': {
                                        backgroundColor: '#575859',
                                    },
                                }}
                            >
                                {text[2]}
                                <ListItemText primary={text[0]} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    </>);
}
