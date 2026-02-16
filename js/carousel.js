const blogPosts = [
  {
    id: 1,
    title: "The Science Behind Grip Strength in Armwrestling",
    excerpt: "Grip strength is the foundation of armwrestling dominance. Learn how finger flexors, wrist control, and forearm conditioning directly impact your table performance.",
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=600",
    level: "All Levels",
    focus: "Grip Strength • Wrist Control • Forearm Power"
  },
  {
    id: 2,
    title: "Top 5 Armwrestling Techniques Every Athlete Must Master",
    excerpt: "From Top Roll to Hook and Press, mastering proper technique dramatically improves leverage, control, and match-winning ability.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600",
    level: "Intermediate to Advanced",
    focus: "Top Roll • Hook • Press Technique"
  },
  {
    id: 3,
    title: "How Professional Armwrestling Tables Improve Training",
    excerpt: "Competition-standard tables improve positioning, safety, and realistic power application during practice sessions.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600",
    level: "Serious Athletes",
    focus: "Equipment • Table Positioning • Match Simulation"
  },
  {
    id: 4,
    title: "Wrist Strength: The Hidden Weapon in Armwrestling",
    excerpt: "A powerful wrist can break your opponent’s structure early. Discover elite wrist strengthening drills and tools.",
    image: "https://images.unsplash.com/photo-1594737625785-cb11c38e0d58?q=80&w=600",
    level: "All Levels",
    focus: "Wrist Stability • Containment • Control"
  },
  {
    id: 5,
    title: "Beginner to Pro: Structuring Your Armwrestling Training",
    excerpt: "Structured progression is the key to long-term strength and tournament success. Learn how to balance gym work and table practice.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600",
    level: "Beginner to Advanced",
    focus: "Strength • Technique • Recovery"
  },
  {
    id: 6,
    title: "Choosing Authentic Armwrestling Equipment",
    excerpt: "Identify genuine competition-grade equipment and avoid copied products that compromise safety and performance.",
    image: "https://images.unsplash.com/photo-1598268034815-7d1e9b8f3a76?q=80&w=600",
    level: "Buyer's Guide",
    focus: "Authenticity • Safety • Performance"
  },
  {
    id: 7,
    title: "Common Armwrestling Injuries & How to Prevent Them",
    excerpt: "Learn proper warm-up techniques and safe training practices to reduce injury risk and extend your competitive career.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600",
    level: "All Levels",
    focus: "Injury Prevention • Warm-Up • Safe Training"
  },
  {
    id: 8,
    title: "The Role of Equipment in Competitive Success",
    excerpt: "High-quality tables, handles, and wrist tools directly influence match outcomes and athlete development.",
    image: "https://images.unsplash.com/photo-1546484959-fc1b0a86f5c5?q=80&w=600",
    level: "Competitive Athletes",
    focus: "Pro Equipment • Precision • Match Readiness"
  }
];

// const testimonials = [
//   {
//     id: 1,
//     name: "Rohit Sharma",
//     position: "State-Level Armwrestler",
//     image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
//     content: "The quality of SG ARMWRESTLING tables is unmatched. The stability and finishing give me full confidence during intense matches. Truly competition-grade equipment.",
//     rating: 5
//   },
//   {
//     id: 2,
//     name: "Vikram Singh",
//     position: "Gym Owner",
//     image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
//     content: "We installed SG ARMWRESTLING tables in our gym and the response from athletes has been phenomenal. Durable, strong, and built for serious performance.",
//     rating: 5
//   },
//   {
//     id: 3,
//     name: "Aditya Mehra",
//     position: "National Competitor",
//     image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
//     content: "Their grip handles and wrist tools helped me improve my hand control significantly. The equipment feels solid and professional.",
//     rating: 5
//   },
//   {
//     id: 4,
//     name: "Sandeep Verma",
//     position: "Armwrestling Coach",
//     image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
//     content: "As a coach, I only recommend reliable brands. SG ARMWRESTLING delivers authentic and high-quality products that my athletes trust.",
//     rating: 5
//   },
//   {
//     id: 5,
//     name: "Arjun Patel",
//     position: "Tournament Organizer",
//     image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
//     content: "We used SG ARMWRESTLING tables for our regional championship and the build quality impressed everyone. Professional and tournament-ready.",
//     rating: 5
//   },
//   {
//     id: 6,
//     name: "Karan Yadav",
//     position: "Strength Athlete",
//     image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
//     content: "Finally a brand that understands what real armwrestlers need. Heavy-duty, stable, and built for power training.",
//     rating: 5
//   }
// ];



