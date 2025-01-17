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
// Mở tab
function openTab(evt, tabName) {
    var i, tabcontent, tabbuttons;

    // Ẩn tất cả các tab content
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    // Xóa lớp active khỏi tất cả các tab button
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove("active");
    }

    // Hiển thị tab hiện tại và thêm lớp active vào tab button đã chọn
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Mở tab Week1 mặc định khi trang web tải
document.getElementsByClassName("tab-button")[0].click();