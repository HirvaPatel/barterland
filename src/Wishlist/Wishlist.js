import React from 'react';
import FooterSection from '../home/FooterSection';
import MenuSection from '../home/MenuSection';
import TitleSection from '../home/TitleSection';
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
