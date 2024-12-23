document.addEventListener("DOMContentLoaded", () => {
    const galleryGrid = document.getElementById("gallery-grid");
    const imageDirectory = "images/"; // שם התיקייה שבה התמונות נמצאות

    // הוסף כאן את שמות התמונות (ללא תלות בשפה)
    const images = [
        "IMG_20241031_132755.jpg",
        "IMG_20241031_122522.jpg",
        "IMG_20241121_142831.jpg",
        "images/1.jpg",
        "images/2.jpg",
        "images/3.jpg",
    ];

    // יצירת אלמנטים בגלריה עבור כל תמונה
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
});

// פונקציות למודל התמונה
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
