//Author: Shivam Barot

import React from 'react';
import TitleSection from '../../home/js/TitleSection';
import FooterSection from '../../home/js/FooterSection';
import MenuSection from '../../home/js/MenuSection';
import ViewBlog from './ViewBlog';


export default function Blog() {

    return (
        <>
            <TitleSection />
            <MenuSection />
            
            <ViewBlog />
            <FooterSection />
        </>
    )
}