// Carousel Class
class Carousel {
  constructor(containerId, items, options = {}) {
    this.container = document.getElementById(containerId);
    this.items = items;
    this.options = {
      autoPlay: options.autoPlay || false,
      autoPlayInterval: options.autoPlayInterval || 5000,
      isBlog: options.isBlog || true,
      ...options
    };
    
    this.currentIndex = 0;
    this.slidesPerView = 1;
    this.autoPlayTimer = null;
    
    this.init();
  }
  
  init() {
    this.createCarouselStructure();
    this.updateSlidesPerView();
    this.createCarouselItems();
    this.createDots();
    this.updateCarousel();
    this.attachEventListeners();
    
    if (this.options.autoPlay) {
      this.startAutoPlay();
    }
  }
  
  createCarouselStructure() {
    this.track = document.createElement('div');
    this.track.className = 'carousel-track';
    this.container.appendChild(this.track);
    
    // Create navigation buttons
    this.prevBtn = document.createElement('button');
    this.prevBtn.className = 'carousel-btn prev';
    this.prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    this.prevBtn.setAttribute('aria-label', 'Previous items');
    this.container.appendChild(this.prevBtn);
    
    this.nextBtn = document.createElement('button');
    this.nextBtn.className = 'carousel-btn next';
    this.nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    this.nextBtn.setAttribute('aria-label', 'Next items');
    this.container.appendChild(this.nextBtn);
    
    // Create dots container
    this.dotsContainer = document.createElement('div');
    this.dotsContainer.className = 'carousel-dots';
    this.container.appendChild(this.dotsContainer);
  }
  
  updateSlidesPerView() {
    if (window.innerWidth >= 1024) {
      this.slidesPerView = 3;
    } else if (window.innerWidth >= 768) {
      this.slidesPerView = 2;
    } else {
      this.slidesPerView = 1;
    }
  }
  
  createCarouselItems() {
    this.track.innerHTML = '';
    
    this.items.forEach(item => {
      const slide = document.createElement('div');
      slide.className = 'carousel-slide';
      
      if (this.options.isBlog) {
        slide.innerHTML = this.createBlogCard(item);
      } else {
        slide.innerHTML = this.createTestimonialCard(item);
      }
      
      this.track.appendChild(slide);
    });
  }
  
 createBlogCard(item) {
  return `
    <article class="blog-card">
      <img src="${item.image}" alt="${item.title}" loading="lazy" />
      <div class="blog-content">
        <h3>${item.title}</h3>
        <p>${item.excerpt}</p>

        <div class="mt-4">
          <span class="inline-block bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mr-2">
            ${item.level}
          </span>
          <p class="text-sm text-gray-500 mt-2">
            ${item.focus}
          </p>
        </div>
      </div>
    </article>
  `;
}

  
  createTestimonialCard(item) {
    const stars = Array(item.rating).fill('<i class="fas fa-star text-yellow-400" aria-hidden="true"></i>').join('');
    
    return `
      <article class="testimonial-card">
        <div class="testimonial-content">
          <div class="stars" aria-label="${item.rating} out of 5 stars">
            ${stars}
          </div>
          <p>"${item.content}"</p>
          <div class="testimonial-author">
            <img src="${item.image}" alt="${item.name}" loading="lazy" />
            <div class="testimonial-author-info">
              <h4>${item.name}</h4>
              <p>${item.position}</p>
            </div>
          </div>
        </div>
      </article>
    `;
  }
  
