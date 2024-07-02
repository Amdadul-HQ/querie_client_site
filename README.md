# Alternative Product Information System

This is a full-stack web application designed to provide users with alternative product information, allowing them to query, view, and provide recommendations for various products.

## Features:

- **Responsive Design**: Optimized for mobile, tablet, and desktop views.
- **User Authentication**: Register and login using email/password or Google Sign-in. Private routes for authenticated users to add queries and view recommendations.
- **Query Management**: Add, update, and delete queries about products. Query details include product information, user details, and reasons for seeking alternatives.
- **Recommendations**: View and add recommendations for products.
- **Search Functionality**: Search queries based on product names.
- **Layout Customization**: Toggle between different grid layouts on the All Queries page.
- **Dark/Light Theme**: Toggle between dark and light themes.
- **Error Handling**: Display relevant error messages during login, registration, and form submissions.

## Technologies Used:

**Frontend:**
- HTML, CSS, JavaScript
- React.js
- React Router
- JWT
- Tailwind CSS
- React Icon
- React Helmet Async
- Daisy UI

**Backend:**
- Node.js with Express.js
- MongoDB
- JWT
- Firebase for Google Sign-in authentication

## Live Demo:

A live demo of the application can be accessed at: [Live Demo](https://shop-now-fc5a4.web.app/)

## Development Setup:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Amdadul-HQ/querie_client_site.git
   
2. **Install dependencies**:
   ```bash
   npm i
   
3. **Set env in env.local**:
   ```bash
    REACT_APP_API_URL=your_backend_API_URL
    REACT_APP_MONGO_URI=your_MongoDB_connection_string
    REACT_APP_FIREBASE_CONFIG=your_Firebase_configuration

4. **run**:
```bash
  npm run dev
```
Contributing:
Front-End: [Amdadul_HQ]
Back-End: [Amdadul_HQ]

