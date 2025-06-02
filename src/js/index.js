function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeAnnouncements() {
    var announce = [
        "⚠️ New Arrivals Coming soon ⚠️ Clearance Sale, up to 40% off on select products ⚠️",
        "⚠️ Get A DAUD Gift Card ⚠️",
        "⚠️ 20% off on NIKE products ⚠️"
    ];

    // Assuming you're targeting the first matching element
    const elements = document.getElementsByClassName("under-header-announcement");
    const el = elements[0];

    for (const element of announce) {
        el.innerHTML = element;
        console.log("Updated announcement:", element);
        await sleep(3000);
    }
    changeAnnouncements();
}
console.log('hello')
changeAnnouncements();