import React from 'react';
import {Link} from "react-router-dom";
import './Stepper.css';
import PropTypes from 'prop-types';

export class Stepper extends React.Component {

	static propsTypes = {
		path: PropTypes.string.isRequired
	};

	render() {
		return (
			<div className="stepper-container">
				<ul className="nav nav-tabs">
					<li className='nav-item'>
						<Link className={this.props.path === '/stepper/disk-image' ? 'nav-link active' : 'nav-link'} to={'/stepper/disk-image'}>1. Образы диска</Link>
					</li>
					<li className='nav-item'>
						<Link className={this.props.path === '/stepper/options' ? 'nav-link active' : 'nav-link'} to={'/stepper/options'}>2. Параметры</Link>
					</li>
				</ul>
				<div className="tab-content">
					<div className="tab-pane active">
						{this.props.children}
					</div>
				</div>
			</div>);
	}
}
