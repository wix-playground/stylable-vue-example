# Stylable + Vue Example

A basic example of using [Stylable](https://stylable.io) and [Vue](https://vuejs.org/) together. 
This project uses a very simple manual webpack integration with the `vue-template-compiler`, and `webpack-dev-server` to run the example.

> Note: current version of the Vue quick start boilerplate uses webpack 3, and does not integrate with Stylable.
> Once the ecosystem moves to webpack `4.x`, we can consider a more encompassing integration specifically for Vue.

## Installing
1. Clone this repo
2. run `yarn install`

## Running
1. run `yarn start`

## Project Structure

This project shows a custom component, `CustomizableButton` being rendered three times and receiving different customizations for each instance.

Each component defines the bare minimum styling API for itself (see `customizable-button.st.css` and `buttons-container.st.css`) while remaining functional.
These are then customized externally from the root component, `app` (see `app.st.css`).

## Stylable Intelligence

If you're using [VS Code](https://code.visualstudio.com/) as your IDE, we strongly recommend installing our [stylable-intelligence](https://marketplace.visualstudio.com/items?itemName=wix.stylable-intelligence) extension.

It provides a typed CSS experience including auto completions, hinting, diagnostics and more.
