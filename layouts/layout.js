import React from "react";
import MainHeader from "./mainHeader";
import Footer from "./footer";
export default function Layout({ children }) {
  return (
    <div id="page-wrapper">
      <MainHeader></MainHeader>
      <main className="main">{children}</main>
      <Footer></Footer>
      {/* <AddToCartModal></AddToCartModal> */}
    </div>
  );
}
