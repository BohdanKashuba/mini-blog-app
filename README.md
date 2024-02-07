# Mini Blog Application

## Project Overview

This project is a minimalist blog application developed using React and NextJS. The goal is to showcase front-end
development skills, UI/UX design intuition, and proficiency in project setup and version control using GitHub.

## Table of Contents

- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Project Structure](#project-structure)
- [Blog Features](#blog-features)
- [Color Scheme](#color-scheme)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mini-blog-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd mini-blog-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Project Structure

The project follows the following directory structure:

   ```plaintext
   src/
      _moks/
      assets/
      components/
      contexts/
      layouts/
      pages/
      routes/
      sections/
      utils/
   ```

- _moks: Mock data for development and testing.
- assets: Project assets such as images, fonts, etc.
- components: Reusable components, often dumb/presentational.
- contexts: React context providers for global state management.
- layouts: Layout components defining the overall structure of pages.
- pages: Application pages, each file corresponds to a route.
- routes: Configuration for routing in the application.
- sections: Components with more complex logic.
- utils: Utility functions and helpers.

## Blog Features

1. **Homepage:**
    - Display a list of blog post titles.
    - Clicking on a title navigates to the post's detail page.

2. **Post Detail Page:**
    - Show the post title, publication date, and content.

3. **Create Post Functionality:**
    - Include a simple form to add a new blog post.
    - Form directly manipulates the application's state without needing a backend or database.

4. **Responsive Design:**
    - Ensure a responsive and user-friendly design for both desktop and mobile devices.

## Color Scheme

```css
:root {
  --background-color: #eceff1;
  --text-color: #263238;
  --text-light-color: #cfd8dc;
  --accent-color: #546e7a;
  --primary-color: #607d8b;
  --secondary-color: #78909c;
  --error-color: #e57373;
  --warning-color: #ffb74d;
  --info-color: #4fc3f7;
}
