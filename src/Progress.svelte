<script lang="typescript">
    import { onMount } from "svelte";
    export let audio: HTMLAudioElement;

    let progress: HTMLDivElement;
    let runningTime = "-";
    let trackDuration = "-";

    audio.addEventListener("timeupdate", (event) => {
        setTrackData(event.target as HTMLAudioElement);
    });

    function setTrackData(track: HTMLAudioElement) {
        if (!progress) return;

        const { duration, currentTime } = track;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;

        const minutes = Math.floor(duration / 60);
        let seconds = Math.floor(duration % 60);

        if (seconds) {
            trackDuration = `${minutes}:${
                seconds < 10 ? `0${seconds}` : seconds
            }`;
        }

        const currentMins = Math.floor(currentTime / 60);
        let currentSecs = Math.floor(currentTime % 60);

        if (seconds) {
            runningTime = `${currentMins}:${
                currentSecs < 10 ? `0${currentSecs}` : currentSecs
            }`;
        }
    }

    function setProgressBar(e: MouseEvent) {
        const { offsetX } = e;
        const { clientWidth } = e.target as HTMLElement;
        const { duration } = audio;

        audio.currentTime = (offsetX / clientWidth) * duration;
    }

    onMount(() => {
        setTrackData(audio);
    });
</script>

<style>
    .progress-container {
        background: #fff;
        border-radius: 5px;
        cursor: pointer;
        margin: 1.5rem 1rem;
        height: 4px;
        width: 90%;
    }
    .progress {
        background: #242323;
        border-radius: 5px;
        height: 100%;
        width: 0%;
        transition: width 0.1s linear;
    }
    .duration-wrapper {
        position: relative;
        top: -25px;
        display: flex;
        justify-content: space-between;
    }
</style>

<div
    class="progress-container"
    id="progress-container"
    on:click={setProgressBar}>
    <div class="progress" id="progress" bind:this={progress} />
    <div class="duration-wrapper" id="duration-wrapper">
        <span id="current-time">{runningTime}</span>
        <span id="duration">{trackDuration}</span>
    </div>
</div>
