/**
 * DTZ Official HQ - Advanced Multi-Admin Relay
 * Developers: Raviya, Shagiya, Ashiya
 */

const ADMIN_NUMBERS = [
    "94763036217",
    "94778430626",
    "94741856766",
    "94788262515"
];

// Matrix Background Initialization
function initMatrix() {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*ｦｱｳｴｵｶｷｸｹ";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00ffcc";
        ctx.font = fontSize + "px 'Share Tech Mono'";

        drops.forEach((y, i) => {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, y * fontSize);
            if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        });
    }
    setInterval(draw, 35);
}

// System Boot Sequence
async function boot() {
    document.getElementById('welcome').classList.add('slide-out');
    const term = document.getElementById('terminal');
    const out = document.getElementById('t-output');
    term.style.display = 'flex';
    
    const scripts = [
        "> INITIALIZING DTZ KERNEL v10.0...",
        "> LOADING SECURITY_PROTOCOLS...",
        "> SYNCING ADMIN_RELAY_NETWORK...",
        "> RAVIYA, SHAGIYA, ASHIYA MODULES ONLINE.",
        "> SECURE CHANNEL ESTABLISHED.",
        "> REDIRECTING TO RECRUITMENT HQ..."
    ];

    for(let s of scripts) {
        const p = document.createElement('p');
        p.textContent = s;
        out.appendChild(p);
        await new Promise(r => setTimeout(r, 400));
    }

    setTimeout(() => {
        term.style.display = 'none';
        document.getElementById('portal').classList.add('fade-in');
        document.body.style.overflow = "auto";
    }, 500);
}

// Advanced Data Processing & Auto-Generation
document.getElementById('dtzForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // UI Feedback
    const term = document.getElementById('terminal');
    const out = document.getElementById('t-output');
    term.style.display = 'flex';
    out.innerHTML = "<p>> ENCRYPTING INTEL PACKET...</p>";

    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    const age = document.getElementById('age').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const exp = document.getElementById('exp').value;

    await new Promise(r => setTimeout(r, 1000));
    out.innerHTML += "<p>> BROADCASTING TO ADMIN NETWORK...</p>";

    // Generated Intel Report
    const msg = `*🛡️ DTZ RECRUITMENT INTEL 🛡️*%0A` +
                `--------------------------%0A` +
                `👤 *CODENAME:* ${name.toUpperCase()}%0A` +
                `📍 *LOCATION:* ${city}%0A` +
                `🎂 *AGE:* ${age}%0A` +
                `📱 *WHATSAPP:* ${whatsapp}%0A` +
                `💻 *EXPERIENCE:* ${exp}%0A` +
                `--------------------------%0A` +
                `⚠️ *ACTION:* User is ready to send 4 Intel Photos/PDF.%0A` +
                `--------------------------%0A` +
                `_Verified: Raviya, Shagiya, Ashiya_`;

    // Strategy: Selects the primary admin and prepares the relay.
    const targetAdmin = ADMIN_NUMBERS[1]; // Sets the target admin from the list.
    
    await new Promise(r => setTimeout(r, 800));
    window.location.href = `https://wa.me/${targetAdmin}?text=${msg}`;
});

window.onload = initMatrix;
