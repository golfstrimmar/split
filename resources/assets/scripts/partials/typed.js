import Typed from 'typed.js'

export default function typed() {
  let typedText = $('#typed').attr('data-typed-text');
  typedText = typedText.split(',');
  // eslint-disable-next-line no-unused-vars
  let typed = new Typed('#typed', {
    strings: typedText,
    typeSpeed: 50,
    backDelay: 1500,
    loop: true,
    loopCount: 9999,
  });
}
