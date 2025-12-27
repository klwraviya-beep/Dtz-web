/**
 * DTZ Official HQ - Advanced Core Logic
 * Developers: Raviya, Shagiya, Ashiya
 */

const ADMIN_NUMBER = "94778430626";
const WHATSAPP_GROUP = "https://chat.whatsapp.com/YOUR_GROUP_LINK"; // Replace with your link

// --- ADVANCED MATRIX BACKGROUND ---
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

function initMatrix() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const chars = "ｦｱｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ23456789$+-*/=%\"#&_";
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

// --- TERMINAL BOOT SEQUENCE ---
async function bootSystem() {
    const welcome = document.getElementById('welcome');
    const terminal = document.getElementById('terminal');
    const output = document.getElementById('t-output');

    welcome.classList.add('slide-out');
    terminal.style.display = 'flex';

    const logs = [
        "> INITIALIZING DTZ KERNEL...",
        "> LOADING RAVIYA_CORE.DLL...",
        "> SHAGIYA_SECURITY_BYPASS: SUCCESS",
        "> ASHIYA_NETWORK_LINK: ESTABLISHED",
        "> ENCRYPTING PORTAL INTERFACE...",
        "> ACCESS GRANTED: WELCOME TO HQ."
    ];

    for (const log of logs) {
        const p = document.createElement('p');
        p.textContent = log;
        output.appendChild(p);
        await new Promise(r => setTimeout(r, 450));
    }

    setTimeout(() => {
        terminal.style.display = 'none';
        const portal = document.getElementById('portal');
        portal.classList.add('fade-in');
        document.body.style.overflowY = "auto";
    }, 600);
}

// --- FORM DATA PROCESSING ---
document.getElementById('dtzForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Captured Data
    const data = {
        name: document.getElementById('name').value,
        city: document.getElementById('city').value,
        age: document.getElementById('age').value,
        phone: document.getElementById('whatsapp').value,
        exp: document.getElementById('exp').value
    };

    // Construct Encrypted Message
    const message = `*🛡️ DTZ RECRUITMENT REPORT 🛡️*%0A%0A` +
                    `👤 *CODENAME:* ${data.name}%0A` +
                    `📍 *CITY:* ${data.city}%0A` +
                    `🎂 *AGE:* ${data.age}%0A` +
                    `📱 *CONTACT:* ${data.phone}%0A` +
                    `💻 *EXP:* ${data.exp}%0A%0A` +
                    `🔗 *GROUP JOINED:* ${WHATSAPP_GROUP}%0A%0A` +
                    `_Verified by: Raviya, Shagiya, Ashiya_`;

    // Final Redirection
    window.location.href = `https://wa.me/${ADMIN_NUMBER}?text=${message}`;
});

window.onload = initMatrix;