import typed from '../partials/typed'
import Rellax from 'rellax/rellax.min'
import '../partials/btn-6';


'use strict';

export default {
  init() {
    // eslint-disable-next-line no-unused-vars
    var rellax = new Rellax('.rellax', {
      speed: -2,
      wrapper: null,
      center: true,
      round: true,
      vertical: true,
      horizontal: false,
    });

    typed();
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
