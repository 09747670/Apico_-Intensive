

const vApp = createElement ('div', { style: { backgroundColor: 'red' } },{
    attrs: {
        id: 'app'
    },
        children:[createElement('img',
            {
                attrs: {
                    src:'https://media.giphy.com/media/Ov5NiLVXT8JEc/giphy.gif',
                },
            }),

        ],

});


function createElement(tagName, {attrs={}, children=[]}={}) {
    return {
        tagName,
        attrs,
        children,
        };
}

function render(vNode) {
    const $el = document.createElement(vNode.tagName);
    for (const [k, v] of Object.entries(vNode.attrs)){
        $el.setAttribute(k, v);
    }
    for (const child of vNode.children){
        const $child = render(child);
        $el.appendChild($child);
    }
    return $el;
}
const $app = render(vApp);

 console.log($app);

function React($node, $target) {
    $target.replaceWith($node);
    return $node;
}
React($app, document.getElementById('app'));

// const React = {
//     createElement,
//     render,
// };
//
// const app = React.createElement(
//     'div',
//     { style: { backgroundColor: 'red' } },
//     [
//         React.createElement('span', undefined, 'Hello world'),
//         React.createElement('br'),
//         'This is just a text node',
//         React.createElement('div', { textContent: 'Text content' }),
//     ],
// );
// console.log(app);
// React.render(app, document.getElementById('app'));

