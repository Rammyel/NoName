import React from 'react';
import NextPage from "./NextPage";

function NextPageContent({...restProps}) {
    return (
        <NextPage to="/contact"  text="Смело связывайтесь с нами!" {...restProps}>
            Ищете работу?
        </NextPage>
    );
}

export default NextPageContent;