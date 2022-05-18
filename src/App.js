import React, { memo } from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import WMAppFooter from "components/app-footer";
import WMAppHeader from "components/app-header";
import WMPlayerBar from "pages/player/app-play-bar";
import WMBackTop from "components/back-top";

import routes from "router";
import store from "store";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <WMAppHeader />
        {renderRoutes(routes)}
        <WMAppFooter />
        <WMPlayerBar />
      </HashRouter>
      <WMBackTop />
    </Provider>
  );
});
