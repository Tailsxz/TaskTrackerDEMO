# Project Title
Task Tracker in React

Following Traversy Medias [Crash Course](https://www.youtube.com/watch?v=w7ejDZ8SWv8) on React.

## Getting Started

To get a copy of this project, you can fork the repo then clone it as your own.

### Prerequisites
- A Github Account
- Your local Git CLI, Git Bash comes with the windows Git installation.

### Installing

[Fork the Repo](https://github.com/octocat/Spoon-Knife)

[Clone the Repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

### Optimizations

### Knowledge gained from this project
Learned how absolutely great Vite is for a simple SPA! Honestly amazed at this build tool.
Further solidified React fundamentals and the flow of a React app.
Learned how to produce a production build and preview it.
Learned how to set up a mock backend using json-server for component testing/prototyping.
Got experiencing setting up HTTP requests to a backend in React(Note:Its very similar to vanilla JavaScript so if you know how to do it in regular JS, its relatively simple to implement in a React App).
Learned how to apply Client Side Routing with react-router-dom(Note: Router must wrap the main app in which we define a Routes element(required!!) specifying the specific routes we want with the individual Route elements inside the Routes element). Now instead of having a component or render attribute as in the guide, we now have the element attribute which we embed JSX using the curly brace syntax to set the markup to render for that route. ex) element={<>{some JSX here}</>}
Learned how to utilize the Link element that is provided with React Router. Will rerender the UI when navigating to a route rather than forcing a full page refresh as with the anchor tag. Found out it actually renders an accessible and semantic link tag and that the to attribute builds off the relative path of the parent route(it builds upon the URL path that was matched by the route that rendered the Link itself ex) clicking a Link rendered by a /task route will append to that path /task/linkHref).
Learned a possible use of pathname provided by the useLocation API from react-router.(Note: we are using it here to dynamically render the add form button only if we're on the home page.)

Traversy is once again the Goat! I felt a little more comfortable building this vs the Tic Tac Toe. I could frequently guess what how he was gonna implement the next part and the connections are definitely forming. Learned absolutely so much in this single tiny project. Most notibly how client-side routing can look like and the APIs that react-router provides. As well as getting to experience how when working on the "hottest" tools that they frequently can be updated with breaking changes requiring a refactor of possibly the entire codebase. Also found out about json-server!!! Which just seems as an amazing tool as a front-end developer. Having quick access to a mock backend that you can test your components with is invaluable! 