import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import Logo from '../assets/logo1.png'

const drawerWidth = 240;

export default function PermanentDrawerLeft({setTweetsOrDashboard})
{
    const navigate = useNavigate();
    function handleClick(param)
    {
        if (param === 'Tweets')
        {
            setTweetsOrDashboard('Tweets');    
        }
        else if (param === 'Dashboard')
        {
            setTweetsOrDashboard('Dashboard')
        }
        else if (param === 'Query')
        {
            navigate('/');
        }
    }

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
                        'Query',
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='nav-icon' />
                    ],
                    ['Dashboard',
                        'Dashboard',
                        <FontAwesomeIcon icon={faChartLine} className='nav-icon' />
                    ],
                    ['Tweets',
                        'Tweets',
                        <FontAwesomeIcon icon={faTwitter} className='nav-icon' />
                    ]].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton
                                onClick={() => handleClick(text[1])}
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
