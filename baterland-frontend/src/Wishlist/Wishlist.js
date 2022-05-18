//Author: Shivam Barot

import React from 'react';
import FooterSection from '../home/js/FooterSection';
import MenuSection from '../home/js/MenuSection';
import TitleSection from '../home/js/TitleSection';
import WishlistProducts from './WishlistProducts';

export default function Wishlist() {

    return (
        <>
            <TitleSection />
            <MenuSection />
            <WishlistProducts />
            <FooterSection />
        </>
    )
}
