document.addEventListener("DOMContentLoaded", () => {
    const galleryGrid = document.getElementById("gallery-grid");
    const imageDirectory = "images/";

    // רשימת התמונות בגלריה
    const images = [
        "IMG_20241031_132755.jpg",
        "IMG_20241031_122522.jpg",
        "IMG_20241121_142831.jpg",
        "fance.jpg",
        "1.jpg",
        "wood.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
    ];

    // יצירת תמונות בגלריה
    images.forEach((image, index) => {
        const div = document.createElement("div");
        div.className = "gallery-item";

        const img = document.createElement("img");
        img.src = `${imageDirectory}${image}`;
        img.alt = `תמונה ${index + 1}`;
        img.onclick = () => openModal(img);

        div.appendChild(img);
        galleryGrid.appendChild(div);
    });

    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const modalClose = document.getElementById("modal-close");

    modalClose.addEventListener("click", () => closeModal());
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    function openModal(image) {
        modal.style.display = "flex";
        modalImage.src = image.src;
    }

    function closeModal() {
        modal.style.display = "none";
    }
});
