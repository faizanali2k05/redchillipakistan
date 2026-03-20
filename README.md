# Magsi Traders - Premium Spices & Commodities

A modern, responsive business website for Magsi Traders, built with React, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Modern Design**: Clean, professional UI with spice-inspired warm colors
- **Responsive Layout**: Works seamlessly on mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion animations throughout the site
- **Product Management**: Browse and filter products by category
- **Contact Form**: Easy-to-use contact form with validation
- **WhatsApp Integration**: Direct chat button for quick communication
- **Navigation**: Sticky navbar with smooth scrolling
- **Mobile Menu**: Responsive hamburger menu for mobile devices

## 📋 Pages

- **Home**: Hero section with highlights and call-to-action
- **Products**: Grid view of products with filtering options
- **About Us**: Company information and why choose us section
- **Contact**: Contact form, business hours, location map, and quick contact options

## 🛠 Tech Stack

- **React 18.2**: UI library with hooks
- **React Router 6**: Client-side routing
- **Tailwind CSS 3.3**: Utility-first CSS framework
- **Framer Motion 10.16**: Animation library
- **React Icons 4.10**: Icon library
- **Vite**: Build tool and development server

## 📦 Installation

1. **Clone or extract the project**
   ```bash
   cd magsi-traders
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

   The app will open at `http://localhost:3000`

## 🚀 Usage

### Development
```bash
npm start
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
magsi-traders/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with mobile menu
│   │   ├── Footer.jsx          # Footer with links and social media
│   │   ├── HeroSection.jsx     # Hero section with animations
│   │   ├── ProductCard.jsx     # Reusable product card component
│   │   ├── ContactForm.jsx     # Contact form component
│   │   └── WhatsAppButton.jsx  # Floating WhatsApp button
│   ├── pages/
│   │   ├── Home.jsx            # Home page
│   │   ├── Products.jsx        # Products page with filtering
│   │   ├── About.jsx           # About us page
│   │   └── Contact.jsx         # Contact page
│   ├── data/
│   │   └── products.js         # Product data / dummy data
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  spice: {
    // Customize spice colors
  },
}
```

### Products
Edit `src/data/products.js` to add or modify products:
```javascript
{
  id: 1,
  name: 'Product Name',
  category: 'Category',
  description: 'Description',
  image: 'Image URL',
  price: '₨ Price',
}
```

### Contact Information
Update contact details in:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`
- `src/components/WhatsAppButton.jsx`

### Images
Replace placeholder images with your own:
```bash
# Update image URLs in components
https://via.placeholder.com/300x300?text=Product -> Your Image URL
```

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+

## 🔗 Links & Integration

### WhatsApp
Update the phone number in:
- `src/components/WhatsAppButton.jsx`
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

Default number: `+92 300 1234567`

### Social Media
Update social links in `src/components/Footer.jsx`

### Google Maps
Edit the embed URL in `src/pages/Contact.jsx`

## ✨ Features Details

### Sticky Navbar
- Fixed top navigation
- Smooth scroll effects
- Mobile hamburger menu
- Active link indicators

### Hero Section
- Full-screen animated background
- Multiple CTAs
- Statistics display
- Scroll indicator

### Products Page
- Grid layout (1 col mobile, 2 col tablet, 4 col desktop)
- Category filtering
- Product cards with hover effects
- Quick add to cart buttons

### Contact Page
- Contact form with validation
- Multiple contact options (phone, email, WhatsApp)
- Business hours display
- Embedded Google Maps
- FAQ section

### WhatsApp Button
- Fixed floating button
- Smooth animations
- Pre-filled message
- Mobile-friendly

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📝 Notes

- All images use placeholder URLs - replace with actual images
- Contact form is a frontend form - connect to backend for actual email sending
- WhatsApp numbers should be replaced with actual business numbers
- Business hours can be updated in the Contact component
- All text content is easily customizable

## 🎯 Future Enhancements

- Add shopping cart functionality
- Implement payment gateway
- Add product search
- Email notifications
- Admin dashboard
- Blog section
- Customer reviews

## 📧 Support

For questions or issues, contact: info@magsitraders.pk

---

**Created for Magsi Traders**
Premium Spices & Commodities Supplier Across Pakistan
