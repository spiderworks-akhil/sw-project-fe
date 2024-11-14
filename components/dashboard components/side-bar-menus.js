import SVGIcons from "./utils/medias/svg";

const sideBarMenus = [
    {
        title: 'Dashboard',
        icon: SVGIcons.DashboardIcon(),
        url:'/dashboard',
        subMenu: [
            {
                title: 'Project Dashboard',
                icon: 'icon',
                url:'/project-dashboard',
            },
        ]
    },
    {
        title: 'Project Management',
        icon: SVGIcons.ProjectIcon(),
        url:'/project',
    }
]

export default sideBarMenus;
