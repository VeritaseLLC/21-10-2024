window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.getElementById('sub-icon').addEventListener('click', function() {
    const message = document.getElementById('text-box').value.trim(); // Use trim() to remove whitespace
    const email= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (message === "") {
        alert("Please enter the Email Id.");
    } else {
        if (email.test(message)) {
            alert("PDF sent successfully to your mail ID.");
            document.getElementById('text-box').value = ''; 
        } else {
            alert('Please enter a valid email address.');
        }
    }
});
