function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const eyeIconClosed = document.getElementById('eye-icon'); // Closed eye icon
    const eyeIconOpen = document.getElementById('closed-eye'); // Open eye icon
    
    // Toggle the type attribute
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // Show password
        eyeIconClosed.style.display = 'none'; // Hide closed eye icon
        eyeIconOpen.style.display = 'block'; // Show open eye icon
    } else {
        passwordInput.type = 'password'; // Hide password
        eyeIconClosed.style.display = 'block'; // Show closed eye icon
        eyeIconOpen.style.display = 'none'; // Hide open eye icon
    }
}