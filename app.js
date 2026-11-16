// Get the input, button, and output elements from the HTML.
const messageInput = document.getElementById("messageInput");
const postButton = document.getElementById("postButton");
const outputBox = document.getElementById("outputBox");

// This function runs when the user clicks the button.
function postAnnouncement() {
    // Get the message and remove extra spaces at the beginning and end.
    const message = messageInput.value.trim();

    // Do not post an empty message.
    if (message === "") {
        outputBox.innerText = "Please type an announcement first.";
        messageInput.focus();
        return;
    }

    // Display the announcement inside the output box.
    outputBox.innerText = message;

    // Clear the input after posting.
    messageInput.value = "";
    messageInput.focus();
}

// Run the function when the button is clicked.
postButton.addEventListener("click", postAnnouncement);

// Also allow the Enter key to post the announcement.
messageInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        postAnnouncement();
    }
});
