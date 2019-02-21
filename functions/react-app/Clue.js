import React from 'react';
import Card from './Card';

const App = ({ data }) => {
  const { results, offset, total, limit } = data.data;

  const list = results.map(result => {
    const src = result.thumbnail.path + '.' + result.thumbnail.extension;
    return <Card {...result} />;
  });
  const prevNum = Math.max(offset - limit, 0);
  const nextNum = Math.min(offset + limit, total);
  return (
    <div className="App">
      <footer>
        <a href="http://jservice.io/">Jeopardy Data from jservice.io</a>
      </footer>
    </div>
  );
};

export default App;

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}
