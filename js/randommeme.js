const meme1 = "https://media2.giphy.com/media/ckGndVa23sCk9pae4l/200.gif"
const meme2 = "https://media.giphy.com/media/BEob5qwFkSJ7G/giphy.gif"
const meme3 = "https://c.tenor.com/nV05aGkCoc4AAAAC/oops-aquaman.gif"
const meme4 = "https://c.tenor.com/nSn7GdwhlhkAAAAM/dr-house-gregory-house.gif"
const meme5 = "https://media0.giphy.com/media/Q8vZZ6kGS1VFm/giphy.gif"
const meme6 = "https://c.tenor.com/DJIr5u3aLUkAAAAd/nice-try-nice-try-joey.gif"
const meme7 = "https://c.tenor.com/vpJKtla333QAAAAM/ok-crying.gif"

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomMeme() {
    let randomInt = randomInteger(1,8)
    switch(randomInt) {
        case 1 :
            return meme1
        case 2 :
            return meme2
        case 3 :
            return meme3
        case 4 :
            return meme4
        case 5 :
            return meme5
        case 6 :
            return meme6
        case 7 :
            return meme7
        default :
            return meme7
    }
}


document.getElementById("memeGif").src=getRandomMeme();
