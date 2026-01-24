# Blog Post Application

A modern, full-featured blog platform built with React and Vite. Create, edit, search, and manage blog posts with an intuitive user interface.

## Features

- **📝 Create Posts**: Write new blog posts with title, summary, content, author, and date
- **✏️ Edit Posts**: Modify existing blog posts seamlessly
- **🗑️ Delete Posts**: Remove posts you no longer need
- **🔍 Search Functionality**: Search through blog posts by title, content, or author
- **💬 Comments**: Add, view, and manage comments on blog posts
- **📱 Responsive Design**: Beautiful, mobile-friendly interface with CSS Grid and Flexbox
- **⚡ Fast Performance**: Built with Vite for rapid development and optimized production builds
- **🧭 Client-side Routing**: Smooth navigation between pages using React Router

## Project Structure

```
src/
├── components/              # Reusable React components
│   ├── BlogPostList.jsx     # Displays list of blog posts
│   ├── BlogPostItem.jsx     # Individual blog post card
│   ├── BlogPostDetail.jsx   # Full blog post view with comments
│   ├── BlogPostForm/        # Form for creating/editing posts
│   │   └── BlogPostForm.jsx
│   └── Comment/             # Comment-related components
│       ├── Comment.jsx
│       ├── CommentForm.jsx
│       ├── CommentList.jsx
│       └── useComments.js   # Custom hook for comment management
├── pages/                   # Page-level components
│   ├── CreatePost.jsx       # New post creation page
│   └── EditPost.jsx         # Post editing page
├── App.jsx                  # Main application component with routing
├── SearchBar.jsx            # Search functionality component
├── main.jsx                 # Application entry point
└── styles                   # CSS modules for styling
```

## Tech Stack

- **React** (v19.1.0) - UI library
- **React Router** (v7.6.0) - Client-side routing
- **Vite** (v6.3.5) - Build tool and dev server
- **CSS Modules** - Component-scoped styling
- **ESLint** - Code quality linting

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-flexi
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with hot module reloading:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Build the application for production:

```bash
npm run build
```

The optimized build will be generated in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 🧩 Development Challenges

This project was developed through a series of structured challenges, each focusing on a core concept of modern React application development.

---

## 🚀 Challenge 1 – Project Setup & Core React Basics
- Initialized the project using **Vite + React** for fast builds and hot module reloading.
- Organized the initial folder structure for scalability and maintainability.
- Applied fundamental React concepts such as **JSX**, **components**, and **props**.
- Established a solid foundation for all future features.

---

## 📖 Challenge 2 – Blog Post Viewing
- Implemented the `BlogPostDetail` component to display complete blog post content.
- Rendered post title, author name, publication date, and formatted content.
- Handled missing or invalid post data gracefully.
- Ensured responsive layouts for mobile, tablet, and desktop screens.

---

## ✍️ Challenge 3 – Blog Post Creation & Editing
- Built a reusable `BlogPostForm` component for creating and editing posts.
- Added validation for required fields such as title, content, and author.
- Prefilled form fields when editing an existing post.
- Designed responsive layouts with single-column mobile views and multi-column desktop layouts.

---

## 🗑️ Challenge 4 – Blog Post Deletion
- Implemented secure blog post deletion functionality.
- Displayed a confirmation dialog to prevent accidental deletions.
- Added keyboard navigation and accessibility-friendly focus handling.
- Ensured the confirmation dialog adapts to all screen sizes.

---

## 🧭 Challenge 5 – Responsive Navigation & Layout
- Created a responsive navigation bar with branding and navigation links.
- Implemented a hamburger menu for smaller screens.
- Introduced a reusable layout structure with header, main content, and footer.
- Focused on smooth transitions, accessibility, and responsive design.

---

## 💬 Challenge 6 – Comment System
- Built a complete comment system for individual blog posts.
- Displayed commenter name, timestamp, comment text, and optional avatars.
- Enabled dynamic comment submission without page reloads.
- Ensured accessible form controls and responsive comment layouts.

---

## 🔍 Challenge 7 – Search Functionality
- Implemented a search feature to filter blog posts by title, content, or author.
- Supported case-insensitive and real-time search results.
- Highlighted matching keywords within search results.
- Delivered a responsive and accessible search experience.


## Future Enhancements

- Backend API integration for persistent data storage
- User authentication and authorization
- Post categories and tags
- Comment filtering and sorting
- Dark mode support
- Post scheduling
- Analytics and insights

## Development Tips

- Use React DevTools browser extension for debugging
- Check the Console tab in browser DevTools for any issues
- CSS modules are scoped per component, so feel free to use common class names
- The SearchBar component uses URL search params for filtering

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

---

Built with ❤️ using React and Vite
