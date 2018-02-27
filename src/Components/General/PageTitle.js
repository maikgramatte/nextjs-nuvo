
import React from 'react';

const PAGE_TITLE = process.env.APP_PAGE_TITLE;

export default function PageTitle(title) {
  return (
    <title>{PAGE_TITLE.replace('%TITLE%', title)}</title>
  );
}
