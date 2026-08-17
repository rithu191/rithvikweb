// ===============================
// STUDENT LOGIN
// ===============================

function studentLogin(event) {

    // Stop the form from refreshing the page
    event.preventDefault();

    // Get values from the login form
    const studentId = document.getElementById("studentId").value;
    const password = document.getElementById("studentPassword").value;

    // Demo login credentials
    const correctStudentId = "student";
    const correctPassword = "1234";

    // Check login
    if (studentId === correctStudentId && password === correctPassword) {

        // Save student information
        localStorage.setItem("studentLoggedIn", "true");
        localStorage.setItem("studentId", studentId);

        // Go to student dashboard
        window.location.href = "student-dashboard.html";

    } else {

        alert("Invalid Student ID or Password.");

    }
}


// ===============================
// ADMIN LOGIN
// ===============================

function adminLogin(event) {

    // Stop the form from refreshing the page
    event.preventDefault();

    // Get values from admin login form
    const username = document.getElementById("adminUsername").value;
    const password = document.getElementById("adminPassword").value;

    // Demo admin credentials
    const correctUsername = "admin";
    const correctPassword = "admin123";

    // Check login
    if (username === correctUsername && password === correctPassword) {

        // Save admin login status
        localStorage.setItem("adminLoggedIn", "true");
        localStorage.setItem("adminUsername", username);

        // Go to admin dashboard
        window.location.href = "admin-dashboard.html";

    } else {

        alert("Invalid Admin Username or Password.");

    }
}


// ===============================
// STUDENT DASHBOARD
// ===============================

function loadStudentData() {

    const studentId = localStorage.getItem("studentId");

    const studentName = document.getElementById("studentName");
    const displayStudentId = document.getElementById("displayStudentId");

    if (studentId) {

        if (studentName) {
            studentName.textContent = studentId;
        }

        if (displayStudentId) {
            displayStudentId.textContent = studentId;
        }

    }
}


// ===============================
// ADMIN DASHBOARD
// ===============================

function loadAdminData() {

    const username = localStorage.getItem("adminUsername");

    const adminName = document.getElementById("adminName");

    if (username && adminName) {
        adminName.textContent = username;
    }
}


// ===============================
// LOGOUT
// ===============================

function logout() {

    // Remove login information
    localStorage.removeItem("studentLoggedIn");
    localStorage.removeItem("studentId");

    localStorage.removeItem("adminLoggedIn");
    localStorage.removeItem("adminUsername");

    // Return to home page
    window.location.href = "index.html";
}


// ===============================
// RESOURCE MESSAGE
// ===============================

function showMessage() {

    alert("Learning resources will be available soon!");

}


// ===============================
// RUN WHEN PAGE LOADS
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    loadStudentData();
    loadAdminData();

});