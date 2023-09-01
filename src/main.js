let state = initState();
let game = initGameObject() ;
let availableKeys = ["KeyA", "KeyW", "KeyS", "KeyD"]
document.addEventListener("keydown", (e) => {
    if(availableKeys.includes(e.code)) {
        state.keys[e.code] = true;
    }
})
document.addEventListener("keyup", (e) => {
    if(availableKeys.includes(e.code)) {
        state.keys[e.code] = false;
    }
})
game.startScreen.addEventListener("click", () => {

    game.startScreen.classList.add("hidden");
    game.gameScreen.classList.remove("hidden");


    start(state, game);
})