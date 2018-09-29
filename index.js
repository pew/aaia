import aaia from './aaia';

const el = document.getElementById('ainput');
const output = document.getElementById('output');

const draw = function (data) {
  output.innerHTML = '';
  const d = aaia(data);
  let o = '';
  for (let index = 0; index < d.length; index += 1) {
    const element = d[index];
    if (element !== null) {
      o += `${element} `;
    }
  }
  output.innerHTML = o.trim();
};
el.oninput = () => {
  draw(el.value);
};
