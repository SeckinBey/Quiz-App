function UI() {
    this.btn_start = document.querySelector(".btn_start"),
    this.btn_next = document.querySelector(".btn_next"),
    this.btn_replay = document.querySelector(".btn_replay"),
    this.btn_quit = document.querySelector(".btn_quit"),
    this.quiz_box = document.querySelector(".quiz_box"),
    this.score_box = document.querySelector(".score_box"),
    this.option_list = document.querySelector(".option_list"),
    this.time_text = document.querySelector(".time_text"),
    this.time_second = document.querySelector(".time_second"),
    this.time_line = document.querySelector(".time_line"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'
}

UI.prototype.showQuestion = function(question) {
    let questionText = `<span>${question.questionTxt}</span>`;
    let options = '';
  
    for (let answer in question.answers) {
      options +=
        `
          <div class="option">
          <span><b>${answer}</b>: ${question.answers[answer]} </span>
          </div>
        `;
    }
  
    document.querySelector(".question_text").innerHTML = questionText;
    this.option_list.innerHTML = options;
  
    const option = this.option_list.querySelectorAll(".option");
  
    for (let opt of option) {
      opt.setAttribute("onclick", "optionSelected(this)");
    }
}
  
UI.prototype.showQuestionCount = function(questionIndex, questionCount) {
    let tag = `<span class="badge bg-warning">${questionIndex} / ${questionCount}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}

UI.prototype.showScore = function (questionCount, rightAnswerCount) {
    let tag = `Toplam ${questionCount} sorudan ${rightAnswerCount} doğru cevap verdiniz.`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
}