// components/ClientProvider.js
"use client";

import { useState, useRef } from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileMenuDrawer from "@/components/MobileMenuDrawer";
import FooterStickyMenu from "@/components/ui/FooterStickyMenu";
import DrawerCart from "@/components/DrawerCart";

export default function ClientProvider({ children }) {
    // Mobile menu toggle
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

    // Toggle function to show/hide the dropdown
    const mobileMenuToggle = () => {
        setIsMobileMenuVisible(!isMobileMenuVisible);
    };

    // Middle menu search overlay
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const SearchRef = useRef(null);

    // Toggle visibility when the button is clicked
    const toggleSearch = () => {
        setIsSearchVisible((prev) => !prev);
    };


    // Middle menu search overlay
    const [drawerCartVisible, setDrawerCardVisible] = useState(false);
    // Toggle visibility when the button is clicked
    const toggleDrawerCart = () => {
        setDrawerCardVisible((prev) => !prev);
    };


    return (
        <Provider store={store}>
            <div className="flex flex-col min-h-screen">
                <Header
                    mobileMenuToggle={mobileMenuToggle}
                    isSearchVisible={isSearchVisible}
                    toggleSearch={toggleSearch}
                    SearchRef={SearchRef}
                    toggleDrawerCart={toggleDrawerCart}
                />
                {children}
                <Footer />
                <FooterStickyMenu
                    mobileMenuToggle={mobileMenuToggle}
                    toggleSearch={toggleSearch}
                    toggleDrawerCart={toggleDrawerCart}
                />
                <DrawerCart toggleDrawerCart={toggleDrawerCart} drawerCartVisible={drawerCartVisible}  />
                {isMobileMenuVisible && (
                    <MobileMenuDrawer mobileMenuToggle={mobileMenuToggle} />
                )}
            </div>
        </Provider>
    );
}
