import React from "react";
import Navbar, {Nav} from "../../nav/Navbar";
import Brand from "../../brand/Brand";
import MenuContent from "./MenuContent";


const menuContent = [
    {
        name: "Главная",
        dropdownMenu: [
            {name: "Главная", to: "/"},
            {name: "Демо 2", to: "/demo-2"},
            {name: "Демо 3", to: "/demo-3"},
        ]
    },
    {
        name: "Портфолио",
        dropdownMenu: [
            {
                name: "Слайдеры",
                dropdownMenu: [
                    {name: "Полный Экран", to: "/slider"},
                    {name: "Заполненный Экран", to: "/slider-2"},
                    {name: "Половина Экрана", to: "/slider-3"}
                ]
            }, {
                name: "Сетка",
                dropdownMenu: [
                    {name: "Колонки сетка 2", to: "/portfolio"},
                    {name: "Колонки секта 3", to: "/portfolio-2"},
                ]
            },

        ]
    },
    {
        name: "Работы",
        dropdownMenu: [
            {
                name: "Работы 01 - 05",
                dropdownMenu: [
                    {name: "Новое слово во вселенной дизайна", to: "/portfolio/новое-слово-во-вселенной-дизайна"},
                    {name: "Дизайн Персонажей", to: '/portfolio/дизайн-персонажей'},
                    {name: "Ребрендинг", to: '/portfolio/ребрендинг'},
                    {name: "Toast 2019 Reel", to: '/portfolio/toast-2019-reel'},
                    {name: "What If Gold", to: '/portfolio/what-if-gold'},
                ]
            }, {
                name: "Работы 05 - 09",
                dropdownMenu: [
                    {name: "Nile - Kabutha", to: "/portfolio/nile-kabutha"},
                    {name: "Sleep Walker", to: '/portfolio/sleep-walker'},
                    {name: "Novara Conic", to: '/portfolio/novara-conic'},
                    {name: "Bastian Bux", to: '/portfolio/bastian-bux'},

                ]
            },
        ]
    },
    {name: "О нас", to: "/about"},
    {name: "Контакты", to: "/contact"},
];

const DroowMenu = ({hamburger}) => {

    let $key = 0;
    const getSubMenu = (items) => {
        $key++;
        if (items.dropdownMenu) {
            return (<Nav.Dropdown name={items.name}
                                  key={$key}>{items.dropdownMenu.map(item => getSubMenu(item))}</Nav.Dropdown>);
        }
        return (
            <Nav.Link to={items.to} key={$key}>{items.name}</Nav.Link>
        );
    }


    return (
        <Navbar hamburger={hamburger}>
            <Navbar.Brand to={"/"}>
                <Brand width="100px" height="32px"/>
            </Navbar.Brand>

            <Navbar.Collapse cover="Menu">
                <Nav>
                    {menuContent.map(item => getSubMenu(item))}
                </Nav>
                <MenuContent className="section-margin"/>
            </Navbar.Collapse>
        </Navbar>
    );

}

DroowMenu.defaultProps = {
    hamburger: false
}


export default DroowMenu;