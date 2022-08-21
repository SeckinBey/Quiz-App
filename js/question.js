function Question(questionTxt, answers, rightAnswer) {
    this.questionTxt = questionTxt;
    this.answers = answers;
    this.rightAnswer = rightAnswer;
}

Question.prototype.checkAnswer = function(answer) {
  return answer === this.rightAnswer
}

let questions = [
  new Question("1-Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "TypeScript", c: "Npm", d: "NuGet" }, "c"),
  new Question("2-Hangisi frontend kapsamında değerlendirilmez?", { a: "CSS", b: "HTML", c: "JavaScript", d: "SQL" }, "d"),
  new Question("3-Hangisi backend kapsamında değerlendirilir?", { a: "Node.js", b: "TypeScript", c: "Angular", d: "React" }, "a"),
  new Question("4-Hangisi JavaScript programlama dilini kullanmaz?", { a: "React", b: "Angular", c: "Vue.js", d: "Asp.NET" }, "d")
];