export const ACTION_CHANGE_DISK_IMAGE = 'action_change_disk_image';
export const ACTION_CHANGE_ITEM = 'action_change_item';

export function actionChangeDiskImage(diskImageId){
	return {
		type: ACTION_CHANGE_DISK_IMAGE,
		diskImageId
	};
}

export function actionChangeItem(item) {
	return {
		type: ACTION_CHANGE_ITEM,
		item
	};
}
