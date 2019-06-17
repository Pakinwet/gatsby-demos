# Disable client-site-routing + merge existing app

## Description

In this example I show how a gatsby site could live on another path and be used inside a regular app.

## How to get started

1. run publish.sh in your terminal (sorry windows)
1. Deploy publish folder to netlify (you can also just push this branch to netlify)

## Get started

clone this example by running `git clone --depth=1 https://github.com/wardpeet/gatsby-demos.git#static-asset-prefix`.

To see this in action you should run this on netlify because we need to rewrite some urls into our gatsby app.
You can do it yourself with setting up apache2/nginx to mimic the netlify rewrite rules.

## Demo

[![Netlify Status](https://api.netlify.com/api/v1/badges/8e86e00c-682d-4c38-b4de-c3965bb50cef/deploy-status)](https://app.netlify.com/sites/zen-wright-33c2d8/deploys)

Hosted on netlify:
https://zen-wright-33c2d8.netlify.com
