import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Main.scss'
import First from './First';


export default function Main(props:any) {

	return (
		<div className='main'>
				
				<First />

				<Footer />

		</div>
	);
}
