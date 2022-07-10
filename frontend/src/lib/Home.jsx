import React, { useRef } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import logo from '../assets/logo1.png';

export default function Home()
{

    const searchRef = useRef();
    const particlesInit = async (main) =>
    {
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) =>
    {

    };


    return (<>
        <div className='home-container'>
            <div className='home-header'>
                <img src={logo} alt='logo' />
                <h1>RealTime Twitter Sentiment Analysis</h1>
            </div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="standard-search"
                    label="Search field"
                    type="search"
                    variant="standard"
                    color='secondary'
                    fullWidth
                    inputRef={searchRef}
                    onKeyDown={(e) =>
                    {
                        if (e.key === 'Enter')
                        {
                            e.preventDefault();
                            window.location.href = `/${searchRef.current.value}`;
                        }
                    }}
                />
            </Box>
        </div>
        <div className='particles-wrapper'>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#24242e",
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: ["bubble"],
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                            bubble: {
                                distance: 400,
                                duration: 0.7,
                                opacity: 1,
                            }
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 100,
                            enable: true,
                            opacity: 0.2,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 100,
                        },
                        opacity: {
                            value: 0.1,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 3 },
                        },
                    },
                }}
            />
        </div>
    </>)
}