/* Just to log in console */
// const interval = setInterval(() => {
//   console.log('Interval');
// }, 1000);
//
// setTimeout(() => {
//   clearInterval(interval);
//   console.log('Stopped');
// }, 5000);

/* Show in browser/HTML */
const btn = document.querySelector('button');
btn.addEventListener('click', () => {

  let counter = 0;
  const interval = setInterval(() => {
    counter++;
    document.querySelector('h2').innerHTML = `
      Counter: ${counter}
    `;
    // console.log('Interval');
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    document.querySelector('h2').innerHTML = `
      Counter Stopped at 5 Seconds
    `;
    // console.log('Stopped');
  }, 5000);

});
