// Polyfills if needed
// require('intersection-observer');

// import external dependencies
import './util/polyfills'
import 'jquery';

// Import everything from autoload
import './autoload/**/*'

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import Detection from './util/Detection';
import home from './routes/index';
import portfolio from './routes/portfolio';
import portfolioItem from './routes/portfolio-item';
import WeDo from './routes/what-we-do';
import about from './routes/about';
import howworkjs from './routes/how-we-work';
import team from './routes/team';

window._detector = new Detection({
  detect: ['ie11'],
});
window._detector.init();

// /** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  'index': home,
  'portfolio': portfolio,
  'whatWeDo': WeDo,
  'portfolioItem': portfolioItem,
  'about': about,
  'howworkjs': howworkjs,
  'team': team,
});

// // Load Events
jQuery(document).ready(() => routes.loadEvents());

