import React from "react";
function CreateElementExample() {
    return React.createElement(
        'div', {className: "create-element"},
        React.createElement('h5', {}, 'This was created with React.createElement'),
        React.createElement('ol', {style: {listStyle: "none"}},
            React.createElement('li', {}, 'React'),
            React.createElement('li', {}, 'Javascript'),
        )
    )
}
export default CreateElementExample;