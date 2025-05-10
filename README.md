# 3D Portfolio - Cybersecurity Expert & MERN Developer

A modern, responsive 3D portfolio website built with HTML, CSS, and JavaScript, featuring GSAP animations and Three.js for 3D effects. Includes a Node.js backend for the contact form.

## Features

- Interactive 3D background with Three.js
- Smooth animations with GSAP
- Dark theme with neon accents
- Responsive design for all devices
- Custom cursor
- Project filtering
- Skills visualization
- Timeline for experience and education
- Functional contact form with email notifications
- Loading animation

## Getting Started

### Local Development

1. Clone or download this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_RECIPIENT=your-email@gmail.com
   ```
   Note: For Gmail, you'll need to use an App Password. See [Google's documentation](https://support.google.com/accounts/answer/185833) for instructions.

4. Start the development server:
   ```
   npm run dev
   ```
5. Open `http://localhost:3000` in your browser to view the portfolio

## Deployment

### Deploying to GitHub Pages

1. Create a new GitHub repository
2. Initialize Git in your project folder (if not already done):
   ```
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Add your GitHub repository as remote:
   ```
   git remote add origin https://github.com/yourusername/your-repo-name.git
   ```
4. Push to GitHub:
   ```
   git push -u origin main
   ```
5. In your GitHub repository, go to Settings > Pages
6. Select the branch you want to deploy (usually `main`) and save
7. Your site will be published at `https://yourusername.github.io/your-repo-name/`

### Deploying to Vercel

1. Create a Vercel account if you don't have one: [Vercel](https://vercel.com/signup)
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel:
   ```
   vercel login
   ```
4. Deploy your project:
   ```
   vercel
   ```
5. Follow the prompts to complete the deployment
6. For production deployment:
   ```
   vercel --prod
   ```

Note: Make sure to add your environment variables in the Vercel dashboard under your project settings.

## Customization

### Personal Information

Edit the following sections in `index.html` to add your personal information:

- About section: Update your name, email, location, and bio
- Skills section: Adjust skill levels and add/remove skills as needed
- Projects section: Add your own projects with descriptions and links
- Resume section: Update your education, experience, and certifications
- Contact section: Add your contact information

### Images

Replace the placeholder images in the `img` folder with your own:

- `profile.jpg`: Your profile picture (recommended size: 400px × 500px)
- `project1.jpg` to `project6.jpg`: Project screenshots (recommended size: 800px × 450px)
- Add any additional images you need

### Colors

To change the color scheme, edit the CSS variables in the `:root` selector in `css/style.css`:

```css
:root {
    /* Colors */
    --bg-primary: #0a0a0a;
    --bg-secondary: #121212;
    --text-primary: #f0f0f0;
    --text-secondary: #aaaaaa;
    --neon-primary: #00ffff;
    --neon-secondary: #ff00ff;
    --neon-tertiary: #00ff00;
    --accent-color: #0077ff;
    
    /* Other variables... */
}
```

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript
- Three.js (for 3D effects)
- GSAP (for animations)
- Font Awesome (for icons)

### Backend
- Node.js
- Express
- Nodemailer (for sending emails)
- Cors (for cross-origin requests)
- Dotenv (for environment variables)

## Browser Support

This portfolio works in all modern browsers:

- Chrome
- Firefox
- Safari
- Edge

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Fonts: [Google Fonts](https://fonts.google.com/)
- Icons: [Font Awesome](https://fontawesome.com/)
- 3D Library: [Three.js](https://threejs.org/)
- Animation Library: [GSAP](https://greensock.com/gsap/)