class RockPaperScissors {
    constructor(containerElement){
        /* costruisco i vari componenti che devono interagire */
        this.mainElement = document.createElement('div');
        const title = document.createElement('h2');
        title.textContent = "Your game";
        const button = document.createElement('button');
        button.textContent = "Play!";
        this.mainElement.append(title);
        this.labels = ["Rock", "Paper", "Scissors"]; /*definirla così mi permette di usarla anche negli altri metodi*/
        for (let i = 0; i < 3; i++) {
            const radioButton = document.createElement('input');
            radioButton.setAttribute('type', 'radio');
            radioButton.setAttribute('name', 'choice');
            radioButton.setAttribute('value', this.labels[i]);
            const label = document.createElement('label')
            label.textContent = this.labels[i];
            this.mainElement.append(radioButton);
            this.mainElement.append(label);
            this.mainElement.append(document.createElement('br'));
        }
        this.mainElement.append(button);
        button.addEventListener('click', this.buttonPressed.bind(this));
        this.result = document.createElement('div');
        this.mainElement.append(this.result);
        containerElement.append(this.mainElement);
    }
    randomDraw() {
        const v = Math.floor(3 * Math.random());
        this.opponentChoice = this.labels[v];
    }
    winner(myChoice) {
        for (let i = 0; i < 3; i++) {
            if(myChoice.value == this.labels[i])    {
                if(this.opponentChoice == this.labels[i])  {
                    const title3 = document.createElement('h2');
                    title3.textContent = "Draw";
                    this.result.append(title3);
                }
                else if(this.opponentChoice == this.labels[(i+1)%3])  {
                    const title3 = document.createElement('h2');
                    title3.textContent = "You loose";
                    this.result.append(title3);
                }
                else if(this.opponentChoice == this.labels[(i-1)%3])  {
                    const title3 = document.createElement('h2');
                    title3.textContent = "You win!";
                    this.result.append(title3);
                }
            }
        }
    }
    buttonPressed(event)    {
        const myChoice = this.mainElement.querySelector('input[name="choice"]:checked');
        if (!myChoice)  {
            window.alert("choose one");
        }
        else    {
            this.result.append(document.createElement('hr'));
            const title1 = document.createElement('h2');
            title1.textContent = "Your opponent played:";
            this.result.append(title1);
            this.result.append(document.createElement('br'));
            this.randomDraw();
            const title2 = document.createElement('p2');
            title2.textContent = this.opponentChoice;
            this.result.append(title2);
            this.winner(myChoice);
        }
    }
}
