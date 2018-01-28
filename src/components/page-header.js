import React, { Component } from "react";
import autoBind from "react-autobind";
import { Link } from "react-router-dom";

export default class PageHeader extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  render() {
    return (
      <div className="page_header__topbar">
        <div className="container">
          <div className="row align-items-center">
            <div
              className={
                "header__item " +
                (this.props.location.pathname === "/"
                  ? "header__item--selected"
                  : "")
              }
            >
              <Link className="header__item_text" to="/">
                Home
              </Link>
            </div>
            <div
              className={
                "header__item " +
                (this.props.location.pathname === "/portfolio"
                  ? "header__item--selected"
                  : "")
              }
            >
              <Link className="header__item_text" to="/portfolio">
                Portfolio
              </Link>
            </div>
            <div
              className={
                "header__item " +
                (this.props.location.pathname === "/analytics"
                  ? "header__item--selected"
                  : "")
              }
            >
              <Link className="header__item_text" to="/analytics">
                Analytics
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
