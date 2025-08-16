# Responsive Link Tree

A beautiful, responsive link tree page with Instagram buttons and contact functionality.

## Features

- ✨ **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🎨 **Modern UI** - Beautiful gradients and smooth animations
- 📱 **Instagram Integration** - Two Instagram buttons with different styling
- 📱 **WhatsApp Button** - WhatsApp contact with copy-to-clipboard functionality
- ⌨️ **Keyboard Navigation** - Navigate with arrow keys
- 🎯 **Interactive Elements** - Hover effects and click animations
- 🌟 **Accessibility** - Screen reader friendly and keyboard accessible

## Customization

### 1. Update Profile Information

Edit `index.html` and replace the placeholder content:

```html
<!-- Update username -->
<h1 class="name">@yourusername</h1>

<!-- Update bio -->
<p class="bio">Welcome to my link tree! Connect with me on social media.</p>

<!-- Update profile image -->
<img src="your-profile-image.jpg" alt="Profile Picture" id="profile-pic" />
```

### 2. Update Instagram Links

Replace the Instagram URLs with your actual Instagram profiles:

```html
<!-- First Instagram account -->
<a
  href="https://instagram.com/yourusername"
  class="link-button instagram"
  target="_blank"
>
  <i class="fab fa-instagram"></i>
  <span>Instagram</span>
</a>

<!-- Second Instagram account (business/personal) -->
<a
  href="https://instagram.com/yourusername2"
  class="link-button instagram-secondary"
  target="_blank"
>
  <i class="fab fa-instagram"></i>
  <span>Instagram Business</span>
</a>
```

### 3. Update WhatsApp Number

Replace the WhatsApp number in the contact button:

```html
<a href="https://wa.me/1234567890" class="link-button whatsapp" target="_blank">
  <i class="fab fa-whatsapp"></i>
  <span>WhatsApp</span>
</a>
```

**Note**: Replace `1234567890` with your actual WhatsApp number (include country code without + or spaces).

### 4. Customize Colors

Edit `styles.css` to change the color scheme:

```css
/* Main background gradient */
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Instagram button colors */
.instagram {
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
}

/* WhatsApp button colors */
.whatsapp {
  background: linear-gradient(45deg, #25d366 0%, #128c7e 100%);
}
```

## Usage

1. **Local Development**: Open `index.html` in your web browser
2. **Deployment**: Upload all files to your web hosting service
3. **Custom Domain**: Point your domain to the hosting location

## File Structure

```
linktreectrlplay/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── README.md           # This file
└── image/              # Image directory (for your profile picture)
```

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Features in Detail

### Responsive Design

- Adapts to different screen sizes
- Optimized for mobile devices
- Touch-friendly interface

### Interactive Elements

- Hover effects on buttons
- Click animations
- Profile image interaction
- Parallax effect on mouse movement

### Accessibility

- Keyboard navigation (arrow keys)
- Screen reader compatible
- Focus indicators
- Semantic HTML structure

### Performance

- Optimized CSS animations
- Efficient JavaScript
- Fast loading times

## Customization Tips

1. **Add More Links**: Copy the button structure and add new CSS classes for styling
2. **Change Icons**: Use Font Awesome icons by changing the `fa-*` classes
3. **Add Analytics**: Integrate Google Analytics in the JavaScript file
4. **Custom Fonts**: Import Google Fonts and update the font-family in CSS

## License

This project is open source and available under the MIT License.

---

**Happy customizing!** 🚀
