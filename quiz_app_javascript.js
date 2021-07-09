//getting all the required elements
var start_btn = document.querySelector(".start-quiz-button button");
var info_box = document.querySelector(".quiz-info-box");
var continue_btn = document.querySelector(".buttons .start");
var quit_btn = document.querySelector(".buttons .quit");
var quiz_box = document.querySelector(".quiz-box");
var result_box = document.querySelector(".result-box");
var replay_quiz = document.querySelector(".replay-quiz");
var quit_quiz = document.querySelector(".quit-quiz");
var next_button = document.querySelector(".next-button");

 //start button clicked
 start_btn.onclick = ()=>{
   info_box.style.display="block";
 }

//if exit button is clicked
quit_btn.onclick = () =>{
  info_box.style.display="none";
}

//if continue button is clicked
continue_btn.onclick = () =>{
  info_box.style.display="none";
  quiz_box.style.display="block";
  showQuestions(0);
}

 var ques_count = 0;
 //next button clicked on question box
var next_button = document.querySelector(".next-button");
next_button.onclick = () =>{
  if(next_button.innerHTML == "Submit")
  {
    quiz_box.style.display = "none";
    result_box.style.display = "block";
    generateResult(score);
  }
  ques_count++;
  showQuestions(ques_count);
  document.querySelector(".timer-bar").style.animation = "none";
  document.querySelector(".timer-bar").offsetHeight;
  document.querySelector(".timer-bar").style.animation = null;
  if(ques_count == 4)
  {
    next_button.innerHTML = "Submit";
  }
}

//variable for obtaining the score
var score = 0;
//getting questions and options from the array in quiz_app_questions file and checking for the right option
function showQuestions(index)
{
  var timeleft = 15;
  var check = true;
  //digital time keeper
  var downloadTimer = setInterval(function(){
    if(timeleft <= 0)
    {
      clearInterval(downloadTimer);
      check = false;
      next_button.style.display = "block";
      document.querySelector(".timer-sec").innerHTML = timeleft;
    } else
    {
      document.querySelector(".timer-sec").innerHTML = timeleft;
    }
    timeleft -= 1;
  }, 1000);
  var ques_text = document.querySelector(".question-text");
  var options_list = document.querySelector(".options-list");
  var no_of_ques = document.querySelector(".no-of-questions");
  var ques_tag = '<span>'+questions[index].numb+'.</span>' + '<span>'+questions[index].question+'</span>';
  var options_tag = '<div class="option" id="option-1">'+questions[index].options[0]+'</div>'
          + '<div class="option" id="option-2">'+questions[index].options[1]+'</div>'
          + '<div class="option" id="option-3">'+questions[index].options[2]+'</div>'
          + '<div class="option" id="option-4">'+questions[index].options[3]+'</div>';
  var no_questions_tag = '<span><cite>'+questions[index].numb+'</cite> of <cite>5</cite> questions</span>';
  ques_text.innerHTML = ques_tag;
  options_list.innerHTML = options_tag;
  no_of_ques.innerHTML = no_questions_tag;

  var option = document.querySelectorAll(".option");
  var correct_answer_index = 0;
  for(var i=0;i<4;i++)
  {
    if(option[i].innerHTML == questions[index].answer)
    {
      correct_answer_index = i;
      break;
    }
  }
  next_button.style.display = "none";
  next_button.innerHTML = "Next Question";
  document.querySelector("#option-1").onclick = () =>{
    if(check == true)
    {
      if(correct_answer_index == 0)
      {
        score++;
        document.querySelector("#option-1").style.background = "rgb(170,255,201)";
      }
      else
      {
        for(var i=0;i<4;i++)
        {
          if(i != correct_answer_index)
            option[i].style.background = "rgb(255,172,196)";
        }
        option[correct_answer_index].style.background = "rgb(170,255,201)";
      }
      next_button.style.display = "block";
    }
    check = false;
    timeleft = 0;
    document.querySelector(".timer-bar").style.animationPlayState = "paused";
  }
  document.querySelector("#option-2").onclick = () =>{
    if(check == true)
    {
      if(correct_answer_index == 1)
      {
        score++;
        document.querySelector("#option-2").style.background = "rgb(170,255,201)";
      }
      else
      {
        for(var i=0;i<4;i++)
        {
          if(i != correct_answer_index)
            option[i].style.background = "rgb(255,172,196)";
        }
        option[correct_answer_index].style.background = "rgb(170,255,201)";
      }
      next_button.style.display = "block";
    }
    check = false;
    timeleft = 0;
    document.querySelector(".timer-bar").style.animationPlayState = "paused";
  }
  document.querySelector("#option-3").onclick = () =>{
    if(check == true)
    {
      if(correct_answer_index == 2)
      {
        score++;
        document.querySelector("#option-3").style.background = "rgb(170,255,201)";
      }
      else
      {
        for(var i=0;i<4;i++)
        {
          if(i != correct_answer_index)
            option[i].style.background = "rgb(255,172,196)";
        }
        option[correct_answer_index].style.background = "rgb(170,255,201)";
      }
      next_button.style.display = "block";
    }
    check = false;
    timeleft = 0;
    document.querySelector(".timer-bar").style.animationPlayState = "paused";
  }
  document.querySelector("#option-4").onclick = () =>{
    if(check == true)
    {
      if(correct_answer_index == 3)
      {
        score++;
        document.querySelector("#option-4").style.background = "rgb(170,255,201)";
      }
      else
      {
        for(var i=0;i<4;i++)
        {
          if(i != correct_answer_index)
            option[i].style.background = "rgb(255,172,196)";
        }
        option[correct_answer_index].style.background = "rgb(170,255,201)";
      }
      next_button.style.display = "block";
    }
    check = false;
    timeleft = 0;
    document.querySelector(".timer-bar").style.animationPlayState = "paused";
  }
}

//to generate the result after all 5 questions
function generateResult(score)
{
  if(score >=3)
  {
    var score_text = document.querySelector(".score-text");
    var score_tag = '<span> and Congrats,You scored<cite>'+score+'</cite>out of <cite> 5</cite> marks</span>';
    score_text.innerHTML = score_tag;
  }
  else
  {
    var score_text = document.querySelector(".score-text");
    var score_tag = '<span> and Sorry, You get only<cite>'+score+'</cite>out of <cite> 5</cite> marks</span>';
    score_text.innerHTML = score_tag;
  }
}

//replay or quit quiz after completion
replay_quiz.onclick = () =>{
  score = 0;
  ques_count = 0;
  result_box.style.display = "none";
  info_box.style.display = "block";
}
quit_quiz.onclick = () =>{
  score = 0;
  ques_count = 0;
  result_box.style.display = "none";
}
