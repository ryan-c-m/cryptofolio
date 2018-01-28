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
            <div>
              <Link className="header__item" to="/portfolio">
                Portfolio
              </Link>
            </div>
            <div>
              <Link className="header__item" to="/analytics">
                Analytics
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
