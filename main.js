gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
    const orderButtons = document.querySelectorAll('.card-body'); // Updated selector
    const orderModal = new bootstrap.Modal(document.getElementById('orderModal'));
    const cartLink = document.getElementById('cart-link');
    let cartCount = 0;

    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            orderModal.show();
            cartCount++;
            cartLink.textContent = `Cart (${cartCount})`;
            console.log('Order button clicked');
        });
    });
});

gsap.fromTo("#hero h1", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.inOut" });
gsap.fromTo("#hero p", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.inOut" });
gsap.utils.toArray(".card").forEach((card, index) => {
  gsap.fromTo(
    card,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      delay: index * 0.2 // Add a delay of 0.2 seconds per card
    }
  );
});

gsap.to(".curtain-image", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", /* Reveal the image */
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".curtain-container",
      start: "center center", /* Trigger when the container is in the center of the viewport */
      toggleActions: "play none none reverse",
    },
  });