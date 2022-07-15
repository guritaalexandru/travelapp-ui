import { Menu } from '../types/HeaderData';

const MenuData: Menu = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'Places',
        href: '/places',
        sublinks: [
            {
                title: 'Places 1',
                href: '/places/1',
            },
            {
                title: 'Places 2',
                href: '/places/2',
            },
            {
                title: 'Places 3',
                href: '/places/3',
            },
        ]
    },
    {
        title: 'Test2',
        href: '/test2',
    },
    {
        title: 'About us',
        href: '/about-us',
    }
]

export {
    MenuData,
}