import {Eyes, Footer, Header, PopupForm} from "../../modules";
import {PopupAuth} from "../../modules/PopupAuth";
import React from "react";

export function BaseLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <PopupForm/>
            <PopupAuth/>
            <Eyes/>
            <Header/>
            {children}
            <Footer/>
        </>
    );
}
