//Author: Shivam Barot

import React from 'react';
import TitleSection from '../../home/js/TitleSection';
import FooterSection from '../../home/js/FooterSection';
import MenuSection from '../../home/js/MenuSection';
import AddBlogForm from './AddBlogForm';

export default function AddBlog() {

    return (
        <>
            <TitleSection />
            <MenuSection />
            <AddBlogForm />
            <FooterSection />
        </>
    )
}
