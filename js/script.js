document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.navbar .menu');
    const closeMessageButton = document.querySelector('.message-bar .close-message');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('open');
        menu.classList.toggle('show');
    });

    closeMessageButton.addEventListener('click', function() {
        document.querySelector('.message-bar').style.display = 'none';
    });
});



// Fade-in effect on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


// Lazy load images
const lazyLoad = () => {
    const lazyImages = document.querySelectorAll('img.lazy');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
};

document.addEventListener('DOMContentLoaded', lazyLoad);

// Progress bar
const progressBar = document.createElement('div');
progressBar.id = 'progress-bar';
progressBar.style.width = '0%';
progressBar.style.height = '5px';
progressBar.style.backgroundColor = 'var(--accent-color)';
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.zIndex = '1001';
document.body.appendChild(progressBar);

function updateProgress() {
    const scrollPosition = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / pageHeight) * 100;
    progressBar.style.width = `${scrollPercentage}%`;
}

window.addEventListener('scroll', updateProgress);



// Scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.id = 'scroll-top-btn';
scrollTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
scrollTopBtn.style.position = 'fixed';
scrollTopBtn.style.bottom = '20px';
scrollTopBtn.style.right = '20px';
scrollTopBtn.style.backgroundColor = 'var(--primary-color)';
scrollTopBtn.style.color = '#fff';
scrollTopBtn.style.border = 'none';
scrollTopBtn.style.borderRadius = '50%';
scrollTopBtn.style.width = '50px';
scrollTopBtn.style.height = '50px';
scrollTopBtn.style.display = 'none'; // Initially hidden
scrollTopBtn.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.3)';
scrollTopBtn.style.cursor = 'pointer';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Theme toggle with smooth transition
const toggleTheme = () => {
    // إضافة أو إزالة فئة الوضع الليلي
    document.body.classList.toggle('light-mode');

    // تعيين الانتقال للخلفية ولون النص
    document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    
    // تحديث الأيقونات
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');

    if (document.body.classList.contains('light-mode')) {
        sunIcon.style.display = 'none'; // إخفاء أيقونة الشمس
        moonIcon.style.display = 'block'; // إظهار أيقونة القمر
        document.body.style.backgroundColor = '#ffffff'; // لون الخلفية للوضع النهاري
        document.body.style.color = '#000000'; // لون النص للوضع النهاري
    } else {
        sunIcon.style.display = 'block'; // إظهار أيقونة الشمس
        moonIcon.style.display = 'none'; // إخفاء أيقونة القمر
        document.body.style.backgroundColor = '#121212'; // لون الخلفية للوضع الليلي
        document.body.style.color = '#ffffff'; // لون النص للوضع الليلي
    }
};

// ربط زر تبديل الثيم
document.querySelector('.theme-toggle-btn').addEventListener('click', toggleTheme);








document.addEventListener('DOMContentLoaded', function() {
    // التبديل بين التبويبات
    const tabs = document.querySelectorAll('.edu-tab');
    const contents = document.querySelectorAll('.tab-content');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        contents.forEach(c => c.classList.remove('active'));
        document.getElementById(target).classList.add('active');
      });
    });
  
    // تنفيذ العرض الدائري للمسارات (يمكن استخدام مكتبة مثل Swiper.js لتحسين الأداء)
    const pathCarousel = document.querySelector('.path-carousel');
    let isDown = false;
    let startX;
    let scrollLeft;
  
    pathCarousel.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - pathCarousel.offsetLeft;
      scrollLeft = pathCarousel.scrollLeft;
    });
  
    pathCarousel.addEventListener('mouseleave', () => {
      isDown = false;
    });
  
    pathCarousel.addEventListener('mouseup', () => {
      isDown = false;
    });
  
    pathCarousel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - pathCarousel.offsetLeft;
      const walk = (x - startX) * 3;
      pathCarousel.scrollLeft = scrollLeft - walk;
    });
  });
  


  document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.edu-tab');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');
        
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
  
        tab.classList.add('active');
        document.getElementById(target).classList.add('active');
      });
    });
  
    // Intersection Observer for fade-in effect
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    fadeElements.forEach(element => {
      observer.observe(element);
    });
  });



  document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.testimonial-track');
    const items = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentIndex = 0;

    function updateSlider() {
        track.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % items.length;
        updateSlider();
    }

    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateSlider();
    }

    nextBtn.addEventListener('click', nextTestimonial);
    prevBtn.addEventListener('click', prevTestimonial);

    // Auto-play functionality
    let intervalId = setInterval(nextTestimonial, 5000);

    // Pause auto-play on hover
    track.addEventListener('mouseenter', () => clearInterval(intervalId));
    track.addEventListener('mouseleave', () => intervalId = setInterval(nextTestimonial, 5000));
});













// متغير لحفظ حالة النقر
let isDropdownOpen = false;

// تحديد زر المحتوى التعليمي
const educationalContentButton = document.querySelector('.dropbtn');

// التعامل مع حدث النقر على زر المحتوى التعليمي
educationalContentButton.addEventListener('click', function (e) {
    e.preventDefault();
    
    // التحقق من حالة النقر
    if (!isDropdownOpen) {
        // فتح القائمة المنسدلة
        document.querySelector('.dropdown-content').classList.toggle('show');
        isDropdownOpen = true;  // تغيير حالة النقر لأول مرة
    } else {
        // الانتقال للمحتوى التعليمي بعد النقر الثاني
        document.getElementById('educational-content').scrollIntoView({
            behavior: 'smooth'
        });
        
        // إغلاق القائمة المنسدلة
        document.querySelector('.dropdown-content').classList.remove('show');
        isDropdownOpen = false;  // إعادة تعيين حالة النقر
    }
});

// إغلاق القائمة عند النقر في مكان آخر
window.addEventListener('click', function(e) {
    if (!e.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        isDropdownOpen = false;  // إعادة تعيين حالة النقر
    }
});
