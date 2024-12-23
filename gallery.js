document.addEventListener("DOMContentLoaded", () => {
    const galleryGrid = document.querySelector(".gallery-grid");
    const imageDirectory = "images/";

    const images = [
        "IMG_20241031_132755.jpg",
        "IMG_20241031_122522.jpg",
        "IMG_20241121_142831.jpg",
        "images/fance.jpg",
        "new_image2.jpg"
    ];

    images.forEach(image => {
        const div = document.createElement("div");
        div.className = "gallery-item";

        const img = document.createElement("img");
        img.src = `${imageDirectory}${image}`;
        img.alt = `פרויקט בגלריה`;
        img.onclick = () => openModal(img);

        div.appendChild(img);
        galleryGrid.appendChild(div);
    });
});

function openModal(image) {
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");

    modal.style.display = "flex";
    modalImage.src = image.src;
}

function closeModal() {
    const modal = document.getElementById("image-modal");
    modal.style.display = "none";
}
