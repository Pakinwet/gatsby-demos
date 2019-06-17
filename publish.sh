#!/bin/sh
mkdir publish;

cp index.html publish/;
cp page-2.html publish/;

echo "installing & building gatsby"
cd gatsby-site;
npm install && npm run build;

echo "copy gatsby output to publish dir"
cp -R public/ ../publish/gatsby;