# Pass data to layout

issue: [#13793](https://github.com/gatsbyjs/gatsby/issues/13793)

## Description

In gatsby v2 we push people to wrap your page in a Layout component yourself. We encourage this to keep everything very explicit so there is no magic that's being done.

For example this means

```js
// in src/pages/index.js

import React from "react"
import Layout from "../components/Layout"

export default () => (
  <Layout>
    {/* page content is here, see how we wrapped our component inside Layout */}
  </Layout>
)
```
