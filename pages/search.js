/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import Head from 'next/head';
import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import appLayout from '../layouts/GeneralLayout';
import Title from '../src/Components/Title';
import pageTitle from '../src/Components/General/PageTitle';
import initStore from '../store';

class Search extends Component {
  static async getInitialProps({ query, res }) {
    // eslint-disable-next-line no-undef
    const resource = await fetch('https://react.worldorado.net/api/Sample-titles.json');
    const json = await resource.json();
    return {
      count: json.sumary.count,
      item_count: json.sumary.items,
      items: json.items,
      keyword: query.keyword,
    };
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderTitles() {
    return this.props.items.map(item =>
      <Title key={item.key} id={item.key} {...item} />);
  }

  render() {
    const { count, keyword } = this.props;
    let ComponentPageTitle = 'Search';

    if (keyword) {
      ComponentPageTitle = `Search for "${keyword}"`;
    }

    return (
      <div className="container-fluid">
        <Head>
          {pageTitle(ComponentPageTitle)}
        </Head>
        <h1 className="display-4">
          {ComponentPageTitle}
        </h1>
        <hr />
        <p className="text-muted">
          {count} Results
        </p>
        <div className="row no-gutter">
          {this.renderTitles()}
        </div>
      </div>
    );
  }
}

export default appLayout(Search);
