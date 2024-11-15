// Bạn có thể thêm hiệu ứng JavaScript ở đây nếu cần.
console.log("Welcome to MyGroupPage!");
// Smooth scroll khi nhấn vào menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hiệu ứng xuất hiện dần cho các thẻ div thành viên khi cuộn trang
const memberCards = document.querySelectorAll('.member-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

memberCards.forEach(card => {
    observer.observe(card);
});

// Hiệu ứng chuyển màu header khi cuộn trang
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
