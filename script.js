console.log("script.js loaded");

const state = {
  scorePlus: 0,
  scoreMinus: 0,
  currentQuestion: 0,
  selectedIndex: null,
  history: []
};

let gameFinished = false;

/* ===============================
   初期化
================================ */
window.onload = () => {
  const saved = localStorage.getItem("quizState");
  if (saved) {
    Object.assign(state, JSON.parse(saved));
  }

  renderQuestion();
  updateScoreDisplay();
};

/* ===============================
   保存処理
================================ */
function saveState() {
  localStorage.setItem("quizState", JSON.stringify(state));
}

/* ===============================
   問題表示
================================ */
function renderQuestion() {
  const q = questions[state.currentQuestion];
  state.selectedIndex = null;

  document.getElementById("question").textContent = q.question;

  const optionsHTML = q.choices.map((opt, i) => {
    const isVisible = q.visiblePlus?.includes(i);
    const plusText = isVisible ? `+${opt.plus}` : "???";

    return `
      <button class="option-btn" onclick="selectOption(${i})" id="opt-${i}">
        <div class="plus-box ${isVisible ? "" : "hidden"}">
          ${plusText}
        </div>
        <div class="option-text">${opt.text}</div>
      </button>
    `;
  }).join("");

  document.getElementById("options").innerHTML = optionsHTML;
  document.getElementById("confirmBtn").disabled = true;

  updateProgress();
}

/* ===============================
   選択
================================ */
function selectOption(index) {
  state.selectedIndex = index;

  document.querySelectorAll(".option-btn").forEach(btn => {
    btn.classList.remove("selected");
  });

  document.getElementById(`opt-${index}`).classList.add("selected");
  document.getElementById("confirmBtn").disabled = false;
}

/* ===============================
   確定＆次へ
================================ */
function confirmAndNext() {
  if (state.selectedIndex === null) return;

  const q = questions[state.currentQuestion];
  const opt = q.choices[state.selectedIndex];

  state.scorePlus += opt.plus;
  state.scoreMinus += opt.minus;

  // 履歴保存
  state.history.push({
    question: q.question,
    selectedText: opt.text,
    plus: opt.plus,
    minus: opt.minus
  });

  updateScoreDisplay();

  state.currentQuestion++;
  saveState();

  if (state.currentQuestion < questions.length) {
    renderQuestion();
  } else {
    finishGame();
  }
}

/* ===============================
   スコア表示更新
================================ */
function updateScoreDisplay() {
  document.getElementById("score").textContent =
    `現在のスコア： ${state.scorePlus} 点`;
}

/* ===============================
   進行バー
================================ */
function updateProgress() {
  const total = questions.length;
  const current = Math.min(state.currentQuestion + 1, total);

  document.getElementById("progress-text").textContent =
    `進行状況：${current} / ${total} 問`;

  const percent = (current / total) * 100;
  document.getElementById("progress-bar").style.width = percent + "%";
}

/* ===============================
   終了処理
================================ */
function finishGame() {
  gameFinished = true;

  const finalScore = state.scorePlus - state.scoreMinus;

  document.getElementById("question").textContent =
    "ゲーム終了！";

  const historyHTML = state.history.map((item, index) => `
    <div class="review-item">
      <h3>Q${index + 1}</h3>
      <p class="review-question">${item.question}</p>
      <p>あなたの選択： <strong>${item.selectedText}</strong></p>
      <div class="score-row">
        <span class="point plus">＋${item.plus}</span>
        <span class="point minus">−${item.minus}</span>
      </div>
    </div>
    <hr>
  `).join("");

  document.getElementById("options").innerHTML = `
    <div class="final-summary">
      <div class="summary-box plus-total">
        メリット合計<br><strong>+${state.scorePlus}</strong>
      </div>

      <div class="summary-box minus-total">
        デメリット合計<br><strong>-${state.scoreMinus}</strong>
      </div>

      <div class="summary-box final-total">
        最終スコア<br><strong>${finalScore}</strong>
      </div>
    </div>

    <div class="review-container">
      ${historyHTML}
    </div>
  `;

  document.getElementById("confirmBtn").style.display = "none";
  document.getElementById("score").style.display = "none";
  document.getElementById("progress-container").style.display = "none";

  localStorage.removeItem("quizState");
}

/* ===============================
   離脱確認
================================ */
window.addEventListener("beforeunload", function (e) {
  if (!gameFinished) {
    e.preventDefault();
    e.returnValue = "";
  }
});
