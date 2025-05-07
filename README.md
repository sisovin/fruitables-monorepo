# Fruitables Monorepo Documentation

Welcome to the **Fruitables Monorepo**, a repository that showcases a complete monorepo structure for the Fruitables e-commerce project. This repository is designed for efficient development and maintenance of both the **frontend** and **backend** applications, leveraging shared libraries and consistent configurations.

---

## Table of Contents
- [Monorepo Organization](#monorepo-organization)
- [Frontend: Angular 19 Application](#frontend-angular-19-application)
- [Backend: NestJS Application](#backend-nestjs-application)
- [Shared Code and Libraries](#shared-code-and-libraries)
- [Configuration](#configuration)
- [Getting Started](#getting-started)
- [Development Guidelines](#development-guidelines)
- [Conclusion](#conclusion)

---

## Monorepo Organization

The repository is structured to separate the frontend and backend applications while utilizing shared libraries and configurations.

```
apps/
  web/       # Angular 19 frontend application
  api/       # NestJS backend application
libs/
  shared-types/ # Shared TypeScript interfaces
  utils/        # Shared utility functions
packages/
  config/     # Shared configuration packages (e.g., ESLint, Prettier, Tailwind CSS)
nx.json       # Nx workspace configuration
tsconfig.base.json # Root-level TypeScript configuration
```

### Key Features
- **Separation of Concerns:** Frontend and backend are isolated under the `apps/` directory.
- **Shared Libraries:** Reusable code resides in the `libs/` directory.
- **Centralized Configuration:** Shared packages in `packages/` ensure consistency across projects.

---

## Frontend: Angular 19 Application

The frontend application is built with **Angular 19** and follows a component-based architecture with feature modules.

### Key Features
- **Component-Based Architecture:** Clear separation of UI components for maintainability.
- **Feature Modules:** Organized by sections like `auth`, `shop`, and `cart` for scalability.
- **Services for API Communication:** Services handle API calls and state management.
- **TypeScript Strict Mode:** Ensures strong typing and error detection during development.

### Directory Structure
```
apps/web/
  src/
    app/
      features/
        auth/         # Authentication module
        shop/         # Shop module
        cart/         # Cart module
      core/
        services/     # Core services for API communication
        guards/       # Route guards
      shared/
        components/   # Shared UI components
        directives/   # Shared directives
        pipes/        # Shared pipes
```

---

## Backend: NestJS Application

The backend application is powered by **NestJS** and follows a modular, domain-driven design.

### Key Features
- **Domain-Driven Structure:** Modules are organized by domain (e.g., `auth`, `products`, `orders`).
- **Prisma ORM Integration:** Simplifies database interactions with type-safe queries.
- **JWT Authentication with Argon2:** Secure authentication using JSON Web Tokens and Argon2 hashing.
- **Comprehensive DTO Validation:** Ensures data integrity with strict DTO (Data Transfer Object) validation.

### Directory Structure
```
apps/api/
  src/
    modules/
      auth/          # Authentication module
      products/      # Products module
      orders/        # Orders module
    shared/
      exceptions/    # Shared exception classes
      utils/         # Shared utility functions
```

---

## Shared Code and Libraries

The `libs/` directory contains shared code that is accessible to both the frontend and backend applications.

### Key Libraries
1. **`shared-types`:**
   - Contains common TypeScript interfaces and types.
   - Example: `User`, `Product`, and `Order` interfaces.

2. **`utils`:**
   - Provides utility functions for cross-project use.
   - Example: String manipulators, date formatters, and reusable helpers.

3. **Tailwind Configuration:**
   - Shared Tailwind CSS configuration ensures consistent styling across projects.

---

## Configuration

The monorepo uses **Nx** for workspace management and includes shared configurations for linting, formatting, and environment management.

### Key Configurations
1. **Nx Workspace (`nx.json`):** Manages project dependencies and tasks.
2. **TypeScript Configuration (`tsconfig.base.json`):** Root-level TypeScript configurations for consistency.
3. **Environment-Specific Configurations:**
   - Separate environment files for development, staging, and production.
4. **Shared ESLint and Prettier Rules:** 
   - Centralized configuration for consistent code quality and formatting.
5. **Tailwind CSS Configuration:**
   - Shared Tailwind setup in the `packages/config/` directory.

---

## Getting Started

Follow these steps to set up the Fruitables Monorepo:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/sisovin/fruitables-monorepo.git
   cd fruitables-monorepo
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Applications:**
   - Start the frontend:
     ```bash
     nx serve web
     ```
   - Start the backend:
     ```bash
     nx serve api
     ```

4. **Build All Projects:**
   ```bash
   nx build
   ```

---

## Development Guidelines

### Best Practices
- **Feature Isolation:** Keep features isolated to their respective modules or directories.
- **Code Reuse:** Use shared libraries in `libs/` to avoid duplication.
- **Strict Typing:** Enable TypeScript strict mode to catch potential issues early.
- **Consistent Formatting:** Follow shared ESLint and Prettier rules.

### Nx Commands
- **Run a specific project:**
  ```bash
  nx serve <project-name>
  ```
- **Build a specific project:**
  ```bash
  nx build <project-name>
  ```
- **Lint all projects:**
  ```bash
  nx lint
  ```
- **Test all projects:**
  ```bash
  nx test
  ```

---

## Conclusion

The **Fruitables Monorepo** provides a well-organized and scalable structure for developing an e-commerce platform. By leveraging shared libraries, centralized configurations, and modern tools like Nx, this monorepo ensures efficient collaboration and high-quality code.
