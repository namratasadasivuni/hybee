# Hybee Project - Complete Folder Structure & File Mapping

This guide shows the exact folder structure of the Hybee project with every file explained and mapped to its functionality.

---

## 📁 Project Root Structure

```
hybee/
├── client/                          # Frontend (React + Vite)
├── server/                          # Backend (Express + tRPC)
├── drizzle/                         # Database schema & migrations
├── shared/                          # Shared constants & types
├── storage/                         # S3 storage helpers
├── package.json                     # Project dependencies
├── tsconfig.json                    # TypeScript config
├── vite.config.ts                   # Vite bundler config
├── .env                             # Environment variables (LOCAL ONLY)
├── .gitignore                       # Git ignore rules
├── README.md                        # Project overview
├── GITHUB_GUIDE.md                  # GitHub push instructions
├── VSCODE_GUIDE.md                  # VS Code setup guide
├── DEPLOYMENT.md                    # Deployment instructions
├── LOCAL_SETUP_GUIDE.md             # Local setup steps
├── FOLDER_STRUCTURE.md              # THIS FILE
└── IMAGE_URLS.md                    # CDN image URLs
```

---

## 🎨 FRONTEND - `/client/` Directory

The frontend contains all React components, pages, and styling.

### Frontend Root Structure

```
client/
├── public/                          # Static files (favicon, robots.txt)
├── src/                             # Source code
├── index.html                       # HTML entry point
├── vite.config.ts                   # Vite config for frontend
└── tsconfig.json                    # TypeScript config
```

### Frontend Source Code - `/client/src/`

```
client/src/
├── pages/                           # Page components (full pages)
├── components/                      # Reusable UI components
├── contexts/                        # React contexts (state management)
├── hooks/                           # Custom React hooks
├── lib/                             # Utility functions & libraries
├── _core/                           # Core utilities (auth, API)
├── App.tsx                          # Main app component with routes
├── main.tsx                         # React entry point
├── index.css                        # Global styles & Tailwind
└── const.ts                         # Frontend constants
```

---

## 📄 FRONTEND PAGES - `/client/src/pages/`

Each page corresponds to a route in the application.

```
client/src/pages/
├── Home.tsx                         # Homepage with hero, featured products
│   ├── Hero banner section
│   ├── Categories section
│   ├── Featured products grid
│   ├── Promotional banners
│   └── Newsletter signup
│
├── Products.tsx                     # Product listing page
│   ├── Product grid
│   ├── Category filters
│   ├── Price range filter
│   ├── Sorting options
│   └── Pagination
│
├── ProductDetail.tsx                # Single product detail page
│   ├── Image gallery
│   ├── Product info
│   ├── Size selector
│   ├── Color selector
│   ├── Add to cart button
│   ├── Reviews section
│   └── Related products
│
├── Cart.tsx                         # Shopping cart page
│   ├── Cart items list
│   ├── Item quantity controls
│   ├── Remove item button
│   ├── Order summary
│   ├── Subtotal/tax/total
│   └── Checkout button
│
├── Checkout.tsx                     # Checkout flow page
│   ├── Shipping address form
│   ├── Billing address form
│   ├── Payment method selection
│   ├── Order review
│   └── Place order button
│
├── Profile.tsx                      # User profile page
│   ├── User information
│   ├── Order history list
│   ├── Order details view
│   ├── Account settings
│   └── Logout button
│
├── AdminPanel.tsx                   # Admin dashboard
│   ├── Product management
│   ├── Add product form
│   ├── Edit product form
│   ├── Delete product
│   ├── Orders management
│   └── Order status updates
│
└── NotFound.tsx                     # 404 error page
    └── Not found message
```

---

## 🧩 FRONTEND COMPONENTS - `/client/src/components/`

Reusable UI components used across pages.

