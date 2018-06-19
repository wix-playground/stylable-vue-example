# Stylable + Vue Example

A basic example of using [Stylable](https://stylable.io) and [Vue](https://vuejs.org/) together. 
This project uses a simple manual webpack integration with `vue-template-compiler`, `stylable-webpack-plugin`. It then uses `webpack-dev-server` to run the example.

> Note: current version of the `Vue CLI` boilerplate uses webpack `3.x`, and does not integrate with Stylable.
> Once the ecosystem moves to webpack `4.x`, we can consider a more encompassing integration specifically for Vue.

## Installing
1. Clone this repo
2. `yarn install`

## Running
1. `yarn start`
2. open http://localhost:8080/main in your browser

## Project Structure

This project shows a custom component, `CustomizableButton` being rendered three times and receiving different customizations for each instance.

Each component defines the bare minimum styling API for itself (see `customizable-button.st.css` and `buttons-container.st.css`) while remaining functional.
These are then customized externally from the root component, `app` (see `app.st.css`).

## Stylable Intelligence

If you're using [VS Code](https://code.visualstudio.com/) as your IDE, we strongly recommend installing our [stylable-intelligence](https://marketplace.visualstudio.com/items?itemName=wix.stylable-intelligence) extension.

It provides a typed CSS experience including auto completions, hinting, diagnostics and more.

## Contributing
This has been one of my first (and admittedly lovely) interactions with Vue. We will gladly accept PRs that will bring this project in-line with the community standards for a Vue project. -Tom.
