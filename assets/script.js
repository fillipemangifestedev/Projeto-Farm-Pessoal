console.log("Js carregando")

const track = document.getElementById("product-track");

document.querySelectorAll(".arrow").forEach((btn) => {
    btn.addEventListener("click", () => {
        if (!track) return;
        const card = track.querySelector(".product-card");
        const step = card ? card.offsetWidth + 20 : 200;
        track.scrollBy({ left: Number(btn.dataset.dir) * step, behavior: "smooth" });
    });
});