
function calculateLove() {
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;
    if (name1 && name2) {
        const loveScore = Math.floor(Math.random() * 100) + 1;
        document.getElementById('result').innerText = `${name1} and ${name2} have a love score of ${loveScore}%!`;
    } else {
        document.getElementById('result').innerText = 'Please enter both names.';
    }
}



