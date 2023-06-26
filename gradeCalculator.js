document.getElementById('submitButton').addEventListener('click', function () {
  console.log('hello');
  const name = document.getElementById('nameId').value;
  const roll = document.getElementById('rollId').value;
  const marks1 = parseFloat(document.getElementById('numberEnglish').value);
  const marks2 = parseFloat(document.getElementById('numberPhysics').value);
  const marks3 = parseFloat(document.getElementById('numberChemistry').value);
  const marks4 = parseFloat(document.getElementById('numberBiology').value);
  const marks5 = parseFloat(document.getElementById('numberMathIt').value);
  const totalMarks = marks1 + marks2 + marks3 + marks4 + marks5;
  document.getElementById('showName').innerText = name;
  document.getElementById('showRoll').innerText = roll;
  document.getElementById('showNumEng').innerText = marks1;
  document.getElementById('showNumPhy').innerText = marks2;
  document.getElementById('showNumChe').innerText = marks3;
  document.getElementById('showNumBio').innerText = marks4;
  document.getElementById('showNumMathIt').innerText = marks5;
  document.getElementById('showNumTotal').innerText = totalMarks;

  const avgMarks = totalMarks / 5;
  document.getElementById('showAvg').innerText = avgMarks;
  let Result = 'Failed';
  if (avgMarks >= 33)
    Result = 'Passed';
  else
    Result = 'Failed';
  document.getElementById('showRes').innerText = Result;

  let Grade = 'F';
  if (avgMarks >= 33 && avgMarks <= 50) {
    Grade = 'D';
  } else if (avgMarks > 50 && avgMarks <= 60) {
    Grade = 'C';
  } else if (avgMarks > 60 && avgMarks <= 70) {
    Grade = 'B';
  } else if (avgMarks > 70 && avgMarks <= 80) {
    Grade = 'A';
  } else if (avgMarks > 80 && avgMarks <= 90) {
    Grade = 'A+';
  } else if (avgMarks > 90 && avgMarks <= 100) {
    Grade = 'A++';
  } else {
    Grade = 'F';
  }
  document.getElementById('showGrade').innerText = Grade;
})
