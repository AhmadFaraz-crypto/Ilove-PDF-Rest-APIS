/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Auth from 'containers/Auth/loadable';
import Home from 'containers/Home/loadable';
import PDFtoJPG from 'containers/PDFtoJPG/loadable';
import Process from 'containers/Process/loadable';
import Download from 'containers/Download/loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/home" component={Home} />
        <Route path="/pdf-to-jpg" component={PDFtoJPG} />
        <Route path="/process" component={Process} />
        <Route path="/download" component={Download} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </>
  );
}
