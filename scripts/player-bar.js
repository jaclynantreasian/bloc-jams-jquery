{
    $('button#play-pause').on('click', function(){
        player.playPause();
        $(this).attr('playState', player.playState);
        $('button#play-pause').attr('playState', player.playState)
        $('button#next').on('click', function(){
            if(player.playState !== 'playing') { return }
            const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
            const nextSongIndex = currentSongIndex + 1;
            if (nextSongIndex>= album.songs.length) { return; }
            const nextSong = album.songs[nextSongIndex];
            player.playPause(nextSong);
        });
    });
}

$('button#previous').on('click', function(){
    //previous and next track only respond when a song is currently currentlyPlaying

    if (player.playState !== 'playing') { return; }

    // previous track button plays the previous song on the Album
        const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
        const prevSongIndex = currentSongIndex - 1;

        //previous track button doesn't respond if there is no previous song
        if (prevSongIndex <= album.songs.length) { return; }

        const prevSong = album.songs[prevSongIndex];
        player.playPause(prevSong);

});
