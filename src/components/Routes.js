import {Route} from "react-router-dom";
import {DiskImageContainer, DoneContainer, OptionsContainer} from "../containers";
import React from "react";

export class Routes extends React.Component {

	render() {
		return (
			<div>
				<Route component={() => {
					this.props.history.push('/stepper/disk-image');
					return null;
				}} exact strict path={'/'} location={this.props.location}/>
				<Route component={DiskImageContainer} exact strict path={'/stepper/disk-image'} location={this.props.location}/>
				<Route component={OptionsContainer} exact strict path={'/stepper/options'} location={this.props.location}/>
				<Route component={DoneContainer} exact strict path={'/done'} location={this.props.location}/>
			</div>
		);

	}
};