```
client/src/components/
├── Navigation.tsx                   # Top navigation bar
│   ├── Logo
│   ├── Menu items (Shop, About, Contact)
│   ├── Search bar
│   ├── Cart icon with count
│   ├── User profile dropdown
│   └── Mobile menu toggle
│
├── Footer.tsx                       # Footer component
│   ├── Company info
│   ├── Quick links
│   ├── Categories
│   ├── Newsletter signup
│   ├── Social media links
│   └── Copyright info
│
├── DashboardLayout.tsx              # Admin dashboard layout (optional)
│   ├── Sidebar navigation
│   ├── Main content area
│   └── User profile section
│
├── ErrorBoundary.tsx                # Error handling component
│   ├── Error display
│   └── Fallback UI
│
├── ui/                              # shadcn/ui components
│   ├── button.tsx                   # Button component
│   ├── card.tsx                     # Card component
│   ├── dialog.tsx                   # Modal/dialog
│   ├── input.tsx                    # Input field
│   ├── select.tsx                   # Dropdown select
│   ├── tabs.tsx                     # Tab component
│   ├── badge.tsx                    # Badge/tag
│   ├── avatar.tsx                   # User avatar
│   └── ... (other UI components)
│
└── Map.tsx                          # Google Maps component (optional)
    ├── Map display
    └── Location services
```

---

## 🎯 FRONTEND UTILITIES - `/client/src/`

```
client/src/
├── lib/
│   ├── trpc.ts                      # tRPC client setup
│   │   └── Connects to backend APIs
│   └── utils.ts                     # Utility functions
│
├── contexts/
│   ├── ThemeContext.tsx             # Dark/light theme context
│   └── AuthContext.tsx              # Authentication context
│
├── hooks/
│   ├── useAuth.ts                   # Auth hook
│   ├── useTheme.ts                  # Theme hook
│   └── useCart.ts                   # Cart hook
│
├── _core/
│   ├── hooks/
│   │   └── useAuth.ts               # Auth hook implementation
│   └── env.ts                       # Environment variables
│
├── App.tsx                          # Main app with routes
│   ├── Home route (/)
│   ├── Products route (/products)
│   ├── Product detail route (/product/:id)
│   ├── Cart route (/cart)
│   ├── Checkout route (/checkout)
│   ├── Profile route (/profile)
│   ├── Admin route (/admin)
│   └── 404 route
│
├── main.tsx                         # React entry point
│   ├── Mounts App to DOM
│   └── Sets up providers
│
├── index.css                        # Global styles
│   ├── Tailwind directives
│   ├── CSS variables
│   ├── Theme colors
│   └── Custom utilities
│
└── const.ts                         # Frontend constants
    ├── API URLs
    └── Auth URLs
```

---

## 🔧 BACKEND - `/server/` Directory

The backend contains all API logic, database queries, and business logic.

### Backend Root Structure

```
server/
├── _core/                           # Core framework files
├── routers/                         # tRPC route handlers
├── db.ts                            # Database query helpers
├── routers.ts                       # Main router setup
├── auth.logout.test.ts              # Test example
└── ... (other server files)
```

---

## 🛣️ BACKEND ROUTERS - `/server/routers.ts` & `/server/routers/`

Each router handles a specific feature's API endpoints.

```
server/routers.ts                   # Main router file
├── system router                    # System operations
│   ├── notifyOwner                  # Send owner notifications
│   └── health check
│
├── auth router                      # Authentication
│   ├── me                           # Get current user
│   └── logout                       # Logout user
│
├── products router                  # Product management
│   ├── listProducts                 # Get all products
│   ├── getProduct                   # Get single product
│   ├── createProduct                # Create new product (admin)
│   ├── updateProduct                # Update product (admin)
│   └── deleteProduct                # Delete product (admin)
│
├── cart router                      # Shopping cart
│   ├── getCart                      # Get user's cart
│   ├── addToCart                    # Add item to cart
│   ├── removeFromCart               # Remove item from cart
│   └── updateCartItem               # Update item quantity
│
├── orders router                    # Order management
│   ├── createOrder                  # Create new order
│   ├── getOrders                    # Get user's orders
│   ├── getOrder                     # Get single order
│   ├── updateOrderStatus            # Update order status (admin)
│   └── cancelOrder                  # Cancel order
│
├── reviews router                   # Product reviews
│   ├── getReviews                   # Get product reviews
│   ├── addReview                    # Add review
│   ├── updateReview                 # Update review
│   └── deleteReview                 # Delete review
│
└── profile router                   # User profile
    ├── getProfile                   # Get user profile
    ├── updateProfile                # Update profile
    └── changePassword                # Change password
```

