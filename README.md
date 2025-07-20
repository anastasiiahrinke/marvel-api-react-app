# Marvel API React App

A modern React application that displays Marvel characters using a custom Marvel API. Browse random characters, view character lists, and explore detailed character information with an intuitive user interface.

##  Features

- **Random Character Display**: Get a random Marvel character with the click of a button
- **Character List**: Browse through multiple Marvel characters in a grid layout
- **Character Details**: View detailed information about selected characters
- **Responsive Design**: Optimized for different screen sizes
- **Error Handling**: Graceful error handling with custom error messages
- **Loading States**: Smooth loading animations with spinners

##  Technologies Used

- **React** (Class Components)
- **JavaScript (ES6+)**
- **SCSS** for styling
- **Marvel API** for character data
- **Custom Marvel Service** for API integration

### RandomChar
- Displays a random Marvel character on page load
- "Try It" button to fetch new random characters
- Character image, name, description, and links to homepage/wiki

### CharList
- Grid layout of Marvel characters
- Responsive character cards with images and names
- "Load More" functionality for pagination

### CharInfo
- Detailed view of selected character
- Character biography and additional information
- Comics appearances and related content

### MarvelService
- Centralized API service for all Marvel data
- Error handling and data transformation
- Character and comics data fetching

##  Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/marvel-api-react-app.git
cd marvel-api-react-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

##  Usage

1. **View Random Character**: The app loads with a random Marvel character displayed at the top
2. **Get New Character**: Click the "Try It" button to fetch a new random character
3. **Browse Characters**: Scroll down to see the character list grid
4. **Load More Characters**: Click "Load More" to see additional characters
5. **View Character Details**: Click on any character to see detailed information

##  API Integration

The app uses a custom Marvel API server hosted at:
```
https://marvel-server-zeta.vercel.app/
```

### API Endpoints:
- `GET /characters` - Get list of characters
- `GET /characters/:id` - Get specific character details

##  Styling

- **SCSS** for modular and maintainable styles
- **CSS Variables** for consistent theming
- **Responsive Design** with mobile-first approach
- **Custom Button Components** with hover effects

##  Performance Features

- **Component-based Architecture** for reusability
- **Error Boundaries** for graceful error handling
- **Loading States** to improve user experience
- **Image Optimization** with object-fit properties

##  Error Handling

- Custom error messages with animated GIFs
- API error handling with fallback states
- Invalid character ID handling
- Network error management

##  Responsive Design

- Mobile-friendly layout
- Flexible grid system
- Adaptive image sizing
- Touch-friendly buttons

---

**Note**: This project is for educational purposes and uses Marvel character data. All Marvel characters and related elements are trademarks of Marvel Entertainment, LLC.
