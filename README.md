# Fruitables Monorepo

A repository shows the complete monorepo structure for your Fruitables e-commerce project with detailed file listings for both frontend (Angular) and backend (NestJS):

```
fruitables-monorepo/
├── apps/
│   ├── web/                          # Angular 19 Frontend
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── components/
│   │   │   │   │   ├── header/
│   │   │   │   │   │   ├── header.component.ts
│   │   │   │   │   │   ├── header.component.html
│   │   │   │   │   │   ├── header.component.css
│   │   │   │   │   │   └── header.component.spec.ts
│   │   │   │   │   ├── footer/
│   │   │   │   │   │   ├── footer.component.ts
│   │   │   │   │   │   ├── footer.component.html
│   │   │   │   │   │   └── footer.component.css
│   │   │   │   │   ├── product-card/
│   │   │   │   │   │   ├── product-card.component.ts
│   │   │   │   │   │   ├── product-card.component.html
│   │   │   │   │   │   └── product-card.component.css
│   │   │   │   │   ├── cart/
│   │   │   │   │   │   ├── cart.component.ts
│   │   │   │   │   │   ├── cart.component.html
│   │   │   │   │   │   └── cart.component.css
│   │   │   │   │   ├── search/
│   │   │   │   │   │   ├── search.component.ts
│   │   │   │   │   │   └── search.component.html
│   │   │   │   │   └── newsletter/
│   │   │   │   │       ├── newsletter.component.ts
│   │   │   │   │       └── newsletter.component.html
│   │   │   │   ├── pages/
│   │   │   │   │   ├── home/
│   │   │   │   │   │   ├── home.component.ts
│   │   │   │   │   │   ├── home.component.html
│   │   │   │   │   │   └── home.component.css
│   │   │   │   │   ├── shop/
│   │   │   │   │   │   ├── shop.component.ts
│   │   │   │   │   │   ├── shop.component.html
│   │   │   │   │   │   └── shop.component.css
│   │   │   │   │   ├── product-detail/
│   │   │   │   │   │   ├── product-detail.component.ts
│   │   │   │   │   │   ├── product-detail.component.html
│   │   │   │   │   │   └── product-detail.component.css
│   │   │   │   │   ├── cart/
│   │   │   │   │   │   ├── cart-page.component.ts
│   │   │   │   │   │   ├── cart-page.component.html
│   │   │   │   │   │   └── cart-page.component.css
│   │   │   │   │   ├── checkout/
│   │   │   │   │   │   ├── checkout.component.ts
│   │   │   │   │   │   ├── checkout.component.html
│   │   │   │   │   │   └── checkout.component.css
│   │   │   │   │   ├── auth/
│   │   │   │   │   │   ├── login/
│   │   │   │   │   │   │   ├── login.component.ts
│   │   │   │   │   │   │   └── login.component.html
│   │   │   │   │   │   ├── register/
│   │   │   │   │   │   │   ├── register.component.ts
│   │   │   │   │   │   │   └── register.component.html
│   │   │   │   │   │   └── auth.module.ts
│   │   │   │   │   ├── about/
│   │   │   │   │   │   ├── about.component.ts
│   │   │   │   │   │   └── about.component.html
│   │   │   │   │   ├── contact/
│   │   │   │   │   │   ├── contact.component.ts
│   │   │   │   │   │   └── contact.component.html
│   │   │   │   │   └── account/
│   │   │   │   │       ├── profile/
│   │   │   │   │       │   ├── profile.component.ts
│   │   │   │   │       │   └── profile.component.html
│   │   │   │   │       └── orders/
│   │   │   │   │           ├── orders.component.ts
│   │   │   │   │           └── orders.component.html
│   │   │   │   ├── services/
│   │   │   │   │   ├── api.service.ts
│   │   │   │   │   ├── auth.service.ts
│   │   │   │   │   ├── cart.service.ts
│   │   │   │   │   ├── product.service.ts
│   │   │   │   │   ├── order.service.ts
│   │   │   │   │   ├── seo.service.ts
│   │   │   │   │   └── http-interceptor.service.ts
│   │   │   │   ├── guards/
│   │   │   │   │   ├── auth.guard.ts
│   │   │   │   │   └── admin.guard.ts
│   │   │   │   ├── interceptors/
│   │   │   │   │   ├── auth.interceptor.ts
│   │   │   │   │   └── error.interceptor.ts
│   │   │   │   ├── models/
│   │   │   │   │   ├── product.model.ts
│   │   │   │   │   ├── user.model.ts
│   │   │   │   │   ├── cart.model.ts
│   │   │   │   │   ├── order.model.ts
│   │   │   │   │   └── api-response.model.ts
│   │   │   │   ├── shared/
│   │   │   │   │   ├── pipes/
│   │   │   │   │   │   ├── safe-html.pipe.ts
│   │   │   │   │   │   └── currency.pipe.ts
│   │   │   │   │   └── directives/
│   │   │   │   │       └── click-outside.directive.ts
│   │   │   │   ├── app-routing.module.ts
│   │   │   │   ├── app.component.ts
│   │   │   │   ├── app.component.html
│   │   │   │   ├── app.component.css
│   │   │   │   └── app.module.ts
│   │   │   ├── assets/
│   │   │   │   ├── images/
│   │   │   │   │   ├── logo.png
│   │   │   │   │   ├── products/
│   │   │   │   │   └── icons/
│   │   │   │   ├── styles/
│   │   │   │   │   ├── tailwind.css
│   │   │   │   │   ├── custom.css
│   │   │   │   │   └── themes/
│   │   │   │   └── environments/
│   │   │   │       ├── environment.ts
│   │   │   │       └── environment.prod.ts
│   │   │   ├── index.html
│   │   │   └── main.ts
│   │   ├── angular.json
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   └── api/                          # NestJS Backend
│       ├── src/
│       │   ├── modules/
│       │   │   ├── auth/
│       │   │   │   ├── auth.controller.ts
│       │   │   │   ├── auth.service.ts
│       │   │   │   ├── auth.module.ts
│       │   │   │   ├── dto/
│       │   │   │   │   ├── login.dto.ts
│       │   │   │   │   └── register.dto.ts
│       │   │   │   ├── strategies/
│       │   │   │   │   ├── jwt.strategy.ts
│       │   │   │   │   └── local.strategy.ts
│       │   │   │   └── interfaces/
│       │   │   │       └── jwt-payload.interface.ts
│       │   │   ├── products/
│       │   │   │   ├── products.controller.ts
│       │   │   │   ├── products.service.ts
│       │   │   │   ├── products.module.ts
│       │   │   │   ├── dto/
│       │   │   │   │   ├── create-product.dto.ts
│       │   │   │   │   ├── update-product.dto.ts
│       │   │   │   │   └── product-query.dto.ts
│       │   │   │   └── entities/
│       │   │   │       └── product.entity.ts
│       │   │   ├── users/
│       │   │   │   ├── users.controller.ts
│       │   │   │   ├── users.service.ts
│       │   │   │   ├── users.module.ts
│       │   │   │   ├── dto/
│       │   │   │   │   ├── create-user.dto.ts
│       │   │   │   │   └── update-user.dto.ts
│       │   │   │   └── entities/
│       │   │   │       └── user.entity.ts
│       │   │   ├── orders/
│       │   │   │   ├── orders.controller.ts
│       │   │   │   ├── orders.service.ts
│       │   │   │   ├── orders.module.ts
│       │   │   │   ├── dto/
│       │   │   │   │   ├── create-order.dto.ts
│       │   │   │   │   └── update-order.dto.ts
│       │   │   │   └── entities/
│       │   │   │       ├── order.entity.ts
│       │   │   │       └── order-item.entity.ts
│       │   │   ├── categories/
│       │   │   │   ├── categories.controller.ts
│       │   │   │   ├── categories.service.ts
│       │   │   │   └── categories.module.ts
│       │   │   └── reviews/
│       │   │       ├── reviews.controller.ts
│       │   │       ├── reviews.service.ts
│       │   │       └── reviews.module.ts
│       │   ├── common/
│       │   │   ├── decorators/
│       │   │   │   ├── public.decorator.ts
│       │   │   │   └── current-user.decorator.ts
│       │   │   ├── filters/
│       │   │   │   └── http-exception.filter.ts
│       │   │   ├── guards/
│       │   │   │   ├── roles.guard.ts
│       │   │   │   └── jwt-auth.guard.ts
│       │   │   ├── interceptors/
│       │   │   │   ├── transform.interceptor.ts
│       │   │   │   └── logging.interceptor.ts
│       │   │   ├── middleware/
│       │   │   │   └── logger.middleware.ts
│       │   │   └── pipes/
│       │   │       ├── validation.pipe.ts
│       │   │       └── parse-int.pipe.ts
│       │   ├── prisma/
│       │   │   ├── schema.prisma
│       │   │   └── prisma.service.ts
│       │   ├── config/
│       │   │   ├── configuration.ts
│       │   │   └── configuration.schema.ts
│       │   ├── app.module.ts
│       │   ├── app.controller.ts
│       │   ├── main.ts
│       │   └── constants.ts
│       ├── test/
│       │   ├── app.e2e-spec.ts
│       │   └── jest-e2e.json
│       ├── nest-cli.json
│       ├── tsconfig.build.json
│       ├── tsconfig.json
│       └── package.json
│
├── libs/                             # Shared libraries
│   ├── shared-types/                 # Shared TypeScript interfaces/types
│   │   ├── src/
│   │   │   ├── product.interface.ts
│   │   │   ├── user.interface.ts
│   │   │   └── index.ts
│   │   └── tsconfig.json
│   └── utils/                       # Shared utilities
│       ├── src/
│       │   ├── logger.ts
│       │   ├── api-utils.ts
│       │   └── index.ts
│       └── tsconfig.json
│
├── packages/                         # Additional packages
│   └── tailwind-config/              # Shared Tailwind config
│       ├── tailwind.config.js
│       └── package.json
│
├── .eslintrc.json
├── .prettierrc
├── nx.json                           # Nx workspace configuration
├── package.json
├── tsconfig.base.json
└── README.md
```

### Key Features of This Structure:

1. **Monorepo Organization**:
   - `apps/web` - Angular 19 frontend application
   - `apps/api` - NestJS backend application
   - `libs` - Shared libraries between frontend and backend
   - `packages` - Shared configuration packages

2. **Frontend Highlights**:
   - Component-based architecture with clear separation
   - Feature modules for different sections (auth, shop, etc.)
   - Services for API communication and state management
   - TypeScript strict mode enabled

3. **Backend Highlights**:
   - Modular NestJS structure following domain-driven design
   - Prisma ORM for database access
   - JWT authentication with argon2 hashing
   - Comprehensive DTO validation

4. **Shared Code**:
   - TypeScript interfaces in `shared-types` library
   - Utility functions in `utils` library
   - Tailwind configuration shared between projects

5. **Configuration**:
   - Nx workspace for monorepo management
   - Consistent ESLint and Prettier setup
   - Environment-specific configurations
