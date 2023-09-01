function start(state, game) {
    game.createWizard(state.wizard)
    
    window.requestAnimationFrame(timestamp => gameLoop(state, game, timestamp))
}

function gameLoop(state, game, timestamp) {
    let {wizard} = state
    let {wizardElement }= game;
    
    modifyWizardPosition(state, game)
    ////spawn bug enemies
    
    if(Number(timestamp) > Number(state.bugStats.lastSpawnTime)) {
        game.createBug(state.bugStats);
        state.bugStats.lastSpawnTime = timestamp + (Math.random() * state.bugStats.maxTimeBetweenSpawns);
    } 
         
    
    ///render
    
    wizardElement.style.left = wizard.posX + "px";
    wizardElement.style.top = wizard.posY + "px";
    window.requestAnimationFrame(gameLoop.bind(null, state, game))
    //
}
function modifyWizardPosition(state, game) {
    
    let {wizard} = state
    if(state.keys.KeyD) {
        wizard.posX = Math.min(wizard.posX + wizard.speed, game.gameScreen.offsetWidth - wizard.width)
    }
    if(state.keys.KeyA) {
        wizard.posX = Math.max(wizard.posX - wizard.speed, 0)
    }
    if(state.keys.KeyW) {
        wizard.posY = Math.max(wizard.posY - wizard.speed, 0)
    }
    if(state.keys.KeyS) {
        wizard.posY = Math.min(wizard.posY + wizard.speed, game.gameScreen.offsetHeight - wizard.height)
    }

}