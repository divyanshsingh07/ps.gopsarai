// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const body = document.body;
const modal = document.getElementById('teacherModal');
const closeModal = document.querySelector('.close-modal');
const teacherCards = document.querySelectorAll('.teacher-card');

// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or use system preference
const currentTheme = localStorage.getItem('theme') || 
    (prefersDarkScheme.matches ? 'dark' : 'light');

// Apply the theme
document.documentElement.setAttribute('data-theme', currentTheme);

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' 
        ? 'light' 
        : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Listen for system theme changes
prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
    }
});

// Parallax Scrolling Effect
function handleParallax() {
    const sections = document.querySelectorAll('.hero, .about, .teachers, .contact');
    
    sections.forEach(section => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        if (section.classList.contains('hero')) {
            section.style.backgroundPositionY = rate + 'px';
        }
    });
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add animation classes to elements
document.querySelectorAll('.about-content, .teachers-grid, .contact-content, .feature, .teacher-card').forEach(element => {
    element.classList.add('animate-on-scroll');
    observer.observe(element);
});

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    body.classList.toggle('menu-open');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        body.classList.remove('menu-open');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        body.classList.remove('menu-open');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

function handleHeaderScroll() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll Down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll Up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
}

// Parallax scroll event listener
window.addEventListener('scroll', () => {
    handleParallax();
    handleHeaderScroll();
});

// Initial call to set initial positions
handleParallax();

// Teacher data
const teacherData = {
    'principal': {
        id: 'principal',
        name: 'श्री धर्मेंद्र पांडेय',
        title: 'प्रधानाचार्य',
        education: 'एम.ए. (हिंदी), बी.एड., पीएच.डी.',
        experience: '25 वर्ष',
        subjects: 'हिंदी साहित्य, शैक्षिक प्रबंधन',
        quote: 'शिक्षा का उद्देश्य केवल ज्ञान देना नहीं, बल्कि चरित्र निर्माण करना है।',
        bio: 'श्री धर्मेंद्र पांडेय ने 25 वर्षों से अधिक का शैक्षिक अनुभव प्राप्त किया है। उन्होंने कई प्रतिष्ठित विद्यालयों में शिक्षण कार्य किया है और शैक्षिक प्रबंधन में विशेषज्ञता प्राप्त की है।',
        contact: {
            phone: '+91 98765 43210',
            email: 'principal@school.com'
        }
    },
    'teacher1': {
        id: 'teacher1',
        name: 'श्री दीपक मिश्रा',
        title: 'वरिष्ठ शिक्षक',
        education: 'एम.एससी. (गणित), बी.एड.',
        experience: '15 वर्ष',
        subjects: 'गणित',
        quote: 'गणित एक भाषा है जो हमें ब्रह्मांड की समझ देती है।',
        bio: 'श्री दीपक मिश्रा गणित के क्षेत्र में 15 वर्षों का अनुभव रखते हैं। उनकी शिक्षण पद्धति छात्रों को गणित के प्रति रुचि जगाने पर केंद्रित है। वे नवीन शिक्षण तकनीकों का उपयोग करके जटिल अवधारणाओं को सरल बनाते हैं।',
        contact: {
            phone: '+91 98765 43211',
            email: 'deepak@school.com'
        }
    },
    'teacher2': {
        id: 'teacher2',
        name: 'श्री हेमंत पांडेय',
        title: 'वरिष्ठ शिक्षक',
        education: 'एम.ए. (हिंदी), बी.एड.',
        experience: '12 वर्ष',
        subjects: 'हिंदी',
        quote: 'साहित्य मनुष्य की आत्मा का दर्पण है।',
        bio: 'श्री हेमंत पांडेय हिंदी साहित्य के विशेषज्ञ हैं। उन्होंने 12 वर्षों तक हिंदी शिक्षण में अपना योगदान दिया है। वे छात्रों को साहित्य के माध्यम से जीवन मूल्यों से परिचित कराते हैं।',
        contact: {
            phone: '+91 98765 43212',
            email: 'hemant@school.com'
        }
    },
    'teacher3': {
        id: 'teacher3',
        name: 'श्रीमती किरण सिंह',
        title: 'वरिष्ठ शिक्षक',
        education: 'एम.एससी. (भौतिक विज्ञान), बी.एड.',
        experience: '10 वर्ष',
        subjects: 'विज्ञान',
        quote: 'विज्ञान जिज्ञासा और खोज की यात्रा है।',
        bio: 'श्रीमती किरण सिंह विज्ञान शिक्षण में 10 वर्षों का अनुभव रखती हैं। वे प्रायोगिक शिक्षण पर विशेष ध्यान देती हैं और छात्रों को वैज्ञानिक सोच विकसित करने में मदद करती हैं।',
        contact: {
            phone: '+91 98765 43213',
            email: 'kiran@school.com'
        }
    },
    'teacher4': {
        id: 'teacher4',
        name: 'श्री रामकेवल',
        title: 'वरिष्ठ शिक्षक',
        education: 'एम.ए. (अंग्रेजी), बी.एड.',
        experience: '8 वर्ष',
        subjects: 'अंग्रेजी',
        quote: 'भाषा संवाद का माध्यम नहीं, बल्कि विचारों का सेतु है।',
        bio: 'श्री रामकेवल अंग्रेजी भाषा शिक्षण में 8 वर्षों का अनुभव रखते हैं। वे संवाद कौशल और भाषाई दक्षता पर विशेष ध्यान देते हैं। उनकी शिक्षण पद्धति छात्रों को आत्मविश्वास से अंग्रेजी बोलने में मदद करती है।',
        contact: {
            phone: '+91 98765 43214',
            email: 'ramkeval@school.com'
        }
    },
    'kitchen1': {
        id: 'kitchen1',
        name: 'श्री शिव शंकर',
        title: 'प्रमुख रसोईया',
        experience: '12 वर्ष',
        quote: 'स्वस्थ भोजन स्वस्थ जीवन की नींव है।',
        bio: 'श्री शिशंकर ने 12 वर्षों से अधिक का अनुभव रखते हैं। वे विद्यार्थियों को पौष्टिक और स्वादिष्ट भोजन प्रदान करने के लिए समर्पित हैं। उनकी विशेषज्ञता बाल पोषण और स्वस्थ भोजन तैयार करने में है।',
        contact: {
            phone: '+91 98765 43215',
            email: 'shishankar@school.com'
        }
    },
    'kitchen2': {
        id: 'kitchen2',
        name: 'श्रीमती .....',
        title: 'सहायक रसोईया',
      
        experience: '8 वर्ष',
  
        quote: 'स्वच्छता और स्वास्थ्य हमारी प्राथमिकता है।',
        bio: 'श्रीमती मिश्रीयन भोजन की गुणवत्ता और स्वच्छता सुनिश्चित करने में निपुण हैं। वे खाद्य सुरक्षा मानकों का कड़ाई से पालन करती हैं और स्वस्थ भोजन तैयार करने में विशेषज्ञ हैं।',
        contact: {
            phone: '+91 98765 43216',
            email: 'mishriyan@school.com'
        }
    }
};

