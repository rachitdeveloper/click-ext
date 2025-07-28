function autoClicker() {
    location.reload();

    setTimeout(() => {
        const btn = document.querySelector("button.YOUR_SELECTOR"); // Change selector
        if (btn) btn.click();
    }, 5000);
}

setInterval(autoClicker, 3600000); // Every 1 hour
autoClicker(); // Run first time
