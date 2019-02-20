import React from 'react';
import Card from './Card';

const App = ({ data }) => {
  // console.log('app props', { props });
  const { results, offset, total, limit } = data.data;

  const list = results.map(result => {
    const src = result.thumbnail.path + '.' + result.thumbnail.extension;
    return (
      // <li key={result.id}>
      //   <h3>{result.name}</h3>
      //   <img src={src} width={300} />
      // </li>
      <Card {...result} />
    );
  });
  const prevNum = Math.max(offset - limit, 0);
  const nextNum = Math.min(offset + limit, total);
  return (
    <div>
      <h1
        onClick={() => {
          console.log('hi');
        }}
      >
        All {total} Marvel Characters!
      </h1>
      {list}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      {/* <a className="link" href={`/characters/${props.params.offset}`}>
        Next
      </a> */}
      <div>
        {prevNum && <a href={`/characters/${prevNum}`}>Previous</a>}
        {nextNum && <a href={`/characters/${nextNum}`}>Next >></a>}
      </div>
      <footer>
        <a href="http://marvel.com">Data provided by Marvel. © 2019 MARVEL</a>
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
