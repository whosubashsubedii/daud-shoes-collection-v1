document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery-grid');
    const imagePaths = [
      'src/images/portfolio/rashik-assets/gallery1.jpg',
      'src/images/portfolio/rashik-assets/gallery2.jpg',
      'src/images/portfolio/rashik-assets/gallery3.jpg',
      'src/images/portfolio/rashik-assets/gallery4.jpg',
      'src/images/portfolio/rashik-assets/gallery5.jpg',
      'src/images/portfolio/rashik-assets/gallery6.jpg',
      'src/images/portfolio/rashik-assets/gallery7.jpg',
      'src/images/portfolio/rashik-assets/gallery8.jpg',
      'src/images/portfolio/rashik-assets/gallery9.jpg',
      // Add more as needed
    ];
  
    imagePaths.forEach(path => {
      const img = document.createElement('img');
      img.src = path;
      img.alt = 'Portfolio Image';
      gallery.appendChild(img);
    });
  
    // Simple contact form feedback
    document.getElementById('contact-form').addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thanks for reaching out! I will get back to you soon.');
      e.target.reset();
    });
  });
  