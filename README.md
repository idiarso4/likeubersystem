# Food Delivery Admin Panel

A modern, responsive admin panel for managing a food delivery platform.

## Features

### 1. Dashboard
- **Statistics Overview**
  - Total Revenue
  - Total Orders
  - Active Restaurants
  - Total Users
- **Analytics**
  - Revenue Chart
  - Popular Items
  - Order Trends

### 2. User Management
- **User Types**
  - Customers
  - Restaurant Owners
  - Delivery Drivers
  - Administrators
- **Features**
  - User Registration
  - Role Assignment
  - Status Management (Active/Inactive)
  - User Profile Management

### 3. Restaurant Management
- **Restaurant Details**
  - Basic Information
  - Location & Contact
  - Operating Hours
  - Cuisine Types
- **Menu Management**
  - Categories
  - Items
  - Pricing
  - Special Offers
- **Features**
  - Restaurant Approval
  - Rating & Reviews
  - Analytics Dashboard

### 4. Order Management
- **Order Processing**
  - New Orders
  - In Progress
  - Ready for Pickup
  - In Delivery
  - Delivered
  - Cancelled
- **Features**
  - Real-time Order Tracking
  - Order History
  - Payment Status
  - Customer Communication

### 5. Menu Management
- **Categories**
  - Add/Edit Categories
  - Category Sorting
  - Category Status
- **Items**
  - Item Details
  - Pricing
  - Options & Variants
  - Availability Status
- **Features**
  - Bulk Import/Export
  - Image Management
  - Special Offers

### 6. Delivery Management
- **Driver Management**
  - Driver Profiles
  - Vehicle Information
  - Documents & Verification
- **Delivery Zones**
  - Zone Creation
  - Pricing Rules
  - Coverage Areas
- **Features**
  - Real-time Tracking
  - Delivery Analytics
  - Performance Metrics

### 7. Payment Management
- **Payment Methods**
  - Credit Cards
  - Digital Wallets
  - Cash on Delivery
- **Features**
  - Transaction History
  - Refund Management
  - Payment Gateway Integration

### 8. Promotions & Marketing
- **Campaigns**
  - Discount Codes
  - Special Offers
  - Loyalty Programs
- **Features**
  - Campaign Analytics
  - Customer Targeting
  - Promotion Scheduling

### 9. Reviews & Ratings
- **Management**
  - Customer Reviews
  - Restaurant Ratings
  - Driver Ratings
- **Features**
  - Moderation Tools
  - Response Management
  - Rating Analytics

### 10. Settings
- **System Settings**
  - General Configuration
  - Notification Settings
  - API Configuration
- **Features**
  - Email Templates
  - SMS Configuration
  - Payment Gateway Setup

## Technical Stack

- **Frontend**: React with TypeScript
- **UI Components**: ShadcN UI
- **State Management**: React Context/Hooks
- **Routing**: React Router
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Icons**: Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

```env
VITE_API_URL=your_api_url
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

MIT