---

## 💾 BACKEND UTILITIES - `/server/`

```
server/
├── db.ts                            # Database query helpers
│   ├── getDb()                      # Get database connection
│   ├── upsertUser()                 # Create/update user
│   ├── getUserByOpenId()            # Get user by ID
│   ├── getProducts()                # Get all products
│   ├── getProduct()                 # Get single product
│   ├── getCart()                    # Get user's cart
│   ├── createOrder()                # Create order
│   └── ... (other queries)
│
├── _core/                           # Core framework
│   ├── index.ts                     # Server entry point
│   ├── context.ts                   # tRPC context setup
│   ├── trpc.ts                      # tRPC setup
│   ├── cookies.ts                   # Cookie handling
│   ├── oauth.ts                     # OAuth flow
│   ├── env.ts                       # Environment variables
│   ├── llm.ts                       # LLM integration
│   ├── imageGeneration.ts           # Image generation
│   ├── voiceTranscription.ts        # Voice to text
│   ├── map.ts                       # Google Maps
│   ├── notification.ts              # Notifications
│   └── systemRouter.ts              # System routes
│
└── storage.ts                       # S3 storage helpers
    ├── storagePut()                 # Upload to S3
    └── storageGet()                 # Get from S3
```

---

## 💾 DATABASE - `/drizzle/` Directory

Database schema and migrations.

```
drizzle/
├── schema.ts                        # Database tables definition
│   ├── users table                  # User accounts
│   │   ├── id (primary key)
│   │   ├── openId (unique)
│   │   ├── name
│   │   ├── email
│   │   ├── role (admin/user)
│   │   ├── createdAt
│   │   ├── updatedAt
│   │   └── lastSignedIn
│   │
│   ├── products table               # Products catalog
│   │   ├── id (primary key)
│   │   ├── name
│   │   ├── description
│   │   ├── price
│   │   ├── category
│   │   ├── image
│   │   ├── sizes (JSON)
│   │   ├── colors (JSON)
│   │   ├── stock
│   │   ├── createdAt
│   │   └── updatedAt
│   │
│   ├── cart table                   # Shopping cart items
│   │   ├── id (primary key)
│   │   ├── userId (foreign key)
│   │   ├── productId (foreign key)
│   │   ├── quantity
│   │   ├── selectedSize
│   │   ├── selectedColor
│   │   ├── createdAt
│   │   └── updatedAt
│   │
│   ├── orders table                 # Customer orders
│   │   ├── id (primary key)
│   │   ├── userId (foreign key)
│   │   ├── totalAmount
│   │   ├── status
│   │   ├── shippingAddress
│   │   ├── billingAddress
│   │   ├── paymentMethod
│   │   ├── createdAt
│   │   └── updatedAt
│   │
│   ├── orderItems table             # Items in each order
│   │   ├── id (primary key)
│   │   ├── orderId (foreign key)
│   │   ├── productId (foreign key)
│   │   ├── quantity
│   │   ├── price
│   │   ├── selectedSize
│   │   └── selectedColor
│   │
│   └── reviews table                # Product reviews
│       ├── id (primary key)
│       ├── productId (foreign key)
│       ├── userId (foreign key)
│       ├── rating
│       ├── comment
│       ├── createdAt
│       └── updatedAt
│
└── migrations/                      # Auto-generated SQL migrations
    ├── 0001_*.sql                   # Initial schema
    ├── 0002_*.sql                   # Updates
    └── ... (more migrations)
```

---

## 🔗 SHARED - `/shared/` Directory

Code shared between frontend and backend.

