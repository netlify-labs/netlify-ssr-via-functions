import React from 'react';

const App = props => {
  const list = props.data.map(category => {
    return (
      <li key={category.id}>
        {titleCase(category.title)} (Questions: {category.clues_count})
      </li>
    );
  });

  return (
    <div>
      <h1
        onClick={() => {
          console.log('hi');
        }}
      >
        Let's play Jeopardy!
      </h1>
      {list}
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
