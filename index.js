import aaia from './aaia';

const resetBtn = document.getElementById('reset-btn');
const submitBtn = document.getElementById('submit-btn');

const el = document.getElementById('ainput');
const output = document.getElementById('output');

const params = new URLSearchParams(document.location.search.slice(1));
const query = params.get('q');

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

if (query) {
  el.value = query;
  draw(query);
}

el.oninput = () => {
  params.set('q', el.value);
  window.history.replaceState({}, '', `/?${params}`);
  draw(el.value);
};

resetBtn.onclick = () => {
  output.innerHTML = '';
  el.value = '';
  window.history.replaceState({}, '', '/');
};
submitBtn.onclick = () => draw(el.value);
