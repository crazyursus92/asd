import React from 'react';
import {Stepper} from "./Stepper";
import {Link} from "react-router-dom";
import {actionChangeItem} from "../actions/base";
import './Options.css';

export class Options extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			description: '',
			size: 0,
			run: false,
			errors: {}
		};
	}

	validate() {
		let errors = {};
		let error = false;
		if (!this.state.description) {
			errors.description = true;
			error = true;
		}
		if (!this.state.size) {
			errors.size = true;
			error = true;
		}
		this.setState({
			errors: errors
		});
		return !error;

	}

	submit(e){
		e.preventDefault();
		if(this.validate()){
			this.props.dispatch(actionChangeItem({
				id: this.props.currentItem.id,
				description: this.state.description,
				size: this.state.size,
				run: this.state.run
			}));
			this.props.history.push('/done');
		}
	}

	onChange(fields) {

		let errors = {};
		let fieldKeys = Object.keys(fields);
		Object.keys(this.state.errors).forEach(key => {
			if(fieldKeys.indexOf(key) === -1){
				errors[key] = this.state.errors[key];
			}
		});
		this.setState(Object.assign(
			this.state,
			fields,
			{errors}
			));
	}

	render() {

		if (!this.props.currentItem.id) {
			console.log(this);
			this.props.history.push('/stepper/disk-image');
			return null;
		}

		let activeItem = this.props.diskImages.find(item => {
			return item.id === this.props.currentItem.id;
		});

		return (
			<Stepper path={this.props.match.path}>
				<form onSubmit={(e) => this.submit(e)}>
					<div className="form-group row">
						<div className="col-2">
							<label htmlFor="control-1">Образ диска:</label>
						</div>
						<div className="col-10">
							{activeItem.name}
						</div>

					</div>
					<div className={'form-group row ' + (this.state.errors.description ? 'has-error' : '')}>
						<div className="col-2">
							<label htmlFor="control-2">Описание:</label>
						</div>
						<div className="col-10">
							<input type="text" value={this.state.description}
							       onChange={(e) => this.onChange({description: e.currentTarget.value})}
							       className="form-control" id="control-2" aria-describedby="emailHelp"
							       placeholder="Описание"/>
						</div>

					</div>
					<div className={'form-group row ' + (this.state.errors.size ? 'has-error' : '')}>
						<div className="col-2">
							<label htmlFor="control-2">Размер диска (Гб):</label>
						</div>
						<div className="col-10">
							<input type="number" value={this.state.size}
							       onChange={(e) => this.onChange({size: e.currentTarget.value})}
							       className="form-control" id="control-2" aria-describedby="emailHelp"
							       placeholder="Размер диска (Гб)"/>
						</div>
					</div>
					<div className="form-group row">
						<div className="col-2">
							<label htmlFor="control-3">Запустить при создании:</label>
						</div>
						<div className="col-10">
							<input type="checkbox" value={this.state.run}
							       onChange={(e) => this.onChange({run: e.currentTarget.value})}
							       className="form-control" id="control-3" aria-describedby="emailHelp"/>
						</div>
					</div>
					<div className="text-center">

						<Link className='btn btn-success' to={'/stepper/disk-image'}>Назад</Link>
						<button type='submit' className='btn btn-success submit-button'>Создать</button>
					</div>
				</form>
			</Stepper>
		);
	}
}
