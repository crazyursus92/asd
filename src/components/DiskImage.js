import React from 'react';
import {Stepper} from "./Stepper";
import {DiskImageListItem} from "./DiskImageListItem";
import {actionChangeDiskImage} from "../actions/base";
import {Link} from "react-router-dom";
import './DiskImage.css';

export class DiskImage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			search: '',
			activeId: ''
		};
	}

	onSearch(e) {
		this.setState({
			search: e.currentTarget.value
		});
	}

	filterDiskImages() {
		if (this.state.search) {
			let search = this.state.search.toLowerCase();
			return this.props.diskImages.filter(item => {
				return item.name.toLowerCase().indexOf(search) !== -1 ||
					item.id.toLowerCase().indexOf(search) !== -1;
			});
		}
		return this.props.diskImages;
	}

	checkActiveDiskImage(items){
		let id = this.props.currentItem.id;
		if(!id){
			id = items[0].id;
		}else{
			let activeItem = items.find(item => {
				return item.id === id;
			});
			if(!activeItem){
				id = id = items[0].id;
			}
		}
		if(id !== this.props.currentItem.id) {
			this.props.dispatch(actionChangeDiskImage(id));
		}
	}

	componentWillUpdate(nextProps, nextState){
		if(this.state.search !== nextState.search){
			let filteredDiskImages = this.filterDiskImages();
			this.checkActiveDiskImage(filteredDiskImages);
		}
	}

	componentWillMount(){
		if(!this.props.currentItem.id){
			this.props.dispatch(actionChangeDiskImage(this.props.diskImages[0].id));
		}
	}

	changeDisk(id){
		this.props.dispatch(actionChangeDiskImage(id));
	}

	render() {
		let filteredDiskImages = this.filterDiskImages();
		return (
			<Stepper path={this.props.match.path}>
				<div className="input-group search-input">
					<div className="input-group-prepend">
						<div className="input-group-text"><span role='img' aria-label='search'>&#128269;</span></div>
					</div>
					<input type="text" value={this.state.search} onChange={(e) => this.onSearch(e)}
					       className="form-control" placeholder="Поиск по имени или ID"/>
				</div>

				<div className='container-fluid disk-image-list'>
					{filteredDiskImages.map(item => {
						return (<DiskImageListItem key={item.id} activeId={this.props.currentItem.id || ''} item={item} onChange={(id) => this.changeDisk(id)}/>)
					})}
				</div>
				<div className="text-center">
					<Link to={'/stepper/options'} className="btn btn-success">Выбрать</Link>
				</div>
			</Stepper>
		);
	}
}

