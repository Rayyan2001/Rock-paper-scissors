
    let choices = document.querySelectorAll(".images")
    let userCount = document.querySelector('#user')
    let compCount = document.querySelector('#comp')
    let totalCount = document.querySelector('#total')
    let drawsCount = document.querySelector('#draw')
    let msg = document.querySelector("#msg")
    let resetBtn = document.querySelector("#reset-btn")


    let userScore = 0
    let compScore = 0
    let roundCount = 0
    let drawCount = 0

    const genCompChoice = () => {
        let option = ["rock", "paper", "scissors"]
        let compGuess = Math.floor((Math.random()) * 3)
        return option[compGuess]
    }

    const drawGame = () => {
       
        msg.innerText = "Game was draw. Play Again!!!"
        msg.style.backgroundColor = "gray"

    }

    const playGame = (userChoice) => {

        
        console.log("User choice =", userChoice);

        //Computer choice (rock, paper, scissor)
        const compChoice = genCompChoice()
        console.log("Computer choice =", compChoice);
        updateRoundCount();
        if (userChoice === compChoice) {
            updateDrawCount();
            drawGame()

        }
        else {
            let userWin = true

            if (userChoice === "rock") {
                userWin = compChoice === "paper" ? false : true
            }

            else if (userChoice === "paper") {
                userWin = compChoice === "scissors" ? false : true
            }

            else {
                userWin = compChoice === "rock" ? false : true
            }

            showWinner(userWin, userChoice, compChoice)



        }
    }

    const showWinner = (userWin, userChoice, compChoice) => {

        if (userWin) {
            userScore++
            msg.innerText = `You win. ${userChoice} beats ${compChoice}`
            msg.style.backgroundColor = "green"
            userCount.innerText = userScore
        }
        else {
            compScore++
            msg.innerText = `Computer win. ${compChoice} beats ${userChoice}`
            msg.style.backgroundColor = "red"
            compCount.innerText = compScore
        }

    }

    const updateRoundCount = () => {
        roundCount++
        totalCount.innerText = roundCount
    }

    const updateDrawCount = () => {
        drawCount++
        drawsCount.innerText = drawCount
    }

    choices.forEach((choice) => {
        choice.addEventListener("click", () => {

            const userChoice = choice.getAttribute("id");
            playGame(userChoice)
        });

    })

    const resetGame = () => {
        msg.innerText = "Choose ur choice"
        msg.style.backgroundColor = "black"
        userCount.innerText = 0
        compCount.innerText = 0
        totalCount.innerText = 0
        drawsCount.innerText = 0
        userScore = 0
        compScore = 0
        roundCount = 0
        drawCount = 0
    }

    resetBtn.addEventListener("click", resetGame)