```
shared/
├── const.ts                         # Shared constants
│   ├── API endpoints
│   ├── Cookie names
│   └── App configuration
│
├── types.ts                         # Shared types
│   ├── User type
│   ├── Product type
│   ├── Order type
│   └── ... (other types)
│
└── utils.ts                         # Shared utilities
    ├── Validation functions
    └── Helper functions
```

---

## 📦 STORAGE - `/storage/` Directory

S3 cloud storage integration.

```
storage/
└── index.ts                         # S3 helpers
    ├── storagePut()                 # Upload file to S3
    │   └── Returns CDN URL
    └── storageGet()                 # Get file from S3
        └── Returns signed URL
```

---

## 🔑 Configuration Files

### Root Level Files

```
hybee/
├── package.json                     # Project dependencies & scripts
│   ├── "pnpm dev"                   # Start dev server
│   ├── "pnpm build"                 # Build for production
│   ├── "pnpm start"                 # Start production server
│   ├── "pnpm test"                  # Run tests
│   └── ... (other scripts)
│
├── tsconfig.json                    # TypeScript configuration
│   ├── Compiler options
│   ├── Path aliases
│   └── Type checking
│
├── vite.config.ts                   # Vite bundler config
│   ├── Frontend build settings
│   └── Dev server settings
│
├── .env                             # Environment variables (LOCAL)
│   ├── DATABASE_URL
│   ├── JWT_SECRET
│   ├── OAUTH settings
│   └── API keys
│
└── .gitignore                       # Git ignore rules
    ├── .env (never commit)
    ├── node_modules
    ├── dist
    └── ... (other files to ignore)
```

---

## 🔄 Data Flow - How Everything Connects

### Frontend to Backend Flow

```
User Action (Click Button)
    ↓
React Component (e.g., Home.tsx)
    ↓
tRPC Hook (e.g., trpc.products.listProducts.useQuery())
    ↓
tRPC Client (client/src/lib/trpc.ts)
    ↓
Backend Router (server/routers.ts)
    ↓
Database Query (server/db.ts)
    ↓
Database (MySQL via Drizzle ORM)
    ↓
Response Data
    ↓
React Component Updates UI
    ↓
User Sees Result
```

### Example: Add to Cart Flow

```
1. User clicks "Add to Cart" in ProductDetail.tsx
2. Component calls: trpc.cart.addToCart.useMutation()
3. tRPC sends request to backend
4. Backend router (server/routers.ts) receives request
5. Router calls db.addToCart() from server/db.ts
6. Database query inserts into cart table
7. Response sent back to frontend
8. Component updates cart count in Navigation.tsx
9. User sees cart updated
```

---

## 📱 Page-to-File Mapping

| Page | Route | File | Components Used |
|------|-------|------|-----------------|
| Homepage | `/` | `client/src/pages/Home.tsx` | Navigation, Footer, Button |
| Products | `/products` | `client/src/pages/Products.tsx` | Navigation, Footer, Card |
| Product Detail | `/product/:id` | `client/src/pages/ProductDetail.tsx` | Navigation, Footer, Button, Dialog |
| Shopping Cart | `/cart` | `client/src/pages/Cart.tsx` | Navigation, Footer, Button, Card |
| Checkout | `/checkout` | `client/src/pages/Checkout.tsx` | Navigation, Footer, Button, Input, Form |
| User Profile | `/profile` | `client/src/pages/Profile.tsx` | Navigation, Footer, Card, Button |
| Admin Panel | `/admin` | `client/src/pages/AdminPanel.tsx` | Navigation, Footer, Table, Form, Dialog |
| 404 Error | `/*` | `client/src/pages/NotFound.tsx` | Button, Link |

---

## 🔐 API Endpoints Mapping

