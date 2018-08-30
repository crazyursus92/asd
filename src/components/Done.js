import React from 'react';

export class Done extends React.Component{
	render(){
		if (!this.props.currentItem.id) {
			this.props.history.push('/stepper/disk-image');
			return null;
		}
		let activeItem = this.props.diskImages.find(item => {
			return item.id === this.props.currentItem.id;
		});
		return (
			<div className='text-center'>
				<h2>успешно создана виртуальная машина</h2>
				<p >
					{activeItem.id} - {activeItem.name}. {this.props.currentItem.size} ГБ.
				</p>
				<p >
					{this.props.currentItem.description}
				</p>

			</div>
		);
	}
}
