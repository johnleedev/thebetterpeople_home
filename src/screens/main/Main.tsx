import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Main.scss'
import Projects from './Projects';
import Contact from './Contact';


export default function Main(props:any) {

	return (
		<div className='main'>
				
				<Contact />

				<Projects />

				<Footer />

		</div>
	);
}
