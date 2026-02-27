const ON = "pic_bulbon.gif";
const OFF = "pic_bulboff.gif";

/* ================= rangkaian 1 ================= */
let r1_index = 0;

function r1_satu() {
    const lamps = document.querySelectorAll("#r1 img");
    let lamp = lamps[r1_index];

    toggleLamp(lamp);

    r1_index++;
    if (r1_index >= lamps.length) r1_index = 0;
}

function r1_semua() {
    const lamps = document.querySelectorAll("#r1 img");
    let semuaOn = [...lamps].every(l => l.src.includes("bulbon"));

    lamps.forEach(l => {
        setLamp(l, !semuaOn);
    });
}

/* ================= rangkaian 2 ================= */
let r2_index = 0;

function r2_satu() {
    const lamps = document.querySelectorAll("#r2 img");
    let lamp = lamps[r2_index];

    toggleLamp(lamp);

    r2_index++;
    if (r2_index >= lamps.length) r2_index = 0;
}

function r2_semua() {
    const lamps = document.querySelectorAll("#r2 img");
    let semuaOn = [...lamps].every(l => l.src.includes("bulbon"));

    lamps.forEach(l => {
        setLamp(l, !semuaOn);
    });
}

function r2_kelompok() {
    const lamps = document.querySelectorAll("#r2 img");

    let groupOn = lamps[0].src.includes("bulbon");

    setLamp(lamps[0], !groupOn);
    setLamp(lamps[1], !groupOn);
    setLamp(lamps[2], !groupOn);
    setLamp(lamps[3], !groupOn);
}


function toggleLamp(lamp) {
    if (lamp.src.includes("bulbon")) {
        setLamp(lamp, false);
    } else {
        setLamp(lamp, true);
    }
}

function setLamp(lamp, state) {
    lamp.src = state ? ON : OFF;
    lamp.classList.toggle("on", state);
}