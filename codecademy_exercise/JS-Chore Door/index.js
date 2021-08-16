let doorImage1 = document.querySelector('#door1');
let doorImage2 = document.querySelector('#door2');
let doorImage3 = document.querySelector('#door3');
let startButton = document.querySelector('#start')

let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg"
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg"
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg"

let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg"
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
//gameover 的話會變false
let currentlyPlaying = true;
//ROBOT 的話
const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
}
const isClicked = (door) => {
        if (door.src === closedDoorPath) {
            return false;
        } else {
            return true;
        }
    }
    //COUNT 仲有冇得玩 玩到0 就WIN
const playDoor = (door) => {
        numClosedDoors--;
        if (numClosedDoors === 0) {
            gameOver('win')
        } else if (isBot(door)) {
            gameOver('lose')
        }
    }
    //SET random
const randomChoreDoorGenerator = () => {
        choreDoor = Math.floor(Math.random() * numClosedDoors);
        if (choreDoor === 0) {
            openDoor1 = botDoorPath
            openDoor2 = beachDoorPath
            openDoor3 = spaceDoorPath
        } else if (choreDoor === 1) {
            openDoor2 = botDoorPath
            openDoor3 = beachDoorPath
            openDoor1 = spaceDoorPath
        } else if (choreDoor === 2) {
            openDoor3 = botDoorPath
            openDoor1 = beachDoorPath
            openDoor2 = spaceDoorPath
        }
    }
    //因為有! 所以currentlyPlaying 係TRUE 既話就RUN 下面個兩樣
    //end game 冇得㩒係因為&& 所以冇RUN 落去
door1.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(door1)
    }

}
door2.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor(door2)
    }

}
door3.onclick = () => {
        if (currentlyPlaying && !isClicked(doorImage3)) {
            doorImage3.src = openDoor3;
            playDoor(door3)
        }

    }
    //
startButton.onclick = () => {
    if (!currentlyPlaying) {
        startRound();
    }

}

const startRound = () => {
        door1.src = closedDoorPath;
        door2.src = closedDoorPath;
        door3.src = closedDoorPath;
        numClosedDoors = 3
        currentlyPlaying = true;
        startButton.innerHTML = 'Good Luck!'
        randomChoreDoorGenerator()
    }
    //gameover 條件
const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?';
    } else {
        startButton.innerHTML = 'Game over! Play again?'
    }
    currentlyPlaying = false
}
startRound()