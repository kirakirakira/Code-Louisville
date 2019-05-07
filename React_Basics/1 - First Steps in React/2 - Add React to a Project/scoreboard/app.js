const title = 'My First React Element';
const description = 'I just learned how to create a React node and render it into the DOM.';

const myTitleID = 'main-title';
const name = 'Kira';

const header = (
  <header>
    {/* this is a comment */}
    <h1 id={myTitleID}>{ name }'s First React Element!</h1>
    <p className="main-desc">{ description }</p>
  </header>
);

ReactDOM.render(
  header,
  document.getElementById('root')
);
