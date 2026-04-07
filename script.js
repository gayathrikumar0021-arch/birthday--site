function nextSection(nextId) {
    let sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.classList.add("hidden"));

    document.getElementById(nextId).classList.remove("hidden");
}