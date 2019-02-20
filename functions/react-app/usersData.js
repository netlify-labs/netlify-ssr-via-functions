import fetch from 'isomorphic-fetch';
import md5 from 'md5';
const defaultOpts = {
  offset: 0,
  limit: 5
};
export default function Data(opts) {
  // return fetch('http://jservice.io/api/categories?count=5').then(data =>
  return fetch(makeRequest('characters', opts)).then(data => data.json());
}

function makeRequest(endpoint, obj = defaultOpts) {
  const ts = Number(new Date());
  const MARVEL_PRIVATE = process.env.MARVEL_PRIVATE;
  const apikey = process.env.MARVEL_PUBLIC;
  const string4hash = ts + MARVEL_PRIVATE + apikey;
  const hash = md5(string4hash);
  obj = Object.assign(defaultOpts, obj, { ts, apikey, hash });
  return (
    'http://gateway.marvel.com/v1/public/' + endpoint + '?' + obj2string(obj)
  );
}

function obj2string(obj) {
  const arr = Object.entries(obj).map(([k, v]) => `${k}=${v}`);
  return arr.join('&');
}
