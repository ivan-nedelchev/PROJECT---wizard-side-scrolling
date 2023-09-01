
function initGameObject(){
    let startScreen = document.getElementById("start-screen")
    let gameScreen = document.querySelector(".game-screen")
    return {
        startScreen, 
        gameScreen,
        createWizard(initialState){
            let wizardElement = document.createElement("div");
            wizardElement.classList.add("wizard")
            wizardElement.style.height = initialState.height + 'px';
            wizardElement.style.width = initialState.width + 'px';
            wizardElement.style.left = initialState.posX + 'px';
            wizardElement.style.top = initialState.posY + 'px'
            wizardElement.style.position = "relative"
            this.wizardElement = wizardElement
            gameScreen.appendChild(wizardElement)
            return wizardElement;
        }
    }
}