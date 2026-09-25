# Personal Portfolio

A responsive full-stack personal portfolio website built to showcase my projects, technical skills, and software development journey.

## Features

- Responsive design for desktop, tablet, and mobile devices
- Responsive side navigation menu
- Dynamic project showcase
- Project data stored and retrieved from Supabase
- Contact form with server-side validation
- Email delivery using Resend
- Full-stack architecture using Node.js and Express.js

## Tech Stack

### Frontend

- HTML
- CSS
- JavaScript

### Backend

- Node.js
- Express.js

### Database & Services

- Supabase
- Resend
- Render

### Tools

- Git
- GitHub

## Getting Started

### Prerequisites

- Node.js
- A Supabase account with a project
- A Resend account

### Installation

Clone the repository:

```bash
git clone <your-repository-url>

Go to the project directory:

    cd MyPortfolio

Install the dependencies listed in `package.json`:

    npm install

### Environment Variables

The application uses environment variables for Supabase and Resend credentials.

Create a `.env` file in the project root:

    SUPABASE_URL=your_supabase_url
    SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
    RESEND_API_KEY=your_resend_api_key

Add your own Supabase and Resend values to the `.env` file.

Do not commit `.env` to GitHub.

### Run Locally

Start the server:

    npm start

Open:

    http://localhost:8000

## Database

Supabase stores the project information displayed on the Projects page, including:

- Project title
- Description
- GitHub link
- Demo link

## Contact Form

The contact form sends submitted messages to the Express.js backend. The backend validates the form data and uses Resend to send the email.

## Deployment

The website is deployed on Render.

Environment variables are added to the Render environment instead of being stored in the repository.

## Author

**Ginu George**

Computer Science Student focused on software development.