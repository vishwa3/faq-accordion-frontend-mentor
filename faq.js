if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  const allQueryIcons = document.getElementsByClassName("query-icon-container");
  Array.from(allQueryIcons).forEach((queryIcon) =>
    queryIcon.addEventListener("click", () => {
      const query = queryIcon.querySelector(".query");
      const icon = queryIcon.querySelector(".icon");
      const answer = queryIcon.parentElement.querySelector(".answer");
      if (query.classList.contains("font-weight-query")) {
        query.classList.toggle("font-weight-query");
        icon.classList.toggle("icon-rotate");
        answer.classList.toggle("show-answer");
      } else {
        Array.from(allQueryIcons).forEach((queryIconClose) => {
          const queryClose = queryIconClose.querySelector(".query");
          const iconClose = queryIconClose.querySelector(".icon");
          const answerClose =
            queryIconClose.parentElement.querySelector(".answer");
          queryClose.classList.remove("font-weight-query");
          iconClose.classList.remove("icon-rotate");
          answerClose.classList.remove("show-answer");
        });
        query.classList.add("font-weight-query");
        icon.classList.add("icon-rotate");
        answer.classList.add("show-answer");
      }
    })
  );
}
