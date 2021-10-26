//trunc removes the decimal point
randomGenerator()
var secreatNumber
function randomGenerator(){
    secreatNumber = Math.trunc(Math.random() * 20)+1
    // document.querySelector('.number').textContent = secreatNumber
    console.log(secreatNumber)
}
var score = 20;
var highScore = 0;



document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').innerHTML = score;
    // document.querySelector('.highscore') = highscore;
    document.querySelector('.number').textContent = '?'
    document.querySelector('body').style.backgroundColor = '#222222'
    document.querySelector('.number').style.width = '15rem'

    randomGenerator()
})



document.querySelector('.number').textContent = '?'





document.querySelector('.check').addEventListener('click', ()=>{
    var choosen = Number(document.querySelector('.guess').value)
    console.log(choosen)


    


    // if there is no number entered in the input
    if (!choosen) {
        document.querySelector('.message').textContent = "No number found!"
    }

    //when player wins the game 
    else if (choosen === secreatNumber) {
        document.querySelector('.message').textContent = "You found the answer 🤩"
        document.querySelector('body').style.backgroundColor = '#3ce23c'
        document.querySelector('.number').textContent = secreatNumber
        document.querySelector('.number').style.width = '30rem'
        if(score > highScore){
        highScore = score; 
        document.querySelector('.highscore').textContent = score;
        }
    }
    //guess is to high
    else if (choosen > secreatNumber) {
        if (score>1) {
            document.querySelector('.message').textContent = "To High!"
            score-- 
            document.querySelector('.score').textContent =score  
        }
        else{
            document.querySelector('.message').textContent = "You losse the game."
            // document.querySelector('.score').textContent =0
        }
    }
    //guess is too low
    else if(choosen < secreatNumber) {
        if (score>1) {
            document.querySelector('.message').textContent = "To Low!"
            score-- 
            document.querySelector('.score').textContent =score  
        }
        else{
            document.querySelector('.message').textContent = "You losse the game."
            document.querySelector('body').style.backgroundColor = '#d32424'
            document.querySelector('.score').textContent =0
        }
    }
});
