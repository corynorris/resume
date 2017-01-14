import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import routes from '../app/routes.js';
const expressRoutes = express.Router();

expressRoutes.use(express.static(path.join(__dirname, '../public')))
// expressRoutes.use('*', express.static(path.join(__dirname, '../public')))

expressRoutes.get('*', (req, res) => {

  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  // match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
  //   if (error) {
  //     res.status(500).send(error.message)
  //   } else if (redirectLocation) {
  //     res.redirect(302, redirectLocation.pathname + redirectLocation.search)
  //   } else if (renderProps) {
  //     res.status(200).send(renderToString(<RoutingContext {...renderProps} />))
  //   } else {
  //     res.status(404).send('Not found')
  //   }
  // })
})


export default expressRoutes;

