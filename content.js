function autoClicker() {
  console.log("🔄 Reloading…");
  location.reload();
}

function clickButton() {
  document.querySelectorAll("button").forEach(btn => {
    if (btn.innerText.toLowerCase().includes("prove")) {
      btn.click();
      console.log("✅ ‘Prove’ clicked");
    }
  });
}

// first run 5s after page‑load
setTimeout(clickButton, 5000);

// every hour: reload, then click after 5s
setInterval(()=>{
  autoClicker();
  setTimeout(clickButton, 5000);
}, 3600000);
