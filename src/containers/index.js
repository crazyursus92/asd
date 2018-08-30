import {connect} from "react-redux";
import {DiskImage} from "../components/DiskImage";
import {Options} from "../components/Options";
import {Routes} from "../components/Routes";
import {Done} from "../components/Done";

export const DiskImageContainer = connect((store) => {
	return {
		diskImages: store.Base.diskImages,
		currentItem: store.Base.currentItem
	};
})(DiskImage);

export const OptionsContainer = connect((store) => {
	return {
		diskImages: store.Base.diskImages,
		currentItem: store.Base.currentItem
	};
})(Options);

export const DoneContainer = connect((store) => {
	return {
		diskImages: store.Base.diskImages,
		currentItem: store.Base.currentItem
	};
})(Done);

export const RoutesContainer = connect((store, location) => {
	return {
		location: store.routing.locationBeforeTransitions || location.location
	};
})(Routes);