  createDots() {
    this.dotsContainer.innerHTML = '';
    const totalSlides = Math.ceil(this.items.length / this.slidesPerView);
    
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot';
      if (i === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => this.goToSlide(i));
      this.dotsContainer.appendChild(dot);
    }
  }
  
  updateCarousel() {
    const slideWidth = 100 / this.slidesPerView;
    this.track.style.transform = `translateX(-${this.currentIndex * slideWidth}%)`;
    
    // Update active dot
    const dots = this.dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentIndex);
    });
    
    // Update button states
    this.prevBtn.disabled = this.currentIndex === 0;
    this.nextBtn.disabled = this.currentIndex >= Math.ceil(this.items.length / this.slidesPerView) - 1;
  }
  
  goToSlide(index) {
    const maxIndex = Math.ceil(this.items.length / this.slidesPerView) - 1;
    this.currentIndex = Math.max(0, Math.min(index, maxIndex));
    this.updateCarousel();
    
    // Reset autoplay if active
    if (this.options.autoPlay) {
      this.resetAutoPlay();
    }
  }
  
  nextSlide() {
    const maxIndex = Math.ceil(this.items.length / this.slidesPerView) - 1;
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
      this.updateCarousel();
    } else if (this.options.autoPlay) {
      // Loop back to start
      this.currentIndex = 0;
      this.updateCarousel();
    }
  }
  
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCarousel();
    } else if (this.options.autoPlay) {
      // Loop to end
      this.currentIndex = Math.ceil(this.items.length / this.slidesPerView) - 1;
      this.updateCarousel();
    }
  }
  
  attachEventListeners() {
    this.prevBtn.addEventListener('click', () => {
      this.prevSlide();
      if (this.options.autoPlay) {
        this.resetAutoPlay();
      }
    });
    
    this.nextBtn.addEventListener('click', () => {
      this.nextSlide();
      if (this.options.autoPlay) {
        this.resetAutoPlay();
      }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
      this.updateSlidesPerView();
      this.createDots();
      this.updateCarousel();
    });
    
    // Keyboard navigation
    this.container.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.prevSlide();
      } else if (e.key === 'ArrowRight') {
        this.nextSlide();
      }
    });
    
    // Pause autoplay on hover
    if (this.options.autoPlay) {
      this.container.addEventListener('mouseenter', () => {
        this.pauseAutoPlay();
      });
      
      this.container.addEventListener('mouseleave', () => {
        this.startAutoPlay();
      });
    }
  }
  
  startAutoPlay() {
    if (this.options.autoPlay && !this.autoPlayTimer) {
      this.autoPlayTimer = setInterval(() => {
        this.nextSlide();
      }, this.options.autoPlayInterval);
    }
  }
  
  pauseAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }
  
  resetAutoPlay() {
    this.pauseAutoPlay();
    this.startAutoPlay();
  }
  
  destroy() {
    this.pauseAutoPlay();
    
    // Remove event listeners
    this.prevBtn.removeEventListener('click', this.prevSlide);
    this.nextBtn.removeEventListener('click', this.nextSlide);
    
    // Clean up DOM
    this.container.innerHTML = '';
  }
}

// Initialize carousels when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Blog Carousel
  const blogCarousel = new Carousel('blog-carousel', blogPosts, {
    autoPlay: true,
    autoPlayInterval: 6000,
    isBlog: true
  });
  
  // Testimonial Carousel
  const testimonialCarousel = new Carousel('testimonial-carousel', testimonials, {
    autoPlay: true,
    autoPlayInterval: 8000,
    isBlog: false
  });
  
  // Make carousels available globally for debugging
  window.blogCarousel = blogCarousel;
  window.testimonialCarousel = testimonialCarousel;
});

// Export for module use (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Carousel, blogPosts, testimonials };
}