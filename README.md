# ark-royal

<p align="center">
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/npm/types/scrub-js.svg">
  </a>
  <a href="https://eslint.org/">
    <img alt="Code style: ESLint" src="https://img.shields.io/badge/code%20style-ESLint-blueviolet">
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg">
  </a>
  <a href="https://app.netlify.com/sites/ark-royal-eda91b7a/deploys">
    <img src="https://api.netlify.com/api/v1/badges/348bf517-d355-4560-b87b-373f38a6a75c/deploy-status">
  </a>
</p>

> Ark Royal, reporting in for duty! I am confident in all manners of battle. Why, it was I who managed to destroy Bismarck's rudder!

<p align="center">
  <img src="https://raw.githubusercontent.com/tkesgar/ark-royal/master/screenshot.jpg">
</p>

This is a small app to generate fake customizable [Arknights](https://www.arknights.global/) screenshot with custom character image.

## Development guide

This project is created using [create-react-app](https://create-react-app.dev/docs/getting-started). Feel free to consult their documentations on how to work with the framework.

### Dependencies

  - Node.js + npm

### Setup

  1. Clone this repo
  2. `npm install`
  3. `npm start`

## Deployment

This repository is deployed using Netlify. Any merge to master will be automatically deployed.

## Contributing

Feel free to contribute by [creating issues][issues] and [submitting pull requests][pulls].

## Miscellaneous

### Visual Studio Code settings.json

If you are using Visual Studio Code, you can use the following `settings.json`:

```json
{
  "javascript.format.enable": false,
  "javascript.validate.enable": false,
  "typescript.format.enable": false,
  "typescript.validate.enable": false,
  "eslint.enable": true,
  "eslint.format.enable": true,
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.formatOnType": true
}
```

You can install the following plugins:

- [vscode-eslint]
- [prettier-vscode]

The configuration above will enable the following features:

- Use ESLint plugin to validate files instead of built-in JavaScript and
  TypeScript validation
- Enable ESLint + Prettier formatting and format files on pasting new code,
  typing something, and saving new files.

Feel free to contact me if something is wrong with the configuration.

## License

The source code in this repository is licensed under [MIT License][license].

[issues]: https://github.com/tkesgar/ark-royal/issues
[license]: https://github.com/tkesgar/ark-royal/blob/master/LICENSE
[pulls]: https://github.com/tkesgar/ark-royal/pulls
[prettier-vscode]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[vscode-eslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
