var song = new Audio('http://brocoin.s3.amazonaws.com/turn-down-for-what.ogg');
song.volume = 0.5;

if (typeof song.loop == 'boolean') song.loop = true;
else {
    song.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}
song.play();