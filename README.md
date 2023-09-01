<!-- @format -->

# React + TypeScript + Vite + Chakra UI and a bunch of cute React Icons

## Highest Skill Developed in this project:

----check versions and change settings according to current documentation.

# GameHub

This is the project I build in Ultimate React course but its not exactly the same as the mentor did, I made my changes, make diferent choices for icons, I inserted stars and I let my creativity flow.
After that projetic I fell having better and solid understanding of React and I feel fully able to build real-world applications with React and TypeScript.

In general, GameHub is a video game discovery web app that helps you find new and interesting games to play. With GameHub, you can search for games by platform, genre, and more.

## MY Developed Skills

-   Build front-end apps with React and TypeScript
-   Build reusable function components
-   Style your components using vanilla CSS, CSS modules, and CSS-in-JS
-   Manage component state
-   Build forms with React Hook Forms
-   Implement form validation using Zod
-   Connect your React apps to the backend
-   Deploy your React apps
-   Use VSCode shortcuts to increase your productivity
-   Write clean code like a pro
-   Apply best practices
-   Check versions and change settings according to current documentation.

## Getting Started

To get started with GameHub, follow these steps:

1. Clone this repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Get a RAWG API key at https://rawg.io/apidocs. You'll have to create an account first.
4. Add the API key to **src/services/api-client.ts**
5. Run `npm run dev` to start the web server.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

