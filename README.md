# React-TypeScript Boilerplate

Everything is in place to start coding!

## 🛠️ Built with

- ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## 👩🏻‍💻 About this boilerplate

I’ve built this React + TypeScript boilerplate to provide a complete, ready-to-use starting point for web development projects. 

It is designed for maintainability, robustness, and developer productivity, including everything you need to get started quickly 🚀

## ✨ Key features

- **Vite build tool** with TypeScript support, tree shaking, and CSS Modules for fast builds and modular styling
- **React with TypeScript** for type safety and robust development
- **Basic routing system** for navigation between views
- **Pre-configured metadata** including author, description, and favicon
- **Custom port configuration** for development convenience
- **Code quality tools** ESLint and Prettier configured for consistent standards
- **Test environment** ready for unit and integration testing

## 🗂 File structure:

```
.
├── src                  » Source code
|   ├── components       » Components
|   |    └── templates   » Page-level layout
|   ├── pages            » Page view
|   ├── tests            » Test setup
|   ├── App.test.tsx     » Integration test
|   ├── App.tsx          » Main app component and routes
|   └── main.tsx         » Entry point that mounts the React app
├── index.html	         » HTML entry point served by Vite
├── (...)                » Configuration files
└── package.json         » Project dependencies & scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000/](http://localhost:3000/)

Here's also a CLI to apply formatting fixes the codebase:

```bash
npm run lint:fix
```

## 🧪 Testing

This project is composed of 1 test suite:

- integration test on the HomePage (`/src/App.test.tsx`)

Run tests with:

```
npm run test
```

## 📚 Documentation & Resources

- [Vite](https://vitejs.dev/) — Fast build tool & dev server

- [React](https://reactjs.org/) — UI library
- [React Router](https://reactrouter.com/home) - React routing library
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) — Code quality and formatting
- [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) — Testing utilities

---

Medium articles :

- [How to setup a Vite project](https://medium.com/@robinviktorsson/complete-guide-to-setting-up-react-with-typescript-and-vite-2025-468f6556aaf2)
- [How to implement Vitest on a React project](https://victorbruce82.medium.com/vitest-with-react-testing-library-in-react-created-with-vite-3552f0a9a19a)