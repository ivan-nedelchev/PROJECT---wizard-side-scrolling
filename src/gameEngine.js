function start(state, game) {
    game.createWizard(state.wizard)
    
    window.requestAnimationFrame(timestamp => gameLoop(state, game, timestamp))
}
function gameLoop(state, game, timestamp) {
    let {wizard} = state
    let {wizardElement }= game;
    modifyWizardPosition(state, game)
    ////Spawn fireball
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
    let bugElements =  document.querySelectorAll('.bug');
    let dead = 0;
    bugElements.forEach(bug => {
        let posX = parseInt(bug.style.left) - state.bugStats.bugSpeed;
        if(posX < 0) {
            bug.remove()
        }
        bug.style.left = posX + "px"
        if(checkCollision(bug, wizardElement)) {
            console.log("DEAD");
            document.body.innerHTML = ''
            if(!dead) {
                alert("DEAD. Refresh page to start over")
                dead = 1
            }
        }
    })
    //Render fireballs
    document.querySelectorAll('.fireball').forEach(fireball => {
        let posX = parseInt(fireball.style.left) + state.fireball.speed;
        //Detect collision
        bugElements.forEach(bug => {
            if(checkCollision(bug, fireball)) {
                bug.remove();
                fireball.remove()
            }
        })
        fireball.style.left = posX + "px";
        if(posX > (game.gameScreen.offsetWidth - state.fireball.width)) {
            fireball.remove()
        }
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
function checkCollision(objA, objB) {
    let first = objA.getBoundingClientRect();
    let second= objB.getBoundingClientRect();
    let hasCollision = !(first.top > second.bottom  || first.bottom < second.top || first.right < second.left || first.left > second.right)
    return hasCollision;
}