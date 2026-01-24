# Product Web

This repository is a website that introduces applications such as **HashdPotato** and **MeetCuckoo**.

[Japanese README](docs/README.jp.md)

## Overview

The application is a single-page application (SPA) that serves as a landing page and information hub for various products. It includes dedicated pages for each product and their respective privacy policies.

## Repository Structure

The project follows a standard React application structure:

- **`src/`**: output source code.
  - **`components/`**: Reusable UI components (e.g., Layouts, etc.).
  - **`pages/`**: Individual page components corresponding to routes.
    - `Home/`: The main landing page.
    - `HashdPotato/`: Detailed page for the HashdPotato product.
    - `MeetCuckoo/`: Detailed page for the MeetCuckoo product.
    - `Privacy/`: Privacy policy pages.
  - **`styles/`**: Global stylesheets and theme definitions.
- **`public/`**: Static assets like images and icons.
- **`docs/`**: Documentation files (including Japanese README).

## Technologies

This project is built using the following technologies:

- **Core**:
  - [React](https://react.dev/) (v19) - UI Library
  - [TypeScript](https://www.typescriptlang.org/) - Static Typing
  - [Vite](https://vitejs.dev/) - Build Tool and Development Server

- **Routing**:
  - [React Router](https://reactrouter.com/) (v7) - Client-side routing

- **Quality & formatting**:
  - [ESLint](https://eslint.org/) - Linting

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd product-web
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Building for Production

To build the application for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```
