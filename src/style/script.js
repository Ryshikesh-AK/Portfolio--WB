function openModal(img) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}

function showSkill(skillName, percent) {
  const gauge = document.getElementById("gauge");
  const text = document.getElementById("gaugeText");

  gauge.setAttribute("stroke-dasharray", `${percent}, 100`);
  text.textContent = `${skillName} - ${percent}%`;
}

