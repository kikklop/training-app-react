# TeskaLabs Training UI App

This is a training task for developers who like challenges :)

## Prerequisities

### API endpoints

`https://devtest.teskalabs.com/data`

`https://devtest.teskalabs.com/detail/<id>`

### TeskaLabs WebUI libraries

[ASAB WebUI Shell Library](https://github.com/TeskaLabs/asab-webui-shell-lib)

[ASAB WebUI Components Library](https://github.com/TeskaLabs/asab-webui-components-lib)

### pnpm

Useful commands:

```
pnpm install
pnpm start
pnpm build
```

## The task

This task has 2 parts to be extended - Table and Detail screens. The requirement is to extend the Table screen and to create a Detail screen. A plus points are for building & deploying the application that we can examine its functionality.

### Table screen

- Extend a Table screen.
- Use this API for obtainig the data: `https://devtest.teskalabs.com/data`
- Create a screen with a table using components from [ASAB WebUI Components Library](https://github.com/TeskaLabs/asab-webui-components-lib). Hint: use `DataTable2` (explore the code, it will help you to understand the usage).
- The table have to display all the `/data` content with one exception - `id` should be displayed on hover over `username`.
- The table by default use params, therefore there should be a pagination (you need to ensure a proper request to the `/data` endpoint, `DataTable2` has pagination by default).
- For timestamp values use apropriate components from [ASAB WebUI Components Library](https://github.com/TeskaLabs/asab-webui-components-lib)
- Add navigation to Detail screen by the `id`.

### Detail screen

- Create a Detail screen.
- Use this API for obtaining the detail data: `https://devtest.teskalabs.com/detail/<id>`
- Create a screen with a card(s) which display all the information retrieved from the `/detail/<id>` endpoint.
- You can render the data in 1 or several cards based on your choice.
- You can use components from [ASAB WebUI Components Library](https://github.com/TeskaLabs/asab-webui-components-lib).

### Plus points

- Add translations to the Table header and Detail card
- Use bootstrap icons for Table header and Detail card
- Implement navigation back from Detail screen to Table screen
- Build & deploy the application (provide the functional link)

## The expected output

- Send the link to your public github/gitlab where the TeskaLabs Training UI App is being cloned and extended. We will go through the code.

- Did you complete this task? Send the result (links) to [frantisek.pesek@teskalabs.com](mailto:frantisek.pesek@teskalabs.com)
