[![Netlify Status](https://api.netlify.com/api/v1/badges/3757bbe7-5f85-4729-b012-b45788fc3e20/deploy-status)](https://app.netlify.com/projects/amulyaprasanth/deploys)
# Portfolio

Personal portfolio website built with **Next.js, TypeScript, Tailwind CSS, and Docker**.

## Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* Motion
* Docker

## Prerequisites

* Node.js 22+
* npm
* Docker

---

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

To create a production build locally:

```bash
npm run build
```

Run the production build:

```bash
npm start
```

---

# Docker

The project supports separate Docker configurations for **development** and **production**.

## Development

Build the development Docker image:

```bash
docker build -f Dockerfile.dev -t portfolio-dev .
```

Run the development container:

```bash
docker run --rm -it \
  -p 3000:3000 \
  -v "$(pwd):/app" \
  -v /app/node_modules \
  portfolio-dev
```

The development server will be available at:

```text
http://localhost:3000
```

The source directory is mounted into the container so that changes made to the project can be reflected during development.

---

## Production

Build the production Docker image:

```bash
docker build -f Dockerfile -t portfolio:latest .
```

Run the production container:

```bash
docker run --rm \
  -p 3000:3000 \
  portfolio:latest
```

The application will be available at:

```text
http://localhost:3000
```

```bash
docker run --rm \
  -p 3000:3000 \
  portfolio:latest
```

---

## Useful Docker Commands

List images:

```bash
docker images
```

List running containers:

```bash
docker ps
```

Stop a running container:

```bash
docker stop <container_id>
```

Remove a container:

```bash
docker rm <container_id>
```

Remove an image:

```bash
docker rmi <image_name>
```

Rebuild an image without using the cache:

```bash
docker build --no-cache -f Dockerfile -t portfolio:latest .
```

## Project Structure

```text
portfolio/
├── app/
├── components/
├── public/
├── Dockerfile
├── Dockerfile.dev
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

## Production Verification

Test the production build before deployment:

```bash
npm run build
npm start
```

Or test the production Docker image:

```bash
docker build -f Dockerfile -t portfolio:latest .
docker run --rm -p 3000:3000 portfolio:latest
```

Open:

```text
http://localhost:3000
```
