import React from 'react';
import PropTypes from 'prop-types';

export class DiskImageListItem extends React.Component{
	static propTypes = {
		item: PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		}).isRequired,
		activeId: PropTypes.string.isRequired,
		onChange: PropTypes.func.isRequired
	};

	onChange () {
		this.props.onChange(this.props.item.id)
	}

	render(){
		let classActive = this.props.item.id === this.props.activeId ? 'active' : '';
		return (
			<div className={`row alert-success disk-image-list-item  ${classActive}`} onClick={() => this.onChange()}>
				<div className="col-4">{this.props.item.id}</div>
				<div className="col-8">{this.props.item.name}</div>
			</div>
		);
	}
}
