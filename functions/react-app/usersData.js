import fetch from 'isomorphic-fetch';

// export default function Data(opts) {
//   return fetch('http://jservice.io/api/categories?count=5').then(data =>
//     // return fetch(makeRequest('characters', opts)).then(data =>
//     data.json()
//   );
// }

export function getClue(category, value) {
  const obj = {
    category,
    value
  };
  return makeRequest('clues', obj);
}
export function getRandomCategories({
  offset = Math.floor(Math.random() * 2000)
}) {
  const obj = {
    count: 6,
    offset
  };
  return makeRequest('categories', obj);
}

function makeRequest(endpoint, obj = {}) {
  // obj = Object.assign(defaultOpts, obj, { ts, apikey, hash });
  return fetch(
    'http://jservice.io/api/' + endpoint + '?' + obj2string(obj)
  ).then(data => data.json());
}

function obj2string(obj) {
  const arr = Object.entries(obj).map(([k, v]) => `${k}=${v}`);
  return arr.join('&');
}
