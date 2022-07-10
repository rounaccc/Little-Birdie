import logo from './logo.svg';
import './App.css';
import { Link, Outlet, useParams } from 'react-router-dom';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './lib/Navbar';
import { motion } from 'framer-motion';

function App()
{
	return (
		<motion.div
		>
			<Navbar />
			<div className="main">
				<Outlet />
			</div>
		</motion.div>
	);
}

export default App;
