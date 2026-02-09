# Anna Mariya Thomas - Portfolio Website

A modern, responsive portfolio website showcasing cybersecurity expertise, skills, certificates, and services.

## 📁 Project Structure

```
annamariya.portfolio/
├── index.html      # Main HTML file
├── styles.css      # CSS styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## ✨ Features

### 1. **Responsive Design**
   - Mobile-friendly layout
   - Works on all devices (desktop, tablet, mobile)
   - Hamburger menu for mobile navigation

### 2. **Sections Included**

   - **Navigation Bar** - Sticky navigation with smooth scrolling
   - **Hero Section** - Eye-catching introduction with call-to-action buttons
   - **About Me** - Professional bio and highlights
   - **Skills** - Technical skills organized by categories
   - **Certificates** - Educational achievements and certifications
   - **Services** - Professional services offered
   - **Contact** - Contact form and social media links
   - **Footer** - Copyright and quick information

### 3. **Interactive Elements**
   - Smooth scrolling navigation
   - Hover effects on cards and buttons
   - Mobile-responsive hamburger menu
   - Contact form with validation
   - Active link highlighting
   - Scroll animations

### 4. **Modern Design**
   - Gradient backgrounds
   - Professional color scheme
   - Card-based layout
   - Font Awesome icons
   - Smooth transitions and animations

## 🎨 Customization Guide

### 1. **Update Contact Information**
   Edit `index.html` and replace:
   - Email: `your.email@example.com`
   - Phone: `+91 98765 43210`

### 2. **Update Skills**
   In the Skills section, modify the skill tags under each category:
   ```html
   <span class="skill-tag">Your Skill Name</span>
   ```

### 3. **Update Certificates**
   Add or modify certificate cards:
   ```html
   <div class="cert-card">
       <div class="cert-icon">
           <i class="fas fa-certificate"></i>
       </div>
       <h3>Certificate Name</h3>
       <p class="cert-issuer">Issued by: Organization</p>
       <p class="cert-date">Year</p>
       <span class="cert-badge">Verified</span>
   </div>
   ```

### 4. **Update Services**
   Modify service descriptions and features in the Services section.

### 5. **Change Colors**
   Edit CSS variables at the top of `styles.css`:
   ```css
   --primary-color: #2563eb;
   --secondary-color: #1e40af;
   --accent-color: #f59e0b;
   ```

### 6. **Update Social Media Links**
   In the Contact section, update social media URLs:
   ```html
   <a href="your-linkedin-url" target="_blank">
   <a href="your-instagram-url" target="_blank">
   ```

## 📱 Sections Details

### About Section
- Professional introduction
- Interest areas (speaking, research, activities)
- Highlight cards with education, research, and speaking icons

### Skills Section
- **Cybersecurity**: Network security, ethical hacking, penetration testing, etc.
- **Programming**: Python, C++, Java, JavaScript, SQL
- **Tools & Platforms**: Wireshark, Metasploit, Burp Suite, Linux
- **Soft Skills**: Problem-solving, communication, leadership

### Certificates Section
- Cybersecurity Fundamentals
- Network Security Essentials
- Ethical Hacking Basics
- Web Application Security
- Bug Bounty Participant
- Research Contributor

### Services Section
- Security Consultation
- Penetration Testing
- Security Training
- Research & Analysis
- Security Testing
- Public Speaking

## 🔧 How to Use

1. **Open in Browser**: Simply open `index.html` in any modern web browser
2. **Local Server** (Optional): For better performance, serve using a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   ```
   Then visit: `http://localhost:8000`

3. **Deploy Online**: Upload all files to your hosting platform (GitHub Pages, Netlify, Vercel, etc.)

## 📧 Contact Form

The contact form includes:
- Name validation
- Email validation
- Subject field
- Message textarea
- Success/error message display
- Auto-clearing after submission

**Note**: Currently, the form displays a success message locally. To actually send emails, you'll need a backend service (Node.js, PHP, etc.) or use a service like Formspree, EmailJS, or Netlify Forms.

## 🌐 Deploy to GitHub Pages

1. Create a GitHub repository named `annamariya.portfolio`
2. Push all files to the repository
3. Go to Settings → Pages
4. Select `main` branch as source
5. Your site will be live at: `https://username.github.io/annamariya.portfolio`

## 📊 SEO Optimization

The site includes:
- Meta tags for viewport and charset
- Descriptive title and structure
- Semantic HTML elements
- Fast loading with minimal dependencies
- Mobile-responsive design

## 🎯 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 Social Media Links

Currently configured links:
- **LinkedIn**: https://www.linkedin.com/in/anna-thomas-b3b137327
- **Instagram**: https://www.instagram.com/an.mariahh/

You can add more social links in the Contact section.

## 🚀 Future Enhancements

Consider adding:
- Blog section with articles
- Project portfolio with case studies
- Testimonials from colleagues
- Speaking engagements section
- Publications and research papers
- Newsletter signup
- Dark mode toggle
- Multi-language support

## 📄 License

This portfolio template is open for personal use.

## 🤝 Support

For customization assistance, refer to the code comments throughout the files.

---

**Created**: February 2025
**Last Updated**: February 2025
