interface MenuLink {
    title: string;
    href: string;
    sublinks?: MenuLink[];
}

type Menu = MenuLink[];

export {
    Menu,
    MenuLink,
}