const video  = document.getElementById("video");

async function playVideo() {
    await video.play();
}

if (window.innerWidth < 400) {
    video.controls = true;
}

document.addEventListener("DOMContentLoaded", function() {
    const rightToLeft = document.querySelectorAll('.rtl');
    const leftToRight = document.querySelectorAll('.ltr');
    const sponsorDiv = document.querySelector('#sponsor-container');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('ltr')) {
                    entry.target.classList.add('ltrAnimation');
                } else if (entry.target.tagName === 'DIV') {
                    entry.target.classList.add('sponsorAnimation')
                } else {
                    entry.target.classList.add('rtlAnimation');
                }
                observer.unobserve(entry.target); // Stop observing after the animation has been triggered
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    rightToLeft.forEach((item) => observer.observe(item))
    leftToRight.forEach((item) => observer.observe(item))
    observer.observe(sponsorDiv)
});
