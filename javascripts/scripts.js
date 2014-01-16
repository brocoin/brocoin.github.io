var song = new Audio('http://static.bro-coin.com/turn-down-for-what.ogg');
song.volume = 0.3;
if (typeof song.loop == 'boolean') song.loop = true;
else song.addEventListener('ended', function() { this.currentTime = 0; this.play(); }, false);
song.play();