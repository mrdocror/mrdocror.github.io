// Skills Chart
const ctx = document.getElementById('skillsRadar').getContext('2d');
const skillsChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['C++', 'HTML/CSS', 'Python', 'Verilog', 'Semiconductor Physics', 'Project Management'],
        datasets: [{
            label: 'Skill Level',
            data: [85, 75, 75, 90, 80, 70],
            backgroundColor: 'rgba(37, 99, 235, 0.2)',
            borderColor: 'rgba(37, 99, 235, 1)',
            pointBackgroundColor: 'rgba(37, 99, 235, 1)'
        }]
    },
    options: {
        scales: {
            r: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});