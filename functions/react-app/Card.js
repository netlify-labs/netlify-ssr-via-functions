import React from 'react';
// import styled from 'styled-components';

export default function Card(props) {
  const { thumbnail, name, description } = props;
  const desc = description.trim() || '(No description found)';
  const img =
    thumbnail.path.replace('http://', 'https://') + '.' + thumbnail.extension;
  return (
    <div className="Card">
      <article>
        <div className="thumbnail" style={{ backgroundImage: `url(${img})` }} />

        <div
          className="content"
          // style={{ backgroundImage: `url(${images.background})` }}
          style={{
            backgroundImage: `url("https://i.annihil.us/u/prod/marvel/i/mg/5/03/537bb03773238.gif")`
          }}
        >
          <h3 className="title">{name}</h3>

          <div>
            <p>{desc}</p>
          </div>
        </div>
      </article>
    </div>
  );
}
