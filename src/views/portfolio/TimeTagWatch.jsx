import React from 'react';
import {getPortfolioItem} from "../../api/portfolio/PortfolioData";

import {Container} from "react-bootstrap";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import DsnGrid from "../../components/DsnGrid";

//--> Component
import HeaderHalf from "../../components/header/HeaderHalf";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import TextTrigger from "../../animation/TextTrigger";
import ButtonProject from "../../components/button/button-project/ButtonProject";
import BoxGallery, {BoxGalleryItem} from "../../components/box-gallery/BoxGallery";
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import ButtonPopup from "../../components/button/button-popup/ButtonPopup";
import MoveBox from "../../components/move-box/MoveBox";
import FJustifiedGallery from "../../components/justified-gallery/FJustifiedGallery";
import NextProject from "../../components/next/NextProject";
import {Helmet} from "react-helmet";


const TimeTagWatch = ({data}) => {

    const nextData = getPortfolioItem(2);


    return (
        <React.Fragment>
            <Helmet>
                <title>No Name - {data.title} </title>
                <meta
                    name="description"
                    content={data.description}
                />
            </Helmet>
            {/*Start Header Half*/}
            <HeaderHalf heroContent={data}
                        parallax={{yPercent: 30, scale: 1.1}}
                        textButton="Перейти на сайт"
                        href="http://n-name.ru/"
                        overlay={data.overlay}>
                <strong className="color-heading">Anton Chekhov</strong> <span> - September  20th 2022</span>
            </HeaderHalf>
            {/*End Header Half*/}

            {/*Start Info Project*/}
            <Container className="section-margin">
                <TitleCover>МЫ ПОНИМАЕМ</TitleCover>
                <TextTrigger duration={2.2} stagger={0.5}>
                    {(ref) => <h2 className="title-section" ref={ref}>No Name</h2>}
                </TextTrigger>
                <FadeUpTrigger stagger={0.5}>
                    <p className="mt-20">
                        Иногда нужно провести целую жизнь в поисках, цитируя незнакомых нам людей и прислушиваясь к
                    своему внутреннему голосу, который не всегда в силах сказать что правильно, а что нет.
                    Мы хотим поменять мир дизайна и создать новый, современный, беспристрастный и смелый стиль.
                    Стиль, который будет зажигать спрятанную искру и сподвигать людей на творчество.
                    </p>
                    <ButtonProject className={"mt-20"}
                                   href="http://n-name.ru/"
                                   target="_blank" rel="noopener noreferrer">
                        Посетить сайт
                    </ButtonProject>
                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}


            {/*Start Gallery List*/}
            <BoxGallery className="section-margin" col={3} colMobile={1} colGap={0} rowGap={0}>
                <BoxGalleryItem
                    src="/assets/img/project/project1/4.jpg" caption="Разумовская Настя"
                    groupPopup="gallery"/>
                <BoxGalleryItem src="/assets/img/project/project1/2.jpg" caption={"Разумовская Настя"}
                                groupPopup="gallery"/>
                <BoxGalleryItem src="/assets/img/project/project1/3.jpg" caption={"Разумовская Настя"}
                                groupPopup="gallery"/>
            </BoxGallery>
            {/*End Gallery List*/}

            {/*Start Box Info With Image*/}
            <BoxImageVertical src="/assets/img/project/project1/5.jpg" className="section-margin">
                <FadeUpTrigger>
                    {(ref) => <DsnGrid col={1} rowGap={30} rowGapTablet={20}>
                        <TitleCover>No Name</TitleCover>
                        <h2 className='title-section border-line-left' ref={ref}>Дизайн начинается с нами</h2>
                        <h6 ref={ref}>
                            We set THE blue and gold standard, emblazoned it with a bear, and held it high. Then we
                            watched
                            our passion spread across the state.n
                        </h6>
                        <p ref={ref}>
                            Challenging the status quo, driving forward, never backing down. The future of intelligence.
                            The
                            future of excellence. The future of defiance, innovation, and sport. This is where it all
                            begins.n
                        </p>
                        <div className="button-box" ref={ref}>
                            <ButtonDefault text="launch" icon={faAngleRight} href="#0"/>
                        </div>

                    </DsnGrid>}
                </FadeUpTrigger>
            </BoxImageVertical>
            {/*End  Box Info With Image*/}

            {/*Start Box Info Center Content*/}
            <div className="p-relative section-margin v-dark-head text-center">
                <ParallaxImage src="/assets/img/project/project1/7.jpg" overlay={4}/>
                <Container className="v-middle z-index-1">
                    <ButtonPopup href="http://media.w3.org/2010/05/sintel/trailer.mp4"/>
                </Container>
            </div>
            {/*End Box Info Center Content*/}


            {/*Start Box Info Move Content*/}
            <div className="p-relative section-margin">
                <ParallaxImage src="/assets/img/project/project1/13.jpg" overlay={4}/>
                <MoveBox>
                    <h3> Take a seat at a table on <br/> the ground floor </h3>
                    <p className="mt-30">
                        Not quite a cafe, not quite a restaurant, we offer innovative fare for breakfast, lunch and
                        alongside specialty coffee and a wine list featuring varietals ranging from South Africa to
                        Spain...
                    </p>
                </MoveBox>
            </div>
            {/*End Box Info Move Content*/}


            <FJustifiedGallery
                images={[
                    {src: "/assets/img/project/project1/6.jpg", caption: "Айдентика"},
                    {src: "/assets/img/project/project1/8.jpg", caption: "Айдентика"},
                    {src: "/assets/img/project/project1/9.jpg", caption: "Айдентика"},
                    {src: "/assets/img/project/project1/10.jpg", caption: "Айдентика"},
                    {src: "/assets/img/project/project1/11.jpg", caption: "Айдентика"},
                    {src: "/assets/img/project/project1/12.jpg", caption: "Айдентика"},
                ]}
                className="section-margin"
            />


            <NextProject heroContent={nextData} overlay={nextData.overlay}/>


        </React.Fragment>
    );
}


export default TimeTagWatch;