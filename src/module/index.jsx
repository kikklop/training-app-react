import { Module } from 'asab_webui_components';

import { TableScreen } from './TableScreen.jsx';
import { DetailScreen } from './Detail';

export default class TableApplicationModule extends Module {
  constructor(app, name) {
    super(app, 'TableApplicationModule');

    app.Router.addRoute({
      path: '/',
      end: false,
      name: 'Table',
      component: TableScreen,
    });

    app.Router.addRoute({
      path: '/detail/:id',
      end: true, // exact match
      name: 'Detail',
      component: DetailScreen,
    });

    app.Navigation.addItem({
      name: 'Table',
      icon: 'bi bi-table',
      url: '/',
    });

    app.Navigation.addItem({
      name: 'Detail',
      icon: 'bi bi-pen',
      url: '/detail',
    });
  }
}
