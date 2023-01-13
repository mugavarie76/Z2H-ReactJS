// Using React - Create HTML Element
// createElement has 3 parameters. (type, props, children)
const heading = React.createElement(
	"h1",
	{
		id: "title",
		className: "myTitle",
		key: Math.random(),
	},
	"Hello React"
);
// heading holds the react objectof type h1
console.log(heading);
const description = React.createElement(
	"p",
	{
		id: "description",
		className: "myDescription",
		key: Math.random(),
	},
	"This is my first React Program."
);
const container = React.createElement(
	"div",
	{
		id: "container",
		className: "myContainer",
	},
	[heading, description]
);
// Get the root using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
// Render the HTML created using createElement
// If any element exists in root the render will replace.
root.render(container);
