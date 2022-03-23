// assets
import { IconBrandFramer, IconTypography, IconPalette, IconShadow, IconWindmill, IconLayoutGridAdd } from '@tabler/icons';

// constant
const icons = {
    IconTypography: IconTypography,
    IconPalette: IconPalette,
    IconShadow: IconShadow,
    IconWindmill: IconWindmill,
    IconBrandFramer: IconBrandFramer,
    IconLayoutGridAdd: IconLayoutGridAdd
};

//-----------------------|| SMARTCARE REPORTS MENU ITEMS ||-----------------------//

export const smartcarereports = {
    id: 'smartcarereports',
    title: 'Smartcare Reports',
    type: 'group',
    children: [
        
        {
            id: 'appointments-list',
            title: 'Appointments',
            type: 'collapse',
            icon: icons['IconWindmill'],
            children: [
                {
                    id: 'appointments-list',
                    title: 'All Appointments',
                    type: 'item',
                    url: '/appointments/appointments-table',
                    breadcrumbs: false
                },
                {
                    id: 'clinical-appointments',
                    title: 'Clinical',
                    type: 'item',
                    url: '/icons/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'pharmacy-appointments',
                    title: 'Pharmacy',
                    type: 'item',
                    url: '/icons/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'upcoming-appointments',
                    title: 'Upcoming',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        }
    ]
};
