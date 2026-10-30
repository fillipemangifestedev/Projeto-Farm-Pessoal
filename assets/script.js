const track = document.getElementById("product-track");

document.querySelectorAll(".arrow").forEach((btn) => {
    btn.addEventListener("click", () => {
        if (!track) return;
        const card = track.querySelector(".product-card");
        const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
        const step = card ? card.offsetWidth + gap : 200;
        track.scrollBy({ left: Number(btn.dataset.dir) * step, behavior: "smooth" });
    });
});