| Feature | Method | Endpoint | Handler |
|---------|--------|----------|---------|
| Get Products | GET | `/api/trpc/products.listProducts` | `server/routers.ts` → `products.listProducts` |
| Get Product | GET | `/api/trpc/products.getProduct` | `server/routers.ts` → `products.getProduct` |
| Add to Cart | POST | `/api/trpc/cart.addToCart` | `server/routers.ts` → `cart.addToCart` |
| Get Cart | GET | `/api/trpc/cart.getCart` | `server/routers.ts` → `cart.getCart` |
| Create Order | POST | `/api/trpc/orders.createOrder` | `server/routers.ts` → `orders.createOrder` |
| Get Orders | GET | `/api/trpc/orders.getOrders` | `server/routers.ts` → `orders.getOrders` |
| Get User | GET | `/api/trpc/auth.me` | `server/routers.ts` → `auth.me` |
| Logout | POST | `/api/trpc/auth.logout` | `server/routers.ts` → `auth.logout` |

---

## 🎯 Quick Reference: Where to Edit

| What You Want to Change | File to Edit |
|-------------------------|--------------|
| Homepage content | `client/src/pages/Home.tsx` |
| Navigation menu | `client/src/components/Navigation.tsx` |
| Footer links | `client/src/components/Footer.tsx` |
| Product page layout | `client/src/pages/Products.tsx` |
| Product detail page | `client/src/pages/ProductDetail.tsx` |
| Cart page | `client/src/pages/Cart.tsx` |
| Checkout form | `client/src/pages/Checkout.tsx` |
| User profile | `client/src/pages/Profile.tsx` |
| Admin panel | `client/src/pages/AdminPanel.tsx` |
| Global styles | `client/src/index.css` |
| Theme colors | `client/src/index.css` (CSS variables) |
| API endpoints | `server/routers.ts` |
| Database queries | `server/db.ts` |
| Database schema | `drizzle/schema.ts` |
| Environment variables | `.env` file |
| Dependencies | `package.json` |

---

## 🚀 Development Workflow

### 1. Make Frontend Changes

```bash
# Edit a page or component
vim client/src/pages/Home.tsx

# Save the file (Ctrl+S)
# Browser auto-refreshes with changes
```

### 2. Make Backend Changes

```bash
# Edit a router or database query
vim server/routers.ts
# or
vim server/db.ts

# Save the file (Ctrl+S)
# Server auto-reloads
```

### 3. Update Database Schema

```bash
# Edit schema
vim drizzle/schema.ts

# Generate migration
pnpm drizzle-kit generate

# Run migration
pnpm drizzle-kit migrate
```

### 4. Test Changes

```bash
# Run tests
pnpm test

# Check TypeScript
pnpm check

# Format code
pnpm format
```

### 5. Push to GitHub

```bash
# Stage changes
git add .

# Commit
git commit -m "Description of changes"

# Push
git push
```

---

## 📊 File Count Summary

| Directory | File Count | Purpose |
|-----------|-----------|---------|
| `client/src/pages/` | 8 | Page components |
| `client/src/components/` | 15+ | Reusable components |
| `server/routers/` | 5+ | API route handlers |
| `drizzle/` | 6+ | Database schema & migrations |
| `shared/` | 3 | Shared code |
| Root config | 5 | Configuration files |
| **Total** | **50+** | **Complete application** |

---

## ✅ Checklist: Understanding the Structure

- [ ] I understand the frontend is in `/client/src/`
- [ ] I understand the backend is in `/server/`
- [ ] I know where pages are located (`/client/src/pages/`)
- [ ] I know where components are (`/client/src/components/`)
- [ ] I know where API routers are (`/server/routers.ts`)
- [ ] I know where database queries are (`/server/db.ts`)
- [ ] I know where database schema is (`/drizzle/schema.ts`)
- [ ] I understand the data flow from frontend to backend
- [ ] I know how to edit files and see changes
- [ ] I'm ready to make customizations!

---

## 🎓 Next Steps

1. **Explore the files**: Open each file and read the comments
2. **Make a small change**: Edit the homepage title and see it update
3. **Add a new product**: Use the admin panel to add products
4. **Test the flow**: Add item to cart, checkout, create order
5. **Push to GitHub**: Follow GITHUB_GUIDE.md
6. **Deploy**: Follow DEPLOYMENT.md

---

**You now understand the complete Hybee project structure! 🎉**

Every file has a purpose, and every folder is organized logically. Start making changes and building your dream fashion e-commerce platform!
