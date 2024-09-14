# Documentation

## Target

Target was to create a Dockerized [Nuxt 3](https://github.com/nuxt/framework) development environment.

## Workflow found here

[Dockerized Nuxt 3 Starter](https://github.com/nklsw/nuxt3-docker-starter)

## Prerequisites

It is essentially you have [Docker](https://docs.docker.com/get-docker/) and [Docker-Compose](https://docs.docker.com/compose/install/) installed on your local machine.

```sh
docker compose up
```

## Setup

Start the devvelopment server on [http://localhost:3000](http://localhost:3000)

## Production

Build the docker conntainer for production

```sh
docker build -t nuxt_build .
```

Run nuxt build inside the container

```sh
docker run -it nuxt_build npm run build
```

## How to do

### Installing Nuxt 3

Go to your Repositories folder (or where you want to create your Project).

Create a folder for your Project.

Inside the folder open a Terminal. (You can open the folder in VS Code or your preferred IDE and use integrated Terminal as well.)

In the terminal enter the follwing

```sh
npx nuxi@latest init
```

Nuxt creates a `nuxt-app` folder automatically.

Make sure you are doing the following in the `nuxt-app` folder.

```sh
cd nuxt-app
```

### Create Dockerfile

Create a `Dockerfile` inside `nuxt-app` with content like

```sh
FROM node:lts-alpine

WORKDIR /app

RUN apk update && apk upgrade
RUN apk add git

COPY ./package*.json /app/

RUN npm install && npm cache clean --force

COPY . .

ENV PATH ./node_modules/.bin:$PATH
```

### Create docker-compose.yaml

Inside `nuxt-app` create a new file `docker-compose.yaml` with content like

```yaml
version: '3.8'

services:
  nuxt:
    build:
      context: .
    image: nuxt_dev
    container_name: nuxt_dev
    command: npm run dev
    volumes:
      - .:/app
      - /app/node_modules
    ports:
      - "30000:3000"
      ```
```

### Build for development

Build container for development with

```sh
docker compose up
```

### Installing Modules or other npm packages

First close the container

```sh
docker compose down
```

I prefer to write in `pug` instead of `HTML` and `less css` instead of `tailwind.css`.

```sh
npm i pug less
```

And I want a few modules pre-installed and pre-configured like `nuxt/image`, `nuxt/icon`

```sh
npm install @nuxt/image pug pug-plain-loader less less-loader --save
```

For the modules a few more steps follow

In `nuxt-app` create a folder named `components`.

In the `nuxt-app/components` folder create another folder named `global`.

In `nuxt/app/components/global`create a file named `NuxtIcon.ts`.

In `nuxt-app/components/global/NuxtIcon.ts` add the following content

```typescript
// nuxt-app/components/global/NuxtIcon.ts

export default defineNuxtConfig({
  icon: {
    componentName: 'NuxtIcon'
  },
});
```

In the `nuxt-app` folder create a new file `app.config.ts`

> !NOTE -  Note it's app.config.ts and not nuxt.config.ts for runtime configs.

In the `nuxt-app/app.config.ts` add the following content

```typescript
// nuxt-app/app.config.ts

export default defineAppConfig({
  icon: {
    size: '24px', // default <Icon> size applied
    class: 'icon', // default <Icon> class applied
    mode: 'css', // default <Icon> mode applied
    aliases: {
      'nuxt': 'logos:nuxt-icon',
    },
  },
});
```

You can use any name from the [https://icones.js.org/](https://icones.js.org/) collection

More information about icon module you can find [here](https://nuxt.com/modules/icon)

```html
<Icon name="uil:github" />
```

It supports the `i-` prefix (for example, `i-uil-github`).

It's highly recommended to install the icon data locally with

```sh
npm i -D @iconify-json/collection-name
```

For example, to use the `uil:github` icon, install it's collection with `@iconify-json/uil`. This way the icons can be served locally or from your serverless functions, which is faster and more reliable on both SSR and client-side.

In the `nuxt.config.ts` add the following for `nuxt/image` and `nuxt/icon` configuration

```typescript
// nuxt-app/nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: ['@nuxt/image', '@nuxt/icon'],
    image: {
        // Optionale Konfigurationen
        dir: 'assets/images',
    },
    icon: {
    serverBundle: {
      collections: ['uil', 'mdi'] // <!--- this is the downloaded
    },
  },
});
```

More about configurations of [`@nuxt/image`](https://image.nuxt.com/) you can find [here](https://image.nuxt.com/get-started/configuration)

For database support I install `prisma`

```sh
cd backend
npm install prisma --save-dev
npm install @prisma/client --save
```

Initializing `prisma` with

```sh
npx prisma init
```

After initialization console looks like

```sh
✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.
5. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and real-time database events. Read: https://pris.ly/cli/beyond-orm

More information in our documentation:
https://pris.ly/d/getting-started
```
