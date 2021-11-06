// Import from libs
import React from 'react';

// Import styles
import '../assets/scss/main.scss';

// Import components
import { Header } from './Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './Footer/Footer';
import { Form } from './Form/Form';
import { Preview } from './Preview/Preview';

// Main code
export const App: React.FC = () => {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<Header />
				<main className="main-content">
					<Routes>
						<Route path="/" element={ <Form /> } />
						<Route path="/preview" element={ <Preview /> } />
					</Routes>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
};