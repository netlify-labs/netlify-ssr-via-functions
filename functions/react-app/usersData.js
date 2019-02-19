import fetch from 'isomorphic-fetch';

export default function Data() {
  return fetch('http://jservice.io/api/categories?count=5').then(data =>
    data.json()
  );
}
