import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./component/form";

import { Signup } from "./views/signup";
import { Login } from "./views/login";
import { Private } from "./views/private";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <Form>
                    <Navbar />
                    <Routes>
                        <Route element={<Signup />} path="/" />
                        <Route element={<Login />} path="/Login" />
                        <Route element={<Private />} path="/private/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </Form>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
