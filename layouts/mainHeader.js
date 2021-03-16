// import React from "react";

import React, { Component } from "react";
import HeaderMiddle from "../components/common/HeaderMiddle";
import MainBottomHeader from "../components/common/MainBottomHeader";
import TopHeader from "../components/common/TopHeader";
export default class mainHeader extends Component {
  render() {
    return (
      <header className="header">
        <TopHeader></TopHeader> {/* with global cart */}
        <HeaderMiddle></HeaderMiddle>
        <MainBottomHeader></MainBottomHeader> {/* with categories */}
      </header>
    );
  }
}
