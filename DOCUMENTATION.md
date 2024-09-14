# Documentation

## Target

Target was to create a Dockerized [Nuxt 3](https://github.com/nuxt/framework) development environment.

## Workaround found here

[Dockerized Nuxt 3 Starter](https://github.com/nklsw/nuxt3-docker-starter)

## Prerequisites

It is essentially you have [Docker](https://docs.docker.com/get-docker/) and [Docker-Compose](https://docs.docker.com/compose/install/) installed on your local machine.

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
