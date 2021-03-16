import React from "react";
import * as utils from "./../../utils/urls";
import Link from "next/link";

export default function BreadCrumb() {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb-nav">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href={utils.DEVHOST}>
            <a>
              <i className="icon-home" />
            </a>
          </Link>
        </li>
        <li className="breadcrumb-item" aria-current="page">
          <a href="#">All Products</a>
        </li>
      </ol>
    </nav>
  );
}