// Function to open modal
function openModal(teacher) {
    if (!teacher) return;

    const teacherImage = document.getElementById('modalTeacherImage');
    const modalTeacherName = document.getElementById('modalTeacherName');
    const modalTeacherTitle = document.getElementById('modalTeacherTitle');
    const modalTeacherEducation = document.getElementById('modalTeacherEducation');
    const modalTeacherExperience = document.getElementById('modalTeacherExperience');
    const modalTeacherSubjects = document.getElementById('modalTeacherSubjects');
    const modalTeacherQuote = document.getElementById('modalTeacherQuote');
    const modalTeacherBio = document.getElementById('modalTeacherBio');
    const modalTeacherContact = document.getElementById('modalTeacherContact');

    // Get the image from the clicked card
    const clickedCard = document.querySelector(`[data-teacher-id="${teacher.id}"]`);
    const cardImage = clickedCard ? clickedCard.querySelector('img') : null;
    
    if (cardImage) {
        teacherImage.src = cardImage.src;
    } else {
        teacherImage.src = 'school.png'; // Default image if no card image found
    }
    
    teacherImage.onerror = function() {
        this.src = 'school.png'; // Fallback image
    };
    
    // Update modal content with teacher information
    modalTeacherName.textContent = teacher.name || '';
    modalTeacherTitle.textContent = teacher.title || '';
    modalTeacherEducation.textContent = teacher.education || '';
    modalTeacherExperience.textContent = teacher.experience || '';
    modalTeacherSubjects.textContent = teacher.subjects || '';
    modalTeacherQuote.textContent = teacher.quote || '';
    modalTeacherBio.textContent = teacher.bio || '';
    
    // Add contact information
    if (modalTeacherContact && teacher.contact) {
        modalTeacherContact.innerHTML = `
            <div class="contact-item">
                <i class="fas fa-phone"></i>
                <span>${teacher.contact.phone || ''}</span>
            </div>
            <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <span>${teacher.contact.email || ''}</span>
            </div>
        `;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Event Listeners
document.querySelector('.principal-card').addEventListener('click', () => {
    const teacher = teacherData['principal'];
    if (teacher) {
        openModal(teacher);
    }
});

teacherCards.forEach(card => {
    card.addEventListener('click', () => {
        const teacherId = card.getAttribute('data-teacher-id');
        const teacher = teacherData[teacherId];
        if (teacher) {
            openModal(teacher);
        }
    });
});

// Close modal when clicking the close button
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}); 