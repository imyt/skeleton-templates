# Contributing

> Thank you for your interest to contribute to Skeleton Templates. You are awesome!

## Setup the Project

1. Fork this repository
1. Clone your fork to your local machine

   ```bash
   git clone https://github.com/<your_github_username>/skeleton-templates.git
   cd skeleton-templates
   ```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```
You can preview the production build with `npm run preview`.

## Adding a new Template

Adding a new template can be achieved with 1 single step.

```bash
npm run create-component
```
This will create a new folder in `src/templates` with the component name provided by you with a `<component-name>.svelte` file and `attributes.json`.

### Miscellaneous

>All templates are built mobile first. So keep this in mind for your template.

## Commit convention

Please follow the convention category(scope or module): message in your commit message while using one of the following categories:

`feat / feature`: changes that introduce new code or features

`fix`: changes that fix a bug (reference an issue if present)

`refactor`: any code related change that is not a fix, nor a feature

`docs:` changing existing or creating new documentation

`chore`: all changes to the repository that do not fit into any of the above categories