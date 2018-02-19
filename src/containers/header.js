import React, { Component } from "react";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import PageHeader from "../components/page-header";

class Header extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return <PageHeader location={this.props.location} />;
  }
}

export default connect()(Header);
