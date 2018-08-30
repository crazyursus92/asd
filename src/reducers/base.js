import {ACTION_CHANGE_DISK_IMAGE, ACTION_CHANGE_ITEM} from "../actions/base";

const initialState = {
	diskImages:  [
		{ name: 'Cisco ASA', id: 'cmi-38BC49D0' },
		{ name: 'Windows Server 2012 R2', id: 'cmi-8BC73BA3' },
		{ name: 'Windows Server 2016', id: 'cmi-FDD742A2' },
		{ name: 'Windows Server 2008 R2 DC (Updated 06.06.18)', id: 'cmi-21BC1032' },
		{ name: 'Windows Server 2016 DC (Updated 06.06.18)', id: 'cmi-B4ADC5D8' },
		{ name: 'Windows Server 2012 R2 DC (Updated 06.06.18)', id: 'cmi-1A973AB4' },
		{ name: 'Cloud Backup Server', id: 'cmi-A09B6E08' },
		{ name: 'Ubuntu 16.04 [Cloud Images]', id: 'cmi-22489FC1' },
		{ name: 'CentOS 7.2 [Cloud Images]', id: 'cmi-6C914150' },
		{ name: 'CentOS 7.4 [Cloud Images]', id: 'cmi-298D584C' },
		{ name: 'Ubuntu 14.04 [Cloud Images]', id: 'cmi-60F938B3' },
		{ name: 'Fedora 27 [Cloud Images]', id: 'cmi-9A41F7F9' },
		{ name: 'CentOS 6.9 [Cloud Images]', id: 'cmi-9743CDD1' },
		{ name: 'Debian 8 [Cloud Images]', id: 'cmi-4873AB57' },
		{ name: 'Debian 9 [Cloud Images]', id: 'cmi-DBCE9464' },
		{ name: 'bitnami-lampstack-7.1.13-1', id: 'cmi-6DBF556A' },
		{ name: 'bitnami-gitlab-10.4.0-0', id: 'cmi-2DF5388D' },
		{ name: 'bitnami-joomla-3.8.3-0', id: 'cmi-120D654A' },
		{ name: 'bitnami-redmine-3.4.4-1', id: 'cmi-9AE8CA0C' },
		{ name: 'bitnami-wordpress-4.9.2-0', id: 'cmi-3965B706' },
		{ name: 'debian-9.3-sphinx', id: 'cmi-0E667BFD' },
		{ name: 'CentOS-7-x86_64', id: 'cmi-4D50CC77' },
		{ name: 'CentOS-6-x86_64', id: 'cmi-866E104E' },
		{ name: '2012R2 Standard', id: 'cmi-89D1A910' },
		{ name: 'Windows Server 2012 Update 1', id: 'cmi-7701526C' },
	],
	currentItem: {
		diskId: '',
		description: '',
		size: 0,
		run: false
	}
};

export default function Base (store = initialState, action) {
	switch (action.type) {
		case ACTION_CHANGE_DISK_IMAGE:
			return Object.assign({}, store, {currentItem: {id: action.diskImageId}});
		case ACTION_CHANGE_ITEM:
			return Object.assign({}, store, {currentItem: action.item});
		default:
			return store;
	}
}
