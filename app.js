import React from 'react';
import ReactDOM from 'react-dom/client';
const heading = React.createElement(
    'div',
    {id: 'heading'},
    React.createElement(
        'div',
        {id: 'heading'},
        React.createElement(
            'h1',
            {id: 'heading'},
            'Hello World from Reacts H1 tag',
        ),
    ),
);
const elem = <span id='heading'>Element toh hai</span>;

const title = <h1 id='heading'> {elem} Namaste Bhai Title</h1>;

const Heading2 = () => (
    <div id='heading'>
        {title}
        <h1 id='heading'>Namaste Bhai React using Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Heading2 />);
