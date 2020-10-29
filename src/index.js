import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// import { getBoxStyle } from './Spiral.js'
import { getBoxStyle } from './PythagorasTree.js'
/* 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// const string = <h1> Hello World Dang Hong hai  </h1>
// ReactDOM.render(string, document.getElementById('root'));

/* const boxes1 = [
  <div style={getBoxStyle(0)} key={0}> 1 </div>,
  <div style={getBoxStyle(1)} key={1}> 2 </div>,
  <div style={getBoxStyle(2)} key={2}> 3 </div>,
  <div style={getBoxStyle(3)} key={3}> 4 </div>,
  <div style={getBoxStyle(4)} key={4}> 5 </div>,
  <div style={getBoxStyle(5)} key={5}> <strong>  Fizz </strong> </div>
];
 ReactDOM.render(<div> {boxes1} </div>, document.getElementById('root')); */

/* const boxes2 = [];
for (let i = 1; i <= 15; i++) {
  let content = '';
  if (i % 3 === 0) content += 'Fizz';
  if (i % 5 === 0) content += 'Buzz';
  if (content === '') content = String(i);
  else content = <strong> {content} </strong>;
  boxes2.push(<div style={getBoxStyle(i - 1)} key={i} > {content} </div>);
}
ReactDOM.render(<div> {boxes2} </div>, document.getElementById('root')); */

// Don't set `totalLevels` above 8 -- your browser will
// freeze due to the amount of work required.

let totalLevels = 5;
let heightFactor = 0.37;
let lean = -0.1;
let size = 100;


/* Let’s draw a fractal/ */

// 1 - original code
/* const TreeBox1 = (props) => {
  const styleTreebox1 = getBoxStyle({
    level: props.level,
    right: props.right,
    heightFactor,
    lean,
    size,
    totalLevels,
  })

  const leftChild =
    props.level < totalLevels &&
    React.createElement(TreeBox1, {
      level: props.level + 1,
    })
  const rightChild =
    props.level < totalLevels &&
    React.createElement(TreeBox1, {
      right: true,
      level: props.level + 1,
    })

  return React.createElement('div', { styleTreebox1 },
    leftChild,
    rightChild
  )
}

ReactDOM.render(
  React.createElement(TreeBox1, { level: 0 }),
  document.getElementById('root')
)
 */

/*  1 -using JSX */

/* 
const TreeBox2 = (props) => {
  // return value of attribute 'style'
  const styleTreebox2 = getBoxStyle({
    level: props.level,
    right: props.right,
    heightFactor,
    lean,
    size,
    totalLevels,
  });

  const leftChild =
    props.level < totalLevels && (<TreeBox2 level={props.level + 1} />);

  const rightChild =
    props.level < totalLevels && (<TreeBox2 right={true} level={props.level + 1} />);

  return <div style={styleTreebox2}> {leftChild} {rightChild}  </div>
}
ReactDOM.render(<TreeBox2 level={0} />, document.getElementById('root'));
 */


/* 2 - Reusable components */
// orginal
/* 
  export const TreeBox = (props) => {
  const style = getBoxStyle(props)
  const baseProps = Object.assign({}, props, {
    level: props.level + 1,
  })
  const leftChild =
    props.level < props.totalLevels &&
    React.createElement(TreeBox,
      Object.assign({}, baseProps, { right: false })
    )
  const rightChild =
    props.level < props.totalLevels &&
    React.createElement(TreeBox,
      Object.assign({}, baseProps, { right: true })
    )

  return React.createElement('div', { style },
    leftChild,
    rightChild
  )
}

ReactDOM.render(
  React.createElement(TreeBox, {
    level: 0,
    totalLevels: 5,
    heightFactor: 0.37,
    lean: -0.10,
    size: 100,
  }),
  document.getElementById('root')
)
 */

// ReactDOM.render(string, document.getElementById('root'));

/* 2 - using JSX */
/* 
export const TreeBox = (props) => {
  // return value of attribute style
  const styleReuse = getBoxStyle(props);
  const baseProps = Object.assign({}, props, { level: props.level + 1 });
}

const leftChild =
  props.level = props.totalLevels && (TreeBox(Object.assign({}, baseProps, { right: false })));

const rightChild =
  props.level = props.totalLevels && (TreeBox(Object.assign({}, baseProps, { right: true })));

return <div style={styleReuse}> {leftChild} {rightChild}  </div>

ReactDOM.render(
  React.createElement(TreeBox, {
    level: 0,
    totalLevels: 5,
    heightFactor: 0.37,
    lean: -0.10,
    size: 100,
  }),
  document.getElementById('root')
)
 */

// transition code 

export const TreeBox = (props) => {
  const styleReuse = getBoxStyle(props)
  const baseProps = Object.assign({}, props, {
    level: props.level + 1,
  })
  // const leftChild =
  //   props.level < props.totalLevels &&
  //   React.createElement(TreeBox,
  //     Object.assign({}, baseProps, { right: false })
  //   )

  const leftChild =
    props.level < props.totalLevels && 11;

  const templeftchild = {
    type: 'h1',
    props: {
      className: 'greeting',
      children: 'Hello, word !'
    }
  }
  // <TreeBox  Object.assign({}, baseProps, { right: false })> </TreeBox>

  const rightChild =
    props.level < props.totalLevels &&
    React.createElement(TreeBox,
      Object.assign({}, baseProps, { right: true })
    )

  return <div style={styleReuse}> {leftChild} {rightChild}  </div>
}
ReactDOM.render(
  React.createElement(TreeBox, {
    level: 0,
    totalLevels: 5,
    heightFactor: 0.37,
    lean: -0.10,
    size: 100,
  }),
  document.getElementById('root')
)


// ReactDOM.render(element3, document.getElementById('root'))
