# Pass data to layout

issue: [#13793](https://github.com/gatsbyjs/gatsby/issues/13793)

## Description

In gatsby v2 we push people to wrap your page in a Layout component yourself. We encourage this to keep everything very explicit so there is no magic that's being done.

For example this means

```js
// in src/pages/page-2.js

import React from "react"
import Layout from "../components/Layout"

export default () => (
  <Layout shouldHideHeader={true} shouldHideFooter={true}>
    {/* put your content of your page here */}
  </Layout>
)
```

## Demo

[![Netlify Status](https://api.netlify.com/api/v1/badges/2dcd925a-d8ff-4c94-a9c0-9b554b45091f/deploy-status)](https://app.netlify.com/sites/vigorous-bohr-d03f2f/deploys)

Hosted on netlify:
https://vigorous-bohr-d03f2f.netlify.com/
