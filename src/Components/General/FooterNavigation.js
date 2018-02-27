import React from 'react';
import Link from 'next/link';
import FooterLinks from '../../Data/FooterLinks';

const LinksRendered = FooterLinks.map(item => (
  <li className="list-inline-item" key={item.label}>
    <Link href={item.url}>
      <a href={item.url} className="float-right">
        {item.label}
      </a>
    </Link>
  </li>));

export default () => (
  <ul className="list-inline">
    {LinksRendered}
  </ul>
);
