// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }),
)

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
    navbar.style.backdropFilter = "blur(10px)"
  } else {
    navbar.style.background = "#fff"
    navbar.style.backdropFilter = "none"
  }
})

// Form validation and enhancement
const contactForm = document.querySelector(".contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const message = document.getElementById("message").value.trim()

    if (!name || !email || !message) {
      e.preventDefault()
      alert("Please fill in all required fields.")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      e.preventDefault()
      alert("Please enter a valid email address.")
      return
    }

    // If validation passes, show confirmation
    setTimeout(() => {
      alert(
        "Thank you for your message! We will get back to you soon. For urgent matters, please call or WhatsApp us directly.",
      )
    }, 100)
  })
}

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(".service-card, .feature, .value-card, .timeline-item, .step")

  animateElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// WhatsApp button click tracking (optional analytics)
document.querySelectorAll(".whatsapp-btn, .whatsapp-float").forEach((btn) => {
  btn.addEventListener("click", () => {
    // You can add analytics tracking here if needed
    console.log("WhatsApp button clicked")
  })
})

// Phone number click tracking
document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
  link.addEventListener("click", () => {
    console.log("Phone number clicked:", link.href)
  })
})

// Add loading state to form submission
if (contactForm) {
  const submitBtn = contactForm.querySelector(".form-submit")
  const originalText = submitBtn.innerHTML

  contactForm.addEventListener("submit", () => {
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
    submitBtn.disabled = true

    // Reset after a delay (since we're using mailto)
    setTimeout(() => {
      submitBtn.innerHTML = originalText
      submitBtn.disabled = false
    }, 3000)
  })
}

// Add current year to footer
document.addEventListener("DOMContentLoaded", () => {
  const currentYear = new Date().getFullYear()
  const footerText = document.querySelector(".footer-bottom p")
  if (footerText) {
    footerText.innerHTML = footerText.innerHTML.replace("2024", currentYear)
  }
})

// Emergency contact highlight
document.querySelectorAll(".btn-emergency").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.animation = "pulse 1s infinite"
  })

  btn.addEventListener("mouseleave", () => {
    btn.style.animation = "none"
  })
})
  function makeCall( phoneNumber )
                            {
                                // Ensure it's a valid tel: link
                                window.location.href = 'tel:' + phoneNumber;
                            }
let currentIndex = 0;
const slider = document.querySelector('.slider');
const totalImages = slider.children.length;

function slideImages() {
    currentIndex = (currentIndex + 1) % totalImages;
    slider.style.transform = `translateX(-${currentIndex * 400}px)`;
}

// Auto-slide every 3 seconds
setInterval(slideImages, 3000);