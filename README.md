# Stylable + Vue Example

A basic example of using [Stylable](https://stylable.io) and [Vue](https://vuejs.org/) together.

This project uses a webpack configuration with `vue-loader` (uses `@vue/compiler-sfc`, also installed) and `@stylable/webpack-plugin`.

Deployed production mode can be [seen here](https://wix-playground.github.io/stylable-vue-example/).

> Note: current version of the `Vue CLI` boilerplate uses webpack `3.x`, and does not integrate with Stylable.
> Once the ecosystem moves to webpack `4.x`, we can consider a more encompassing integration specifically for Vue.

## Getting started

1. Clone this repository.
2. `yarn`
3. `yarn start`

## Project Structure

This project shows a custom component, `CustomizableButton` being rendered three times and receiving different customizations for each instance.

Each component defines the bare minimum styling API for itself (see `customizable-button.st.css` and `buttons-container.st.css`) while remaining functional.
These are then customized externally from the root component, `app` (see `app.st.css`).

## Stylable Intelligence

If you're using [VS Code](https://code.visualstudio.com/) as your IDE, we strongly recommend installing our [stylable-intelligence](https://marketplace.visualstudio.com/items?itemName=wix.stylable-intelligence) extension.

It provides a typed CSS experience including auto completions, hinting, diagnostics and more.

## Contributing

This has been one of my first (and admittedly lovely) interactions with Vue. We will gladly accept PRs that will bring this project in-line with the community standards for a Vue project. -Tom
