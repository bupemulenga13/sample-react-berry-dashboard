
// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons';

// constant
const icons = {
    IconDashboard: IconDashboard,
    IconDeviceAnalytics
};

//-----------------------|| CERVICAL CANCER MENU ITEMS ||-----------------------//

export const cervicalcancer = {
    id: 'cervical-cancer',
    title: 'Cervical Cancer',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Cervical Cancer',
            type: 'item',
            url: '/utils/util-color',
            icon: icons['IconDashboard'],
            breadcrumbs: false
        }
    ]
};
