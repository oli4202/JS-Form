const form = document.getElementById("myForm");

// Validation rules stored in an array (important for your exam)
const fields = [
    {
        id: "username",
        validate: value => value.length >= 3,
        message: "Username must be at least 3 characters"
    },
    {
        id: "email",
        validate: value => /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(value),
        message: "Enter a valid email address"
    },
    {
        id: "password",
        validate: value => value.length >= 6,
        message: "Password must be at least 6 characters"
    },
    {
        id: "phone",
        validate: value => /^[0-9]{11}$/.test(value),
        message: "Phone number must be exactly 11 digits"
    },
    {
        id: "age",
        validate: value => parseInt(value) >= 18,
        message: "You must be at least 18 years old"
    }
];

// Form submit event
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    // Loop through each field rule
    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const error = input.nextElementSibling;
        const value = input.value.trim();

        // Reset styles
        error.textContent = "";
        input.style.borderColor = "#ccc";

        // Run validation function
        if (!field.validate(value)) {
            error.textContent = field.message;
            input.style.borderColor = "#e63946";
            isValid = false;
        } else {
            input.style.borderColor = "#2a9d8f"; // green success border
        }
    });

    if (isValid) {
        alert("Form submitted successfully!");
        form.reset();

        // Reset border colors
        fields.forEach(field => {
            document.getElementById(field.id).style.borderColor = "#ccc";
        });
    }
});
