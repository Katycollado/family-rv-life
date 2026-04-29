function showTip() {
    document.getElementById("tip-message").innerHTML = "Tip: Bring snacks, games, and a simple travel plan for a better RV trip.";
}

function showMessage() {
    document.getElementById("about-message").innerHTML = "RV life helps families spend more time together, enjoy nature, and create meanignful memories.";
}

function submitForm() {
    document.getElementById("form-message").innerHTML = "Thank you! Your message has been submitted.";
    return false;
}

function openImage(img) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup-img").src = img.src;

}

function closeImage() {
    document.getElementById("popup").style.display = "none";

}
