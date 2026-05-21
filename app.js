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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
