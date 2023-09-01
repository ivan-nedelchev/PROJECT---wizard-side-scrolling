
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
        },
        createBug(initialBugStats){
            let bugElement = document.createElement("div");
            bugElement.classList.add("bug");
            bugElement.style.width = initialBugStats.width + "px";
            bugElement.style.height = initialBugStats.height + "px";
            bugElement.style.left = gameScreen.offsetWidth - initialBugStats.width + "px";
            bugElement.style.top = Math.floor(Math.random() * (gameScreen.offsetHeight - initialBugStats.height)) + "px"
            gameScreen.appendChild(bugElement)
        }
    }
}