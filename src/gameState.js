function initState() {
    let startX = Math.floor(Math.random() * 1000);
    let startY = Math.floor(Math.random() * 500);
    let state = {
        player: "Pesho",
        wizard: {
            width: 82,
            height: 100,
            posX : startX,
            posY : startY,
            speed: 15
        },
        keys: {

        }
    }
    return state;
}