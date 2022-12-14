import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Dashboard from './Dashboard';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './Home';
import { AnimatePresence } from 'framer-motion'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        secondary: {
            main: '#ddc7a0',
        }
    },
});

const elem = (
	<ThemeProvider theme={darkTheme}>
		<Home />
	</ThemeProvider>
)

function AnimatedRoutes()
{
    var loc = useLocation();


    return (
        <AnimatePresence>
            <Routes location={loc} key={loc.pathname}>
                <Route path="/" element={elem} />
                <Route path="/:query" element={<Dashboard />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes