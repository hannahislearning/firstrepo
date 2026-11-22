// Mission Card 01 preview: flip a task's status when its button is tapped.
// No saving yet — refreshing the page resets everything. (Persistence = Card 04.)

const buttons = document.querySelectorAll(".task-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".task");
    const badge = card.querySelector(".badge");

    const isDone = badge.classList.contains("done");

    if (isDone) {
      badge.classList.replace("done", "todo");
      badge.textContent = "To do";
      button.textContent = "Mark done";
    } else {
      badge.classList.replace("todo", "done");
      badge.textContent = "Done";
      button.textContent = "Reopen";
    }
  });
});
