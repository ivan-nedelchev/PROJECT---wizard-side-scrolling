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
        bugStats: {
            width: 50,
            height: 50,
            maxTimeBetweenSpawns: 2000,
            lastSpawnTime: 0
        },
        keys: {
            KeyA: false,
            KeyS: false,
            KeyD: false,
            KeyW: false
        }
    }
    return state;
}