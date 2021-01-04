<script lang="typescript">
    export let audio: HTMLAudioElement;

    let playBtn: HTMLElement;

    function playPause() {
        if (audio.paused) return play();

        pause();
    }
    function play() {
        audio.play();
        playBtn.classList.replace("fa-play", "fa-pause");
        playBtn.setAttribute("title", "Pause");
    }
    function pause() {
        audio.pause();
        playBtn.classList.replace("fa-pause", "fa-play");
        playBtn.setAttribute("title", "Play");
    }
    function prev() {}
    function next() {}
</script>

<style>
    .fas {
        font-size: 30px;
        color: rgb(129, 129, 129);
        cursor: pointer;
        user-select: none;
    }
    .fas:hover {
        filter: brightness(80%);
    }
    .main-button {
        font-size: 40px;
        position: relative;
        top: 3px;
        margin: 0 1rem;
    }
</style>

<div class="player-controls">
    <i class="fas fa-backward" id="prev" title="Previous" on:click={prev} />
    <i
        class="fas fa-play main-button"
        bind:this={playBtn}
        id="play"
        title="Play"
        on:click={playPause} />
    <i class="fas fa-forward" id="next" title="Next" on:click={next} />
</div>
