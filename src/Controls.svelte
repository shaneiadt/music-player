<script lang="typescript">
    import { createEventDispatcher } from "svelte";
    import Wave from "@foobar404/wave";

    export let audio: HTMLAudioElement;

    let playBtn: HTMLElement;

    const dispatch = createEventDispatcher();

    //TODO: Go to next song when track ends
    audio.addEventListener("ended", () => {
        prevNext("next");
    });

    function playPause() {
        if (audio.paused) return play();

        pause();
    }
    function play() {
        audio.play();
        playBtn.classList.replace("fa-play", "fa-pause");
        playBtn.setAttribute("title", "Pause");

        let wave = new Wave();

        wave.fromElement("track", "output", {
            type: "bars blocks",
            colors: ["#22194D",],
        });
    }
    function pause() {
        audio.pause();
        playBtn.classList.replace("fa-pause", "fa-play");
        playBtn.setAttribute("title", "Play");
    }
    function prevNext(action: string) {
        dispatch(action);
    }
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
    <i
        class="fas fa-backward"
        id="prev"
        title="Previous"
        on:click={() => prevNext('prev')} />
    <i
        class="fas fa-play main-button"
        bind:this={playBtn}
        id="play"
        title="Play"
        on:click={playPause} />
    <i
        class="fas fa-forward"
        id="next"
        title="Next"
        on:click={() => prevNext('next')} />
</div>
