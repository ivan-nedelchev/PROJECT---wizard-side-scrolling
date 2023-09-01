function start(state, game) {
    game.createWizard(state.wizard)
    
    window.requestAnimationFrame(timestamp => gameLoop(state, game, timestamp))
}

function gameLoop(state, game, timestamp) {
    let {wizard} = state
    let {wizardElement }= game;
    
    modifyWizardPosition(state, game)

    ////fireball
    if(state.keys.Space) {
        game.wizardElement.style.backgroundImage = `url(/images/images/wizard-fire.png)`;
        game.createFireball(wizard)
    } else {
        game.wizardElement.style.backgroundImage = `url(/images/images/wizard.png)`;
    }

    
    ////Spawn bug enemies
    if(Number(timestamp) > Number(state.bugStats.lastSpawnTime)) {
        game.createBug(state.bugStats);
        state.bugStats.lastSpawnTime = timestamp + (Math.random() * state.bugStats.maxTimeBetweenSpawns);
    } 
    
    
    ///Render wizard
    wizardElement.style.left = wizard.posX + "px";
    wizardElement.style.top = wizard.posY + "px";
    window.requestAnimationFrame(gameLoop.bind(null, state, game))
    //Render bugs
    document.querySelectorAll('.bug').forEach(bug => {
        let posX = parseInt(bug.style.left) - state.bugStats.bugSpeed;
        if(posX < 0) {
            bug.remove()
        }
        bug.style.left = posX + "px"
    })
    
   
}
function modifyWizardPosition(state, game) {
    let {wizard} = state
    if(state.keys.KeyD) {
        wizard.posX = Math.min(wizard.posX + wizard.horizontalSpeed, game.gameScreen.offsetWidth - wizard.width)
    }
    if(state.keys.KeyA) {
        wizard.posX = Math.max(wizard.posX - wizard.horizontalSpeed, 0)
    }
    if(state.keys.KeyW) {
        wizard.posY = Math.max(wizard.posY - wizard.verticalSpeed, 0)
    }
    if(state.keys.KeyS) {
        wizard.posY = Math.min(wizard.posY + wizard.verticalSpeed, game.gameScreen.offsetHeight - wizard.height)
    }

}