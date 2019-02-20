import fetch from 'isomorphic-fetch';
import md5 from 'md5';
// import fs from 'fs';
// import path from 'path';
export default function Data(
  opts = {
    offset: 0,
    limit: 5
  }
) {
  // console.log('path', path.resolve('./records'));
  // console.log('cwd', process.cwd());
  // const dir = fs.readdirSync(process.cwd() + '/records');
  // const dir2 = fs.readdirSync('./records');
  // console.log({ dir });
  // return fetch('http://jservice.io/api/categories?count=5').then(data =>

  return fetch(makeRequest('characters', opts)).then(data => data.json());
}

// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150
function makeRequest(endpoint, obj = {}) {
  const ts = Number(new Date());
  const MARVEL_PRIVATE = process.env.MARVEL_PRIVATE;
  const apikey = process.env.MARVEL_PUBLIC;
  const string4hash = ts + MARVEL_PRIVATE + apikey;
  const hash = md5(string4hash);
  obj = Object.assign(obj, { ts, apikey, hash });
  return (
    'http://gateway.marvel.com/v1/public/' + endpoint + '?' + obj2string(obj)
  );
}

function obj2string(obj) {
  const arr = Object.entries(obj).map(([k, v]) => `${k}=${v}`);
  return arr.join('&');
}
