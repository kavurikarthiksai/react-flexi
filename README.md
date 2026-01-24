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

### State Management
The app uses React hooks (useState, useEffect, useMemo) for state management. Local state is used for blog posts and comments.

### Routing
React Router enables navigation between:
- Home page (blog post list)
- Post detail page (`/posts/:id`)
- Create post page (`/create`)
- Edit post page (`/posts/:id/edit`)

### Styling
CSS Modules provide scoped styling to prevent naming conflicts and ensure component encapsulation.

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
