let initialText = "Hello World";
let gameText = "San Liuk Studios presents: SLK Space.";
let infoText = "San Liuk Space is an action-packed game where players control San Liuk, a unique space duck, on an adventure through a universe full of menacing asteroids. The player's objective is to dodge these obstacles for as long as possible to achieve higher scores. The game's difficulty increases as more and more asteroids appear at faster speeds. Intuitive controls, power-ups, and an immersive soundtrack complement the visually stunning graphics, making it a must-play for arcade and action game fans aiming for the top spots in the global leaderboards.";
let sanLiukArt = `
SSSSSSS        A       NNN    N    L       III  U   U  K    K
S       S     A A      N N   N    L        I   U   U  K   K 
S            A   A     N  N  N    L        I   U   U  K  K  
SSSSSSS     AAAAAA     N   N N    L        I   U   U  KKK   
      S    A       A   N    NN    L        I   U   U  K  K  
S      S  A         A  N     N    L        I   U   U  K   K 
SSSSSSS  A           A N     N    LLLLLL  III  UUUU   K    K

▄▄▄▄▄▄▄ ▄▄▄▄▄▄ ▄▄    ▄    ▄▄▄     ▄▄▄ ▄▄   ▄▄ ▄▄▄   ▄ 
█       █      █  █  █ █  █   █   █   █  █ █  █   █ █ █
█  ▄▄▄▄▄█  ▄   █   █▄█ █  █   █   █   █  █ █  █   █▄█ █
█ █▄▄▄▄▄█ █▄█  █       █  █   █   █   █  █▄█  █      ▄█
█▄▄▄▄▄  █      █  ▄    █  █   █▄▄▄█   █       █     █▄ 
 ▄▄▄▄▄█ █  ▄   █ █ █   █  █       █   █       █    ▄  █
█▄▄▄▄▄▄▄█▄█ █▄▄█▄█  █▄▄█  █▄▄▄▄▄▄▄█▄▄▄█▄▄▄▄▄▄▄█▄▄▄█ █▄█

                                                                                                                                            
`;

console.log(sanLiukArt);

let contentElement = document.getElementById('content');
let nextButton = document.querySelector('.next');
let iosButton = document.querySelector('.ios');
let androidButton = document.querySelector('.android');
let infoButton = document.querySelector('.info');
let iframeElement = document.querySelector('iframe');
let backButton = document.querySelector('.back-button');

function typeEffect(text, callback) {
    let index = 0;
    let cursor = document.createElement('span');
    cursor.classList.add('cursor');
    contentElement.innerHTML = '';
    contentElement.appendChild(cursor);

    function type() {
        if (index < text.length) {
            cursor.before(text.charAt(index));
            index++;
            setTimeout(type, 30);
        } else {
            cursor.style.animation = 'none';
            if (callback) callback();
        }
    }

    type();
}

nextButton.onclick = function() {
    typeEffect(gameText, function() {
        iosButton.style.display = 'block';
        androidButton.style.display = 'block';
        infoButton.style.display = 'block';
        nextButton.style.display = 'none';
    });
};

infoButton.onclick = function() {
    typeEffect(infoText, function() {
        iframeElement.style.display = 'block';
        backButton.style.display = 'block';
        iosButton.style.display = 'none';
        androidButton.style.display = 'none';
        infoButton.style.display = 'none';
    });
};

function backToPrevious() {
    typeEffect(gameText, function() {
        iosButton.style.display = 'block';
        androidButton.style.display = 'block';
        infoButton.style.display = 'block';
        iframeElement.style.display = 'none';
        backButton.style.display = 'none';
    });
}

typeEffect(initialText, function() {
    nextButton.style.display = 'block';
});
