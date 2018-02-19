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
            <div className={"header__item header__item--selected"}>
              <Link className="header__item_text" to="/portfolio">
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
