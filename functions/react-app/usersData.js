import fetch from 'isomorphic-fetch';

export default function Data() {
  return fetch('https://jservice.io/api/categories?count=5').then(data =>
    data.json()
  );
}
