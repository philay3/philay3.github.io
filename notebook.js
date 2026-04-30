/* =========================================================
   notebook.js — flipbook controller
   Renders day tabs, current page, prev/next navigation,
   and keyboard shortcuts (left/right arrows).
   ========================================================= */

(function () {
  "use strict";

  /* -------- DOM refs -------- */
  const tabsEl    = document.getElementById("nb-tabs");
  const pageEl    = document.getElementById("nb-page");
  const counterEl = document.getElementById("nb-counter");
  const prevBtn   = document.getElementById("nb-prev");
  const nextBtn   = document.getElementById("nb-next");

  /* -------- State -------- */
  let dayIdx  = 0;
  let pageIdx = 0;
  let flipping = false;

  /* -------- Render: tabs (one per day) -------- */
  function renderTabs() {
    tabsEl.innerHTML = "";
    programData.days.forEach((day, i) => {
      const btn = document.createElement("button");
      btn.className = "nb-tab" + (i === dayIdx ? " active" : "")
                              + (day.placeholder ? " placeholder" : "");
      btn.type = "button";
      btn.textContent = "Day " + day.number;
      btn.setAttribute("aria-current", i === dayIdx ? "page" : "false");
      btn.addEventListener("click", () => goToDay(i));
      tabsEl.appendChild(btn);
    });
  }

  /* -------- Render: current page (no animation) -------- */
  function renderPage() {
    const day = programData.days[dayIdx];

    if (day.placeholder) {
      pageEl.innerHTML = `
        <div class="nb-placeholder">
          <h3>Day ${day.number}</h3>
          <p>notes coming soon...</p>
          <p style="font-size:15px;margin-top:24px">
            (open data.js and add this day's pages)
          </p>
        </div>`;
      counterEl.textContent = "—";
      prevBtn.disabled = true;
      nextBtn.disabled = true;
      return;
    }

    pageEl.innerHTML = day.pages[pageIdx];
    updateControls();
  }

  /* -------- Update prev/next/counter state -------- */
  function updateControls() {
    const day = programData.days[dayIdx];
    if (day.placeholder) return;
    counterEl.textContent = (pageIdx + 1) + " / " + day.pages.length;
    prevBtn.disabled = pageIdx === 0;
    nextBtn.disabled = pageIdx === day.pages.length - 1;
  }

  /* -------- Navigate: jump to a different day -------- */
  function goToDay(newDayIdx) {
    if (newDayIdx === dayIdx) return;
    dayIdx = newDayIdx;
    pageIdx = 0;
    renderTabs();
    renderPage();
  }

  /* -------- Navigate: flip to a different page (animated) -------- */
  function flipTo(newPageIdx) {
    const day = programData.days[dayIdx];
    if (day.placeholder) return;
    if (flipping) return;
    if (newPageIdx === pageIdx) return;
    if (newPageIdx < 0 || newPageIdx >= day.pages.length) return;

    flipping = true;
    const dir = newPageIdx > pageIdx ? "next" : "prev";

    pageEl.classList.add("flip-out-" + dir);

    setTimeout(() => {
      pageEl.innerHTML = day.pages[newPageIdx];
      pageEl.classList.remove("flip-out-" + dir);
      pageEl.classList.add("flip-in-" + dir);

      void pageEl.offsetWidth;

      requestAnimationFrame(() => {
        pageEl.classList.remove("flip-in-" + dir);
        pageIdx = newPageIdx;
        updateControls();
        setTimeout(() => { flipping = false; }, 400);
      });
    }, 380);
  }

  /* -------- Wire up controls -------- */
  prevBtn.addEventListener("click", () => flipTo(pageIdx - 1));
  nextBtn.addEventListener("click", () => flipTo(pageIdx + 1));

  document.addEventListener("keydown", (e) => {
    const t = e.target;
    if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA")) return;
    if (e.key === "ArrowLeft")  flipTo(pageIdx - 1);
    if (e.key === "ArrowRight") flipTo(pageIdx + 1);
  });

  /* -------- Boot -------- */
  renderTabs();
  renderPage();
})();
