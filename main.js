
function createElement(tagName, style, data) {
    let element = document.createElement(tagName);
    if (style !== undefined) {
        element = React.createStyle(element, style);
    }

    if (Array.isArray(data)) {
        data.map((el) => element.append(el));
    } else if (data !== undefined) {
        element.textContent = data;
      }
    return element;
}
const createStyle = (element, style) => {
        for (const [name, st] of Object.entries(style)) {
            if (typeof st === 'object' && st !== null) {
                for (const [k, v] of Object.entries(st)) {
                    element[name][k] = v;
                }
            } else {
                element[name] = st;
            }
    }

    return element;
};

function render (value, element) {
    element.append(value);
};


const React = {
    createElement,
    createStyle,
    render,
};

const app = React.createElement(
    'div',
    { style: { backgroundColor: 'red' } },
    [
        React.createElement('span', undefined, 'Hello world'),
        React.createElement('br'),
        'This is just a text node',
        React.createElement('div', { textContent: 'Text content' }),
    ],
);
console.log(app);
React.render(app, document.getElementById('app'));