<style>
    .player-container {
        height: 500px;
        width: 400px;
        background: #eeeeee;
        border-radius: 20px;
        box-shadow: 0 15px 30px 5px rgba(0, 0, 0, 0.3);
    }

    .img-container img {
        border-radius: 20px;
        width: 100%;
        box-shadow: 0 5px 30px 5px rgba(0, 0, 0, 0.5);
    }
</style>

<div class="player-container flex flex-col items-center">
    <div class="img-container">
        <img class="h-full object-cover" src="assets/imgs/jacinto-1.jpg" alt="Album Art" />
    </div>
    <h2 id="title" class="text-xl font-bold">Electric Chill Machine</h2>
    <h4 id="artist">Jacinto</h4>
    <audio src="/assets/tracks/jacinto-1.mp3" controls>
        <track kind="captions" />
    </audio>
</div>
