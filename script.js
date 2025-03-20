// Function to add reviews dynamically
function addReview() {
    let reviewInput = document.getElementById("review-input");
    let reviewList = document.getElementById("review-list");

    if (reviewInput.value.trim() !== "") {
        let newReview = document.createElement("p");
        newReview.textContent = reviewInput.value;
        reviewList.appendChild(newReview);
        reviewInput.value = ""; // Clear the input field
    } else {
        alert("Please write a review before submitting.");
    }
}
