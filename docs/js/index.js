const getScrollBarWidth = () => window.innerWidth - document.documentElement.getBoundingClientRect().width;

document.documentElement.style.setProperty('--scrollbar', `${getScrollBarWidth()}px`);

console.log(`${getScrollBarWidth()}px`);
/* .container {
    width: calc(100vw - var(--scrollbar))
  } */