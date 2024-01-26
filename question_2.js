function verify() {
    var score = 0;

    // Check answer for question 1
    var q1Answer = document.querySelector('input[name="option1"]:checked');
    if (q1Answer !== null && q1Answer.value === "1") {
        score++;
    }

    // Check answer for question 2
    var q2Answer = document.querySelector('input[name="option2"]:checked');
    if (q2Answer !== null && q2Answer.value === "1") {
        score++;
    }

    // Check answer for question 3
    var q3Answer = document.querySelector('input[name="option3"]:checked');
    if (q3Answer !== null && q3Answer.value === "2") {
        score++;
    }

    // Display result
    document.getElementById('result').innerHTML = "Score: " + score;
}