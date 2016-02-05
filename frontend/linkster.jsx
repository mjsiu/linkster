var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var App = require('./components/navigation/app');
var Index = require('./components/navigation/index');
var LinkListForm = require('./components/link_list/link_list_form')

var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="link_lists/new" component={LinkListForm}/>
    </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});
