function submitAnswers()
{
	var total=10;
	var score=0;
	var q1=document.forms["quizform"]["opt1"].value;
	var q2=document.forms["quizform"]["opt2"].value;
	var q3=document.forms["quizform"]["opt3"].value;
	var q4=document.forms["quizform"]["opt4"].value;
	var q5=document.forms["quizform"]["opt5"].value;
	var q6=document.forms["quizform"]["opt6"].value;
	var q7=document.forms["quizform"]["opt7"].value;
	var q8=document.forms["quizform"]["opt8"].value;
	var q9=document.forms["quizform"]["opt9"].value;
	var q10=document.forms["quizform"]["opt10"].value;
	 if(q1==null||q1=='')
	 {
	 	alert('you missed question 1');
	 	return false;
	 }
	 if(q2==null||q2=='')
	 {
	 	alert('you missed question 2');
	 	return false;
	 }
	 if(q3==null||q3=='')
	 {
	 	alert('you missed question 3');
	 	return false;
	 }
	 if(q4==null||q4=='')
	 {
	 	alert('you missed question 4');
	 	return false;
	 }
	 if(q5==null||q5=='')
	 {
	 	alert('you missed question 5');
	 	return false;
	 }
	 if(q6==null||q6=='')
	 {
	 	alert('you missed question 6');
	 	return false;
	 }
	 if(q7==null||q7=='')
	 {
	 	alert('you missed question 7');
	 	return false;
	 }
	 if(q8==null||q8=='')
	 {
	 	alert('you missed question 8');
	 	return false;
	 }
	 if(q9==null||q9=='')
	 {
	 	alert('you missed question 9');
	 	return false;
	 }
	 if(q10==null||q10=='')
	 {
	 	alert('you missed question 10');
	 	return false;
	 }
	 var answers=["a","a","a","a","d","d","c","a","a","a"];
	 for(i=1;i<=total;i++)
	 {
	 	if(eval('q'+i)==answers[i-1])
	 	{
	 		score++;
	 	}
	 }

	alert('you scored '+score+' out of '+total);

}