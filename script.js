const fast = document.querySelector("#fast");
const cheap = document.querySelector("#cheap");
const good = document.querySelector("#good");
const checkboxes = [fast, cheap, good];
const active = [];

for (const checkbox of checkboxes) {
  checkbox.addEventListener("change", function () {
    if (active.length === 2 && checkbox.checked) {
      active[1].checked = false;
      active.splice(-1);
    }
    if (!checkbox.checked) {
      active.splice(active.indexOf(checkbox), 1);
    } else {
      active.push(checkbox);
    }
  });
}
