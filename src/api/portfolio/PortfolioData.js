import TimeTagWatch from "../../views/portfolio/TimeTagWatch";
import UnderArmour from "../../views/portfolio/UnderArmour";
import ReStyling from "../../views/portfolio/ReStyling";
import ToastReel from "../../views/portfolio/ToastReel";
import WhatIfGold from "../../views/portfolio/WhatIfGold";
import NileKabutha from "../../views/portfolio/NileKabutha";
import SleepWalker from "../../views/portfolio/SleepWalker";
import NovaraConic from "../../views/portfolio/NovaraConic";
import BastianBux from "../../views/portfolio/BastianBux";

const data = [
    {
        id: 1,
        title: "Графический Дизайн",
        slug: 'графический дизайн',
        category: ['Познакомимся?'],
        description: 'Нам не нужно имя, ведь мы работаем для того, чтобы Ваше имя звучало громче',
        src: '/assets/img/project/project1/1.jpg',
        srcSlider: '/assets/img/project/project1/13.jpg',
        overlay: 2,
        component: (props) => <TimeTagWatch {...props} />
    },
    {
        id: 2,
        title: "Дизайн Персонажей",
        slug: 'дизайн-персонажей',
        src: '/assets/img/project/project2/1.jpg',
        srcSlider: '/assets/img/project/project2/10.jpg',
        category: ['Персонажи', 'Дизайн'],
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 2,

        component: (props) => <UnderArmour {...props}/>
    },
    {
        id: 3,
        title: "Ре/брендинг",
        slug: 'ре/брендинг',
        src: '/assets/img/project/project3/1.png',
        srcSlider: '/assets/img/project/project3/3.jpg',
        category: ['Бренд', 'Дизайн'],
        description: 'Как только стратегия компании становится осязаемой для всех её участников, все поведенческие модели бренда начинают приобретать физическую оболочку.',
        overlay: 2,
        component: (props) => <ReStyling {...props}/>
    },
    {
        id: 4,
        title: "Графический Дизайн",
        slug: 'графический-дизайн',
        category: ['Бренд', 'Дизайн'],
        src: 'https://theme.dsngrid.com/video/droow.mp4',
        video: {
            poster: '/assets/img/project/project4/1.jpg',
            loop: true
        },
        description: 'We are thrilled to share our new reel with you all! Special thanks to all of our talented friends.',
        overlay: 2,
        component: (props) => <ToastReel {...props}/>
    },
    {
        id: 5,
        title: "3D-Графика",
        slug: '3d-графика',
        src: '/assets/img/project/project5/1.jpg',
        srcSlider: '/assets/img/project/project5/2.jpg',
        category: ['3D', 'Дизайн'],
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 2,
        component: (props) => <WhatIfGold {...props}/>
    },
    {
        id: 6,
        title: "Кот В Мешке",
        slug: 'кот-в-мешке',
        category: ['Photography', "Brand"],
        src: '/assets/img/project/project6/1.jpg',
        srcSlider: '/assets/img/project/project6/2.jpg',
        description: 'Striking and powerful Aston Martin Vantage captivates you at the first sight.',
        overlay: 2,
        component: (props) => <NileKabutha {...props}/>
    },
    {
        id: 7,
        title: "Sleep Walker",
        slug: 'sleep-walker',
        category: ['Photography'],
        src: '/assets/img/project/project7/1.jpg',
        srcSlider: '/assets/img/project/project7/4.jpg',
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 2,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 8,
        title: "Novara Conic",
        slug: 'novara-conic',
        src: '/assets/img/project/project8/1.jpg',
        srcSlider: '/assets/img/project/project8/4.jpg',
        category: ['Architecture'],
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers.',
        overlay: 2,
        component: (props) => <NovaraConic {...props}/>
    },
    {
        id: 9,
        title: "Bastian Bux",
        slug: 'bastian-bux',
        category: ['Photography'],
        description: 'Bastian bux is the consequence of reducing everything surrounding a dj and producer to its essential element: the music.',
        src: '/assets/img/project/project9/1.jpg',
        srcSlider: '/assets/img/project/project9/3.jpg',
        overlay: 2,
        component: (props) => <BastianBux {...props}/>
    },
]

export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = "id") => {
    return data.find(item => {
        if (item[whereName] === value) return item;
        return null;
    });
};
export const getPortfolioLink = (item) => {
    if (item)
        return item.slug && '/portfolio/' + item.slug;

    return '';
};