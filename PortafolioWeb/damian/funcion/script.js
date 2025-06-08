document.addEventListener("DOMContentLoaded", function() {
    const imagenes = document.querySelectorAll(".post_imagen");
    const modal = document.createElement("div");
    const modalImg = document.createElement("img");
    const closeBtn = document.createElement("span");

    modal.classList.add("modal");
    modalImg.classList.add("modal-img");
    closeBtn.classList.add("close-btn");
    closeBtn.innerHTML = "&times;";

    modal.appendChild(closeBtn);
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    imagenes.forEach(img => {
        img.addEventListener("click", function() {
            modalImg.src = img.src;
            modal.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function(e) {
        if (e.target !== modalImg) {
            modal.style.display = "none";
        }
    });
});
