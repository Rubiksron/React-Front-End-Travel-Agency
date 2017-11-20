# Anywhere.com Coding Challenges

Two challenges:

1. React     -> `src/anywhere/QuickBookingView.jsx` and references `style_guide/QuickBookingView*` for style and logic flow.
2. Immutable -> `src/anywhere/AmenityView.jsx`

Attention to detail is key.

Create a branch for your work, and PR into the master when you are complete. Feel free to ask if you need clarification.


# Setup Environment

Install Atom, and then in Atom, install the packages `nuclide` and `language-babel`.

Instructions below for the forked react-webpack-babel fork dev environment and live reload server.


# Forked react-webpack-babel

Try this is a simple [React](https://facebook.github.io/react/), [Webpack](http://webpack.github.io/) and [Babel](https://babeljs.io/) application with nothing else in it.

### What's in it?

* Simple src/index.jsx and src/index.css (local module css).
* Webpack configuration for development (with hot reloading) and production (with minification).
* CSS module loading, so you can include your css by ```import styles from './path/to.css';```.
* Both js(x) and css hot loaded during development.

### To run

* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.
* Fork and clone the project:

```
> $ git clone THIS_REPO_URL
```

* Then install the dependencies:

```
> $ npm install
> $ touch .flowconfig
> $ npm install --global flow-bin

```

* Run development server:

```
> $ npm start
```

Open the web browser to `http://localhost:8888/`
 
 
### Notes on importing css styles
* styles having /src/ in their absolute path are considered part of the application and exported as local css modules.
* styles having /node_modules|global/ in their absolute path are considered global styles used by many components and are included in the css bundle directly.
 
