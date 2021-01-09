<script lang="typescript">
    import { createEventDispatcher, onMount } from "svelte";
    import Wave from "@foobar404/wave";

    export let audio: HTMLAudioElement;

    let playBtn: HTMLElement;

    const dispatch = createEventDispatcher();

    audio.addEventListener("ended", () => {
        prevNext("next");
    });

    function togglePlayPause() {
        if (playBtn.classList.contains("fa-play")) {
            playBtn.classList.replace("fa-play", "fa-pause");
            playBtn.setAttribute("title", "Pause");
        } else {
            playBtn.classList.replace("fa-pause", "fa-play");
            playBtn.setAttribute("title", "Play");
        }
    }

    function playPause() {
        if (audio.paused) return play();

        pause();
    }
    function play() {
        audio.play();
        togglePlayPause();
        addVisuals();
    }
    function pause() {
        audio.pause();
        togglePlayPause();
    }
    function prevNext(action: string) {
        dispatch(action, {
            isPaused: audio.paused,
        });
    }
    function addVisuals() {
        const canvas = document.createElement("canvas");
        canvas.style.position = "absolute";
        canvas.style.zIndex = "-1";
        canvas.style.bottom = "0";
        canvas.id = "output";
        canvas.style.opacity = "0.3";
        canvas.height = document.body.clientHeight;
        canvas.width = document.body.clientWidth;

        document.body.appendChild(canvas);

        new Wave().fromElement("track", "output", {
            type: "bars blocks",
            colors: ["rgb(243, 182, 255)"],
        });
    }

    onMount(() => {
        if (!audio.paused && !playBtn.classList.contains("fa-pause")) {
            togglePlayPause();
        }
    });
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
