/* eslint-disable react/prop-types */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */

import Head from 'next/head';
import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import ChannelOverview from '../src/Components/Channel/ChannelOverview';
import pageTitle from '../src/Components/General/PageTitle';
import appLayout from '../layouts/GeneralLayout';

function getCurrentCategoryTitle(slug, categories) {
  let selectedCategoryTitle = null;

  for (let i = 0; i < categories.length; i += 1) {
    if (categories[i].slug === slug) {
      selectedCategoryTitle = categories[i].label;
    }
  }

  return selectedCategoryTitle;
}

async function getChannelData(slug) {
  const resourceChannels = await fetch('https://react.worldorado.net/api/MyChannels.json');
  const jsonChannels = await resourceChannels.json();

  return jsonChannels;
}

class Channels extends Component {
  static async getInitialProps({ query }) {
    // eslint-disable-next-line no-undef
    const resource = await fetch('https://react.worldorado.net/api/Channel-Categories.json');
    const json = await resource.json();
    const jsonChannels = await getChannelData(query.category);

    return {
      current_category_slug: query.category,
      currentCategory: getCurrentCategoryTitle(query.category, json),
      categories: json,
      items: jsonChannels[0].items,
    };
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { pathname, query, params } = nextProps.url;

    // console.log(nextProps);
  }

  handleClick = (e, href) => {
    e.preventDefault();
    Router.push('/channels', href, {});
  }

  renderCategories() {
    const listItems = this.props.categories.map((item) => (
      <li key={item.id} className="list-inline-item">
        <Link href="/channels" as={`/channels/${item.slug}`} shallow>
          <a href={`/channels/${item.slug}`}>
            {item.label}
          </a>
        </Link>
      </li>
    ));

    return <ul className="list-inline">{listItems}</ul>;
  }

  render() {
    const { currentCategory } = this.props;

    return (
      <div className="container-fluid">
        <Head>
          {pageTitle('Channels')}
        </Head>

        <h1>Channels {currentCategory}</h1>
        <hr />
        {this.renderCategories()}
        <hr />
        <ChannelOverview items={this.props.items} />
      </div>
    );
  }
}

export default appLayout(Channels);
