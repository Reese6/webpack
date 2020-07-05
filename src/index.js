import './scss/index.scss';

(() => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const insertTime = () => {
    div.innerHTML = new Date();
  };
  insertTime();

  const timer = setInterval(insertTime, 1000);
})();