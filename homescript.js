document.addEventListener("DOMContentLoaded", () => {
    let currentBanner = 0;
    const bannerShow = document.querySelector(".homebanner-slideshow");
    const bannerDots = document.querySelectorAll(".homebanner-dots .dot");

    function showBannerSlide(index) {
        currentBanner = index;
        bannerShow.style.transform = `translateX(-${index * 100}%)`;

        bannerDots.forEach(dot => dot.classList.remove("active"));
        bannerDots[index].classList.add("active");
    }

    function changeSlide(index) {
        showBannerSlide(index);
    }

    setInterval(() => {
        showBannerSlide((currentBanner + 1) % bannerDots.length);
    }, 6000);

    showBannerSlide(currentBanner);

    window.changeSlide = changeSlide;
});
