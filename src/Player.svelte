<script lang="typescript">
    import { tick, onMount } from "svelte";
    import Progress from "./Progress.svelte";
    import Controls from "./Controls.svelte";
    import BIRDS from "vanta/dist/vanta.birds.min.js";

    let audio: HTMLAudioElement;
    let vanta: HTMLDivElement | any;

    let currentSongIndex = 0;
    let loaded = false;

    const songs = [
        {
            name: "jacinto-1",
            title: "Electric Chill Machine",
            artist: "Jacinto Design",
        },
        {
            name: "jacinto-2",
            title: "Seven Nation Army (Remix)",
            artist: "Jacinto Design",
        },
        {
            name: "jacinto-3",
            title: "Goodnight, Disco Queen",
            artist: "Jacinto Design",
        },
        {
            name: "metric-1",
            title: "Front Row (Remix)",
            artist: "Metric/Jacinto Design",
        },
    ];

    async function prev(e: { detail: { isPaused: boolean } }) {
        if (currentSongIndex - 1 >= 0) {
            const {
                detail: { isPaused },
            } = e;

            loaded = false;
            currentSongIndex = currentSongIndex - 1;

            await tick();
            audio.load();

            if (!isPaused) audio.play();
        }
    }
    async function next(e: { detail: { isPaused: boolean } }) {
        if (currentSongIndex + 1 < songs.length) {
            const {
                detail: { isPaused },
            } = e;

            loaded = false;
            currentSongIndex =
                currentSongIndex + 1 >= songs.length
                    ? currentSongIndex
                    : currentSongIndex + 1;

            await tick();
            audio.load();

            if (!isPaused) audio.play();
        }
    }

    onMount(() => {
        vanta = BIRDS({
            el: vanta,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            birdSize: 1.4,
            wingSpan: 38.0,
            separation: 50.0,
            alignment: 15.0,
            cohesion: 88.0,
            backgroundColor: 0xf3f3f3,
        });
    });
</script>

<div
    id="background"
    bind:this={vanta}
    style="height:100vh;width:100vw;position:absolute;z-index:-2;" />
<div
    class="player-container flex flex-col items-center shadow-xl rounded-xl bg-gray-100 w-auto h-auto px-1 px-8 pb-8">
    <div class="img-container relative -top-25 w-64 h-64">
        <img
            class="h-full object-cover shadow-md rounded-lg w-full"
            src={`assets/imgs/${songs[currentSongIndex]['name']}.jpg`}
            alt="Album Art" />
    </div>
    <h2 id="title" class="text-xl font-bold">
        {songs[currentSongIndex]['title']}
    </h2>
    <h4 id="artist" class="text-lg">{songs[currentSongIndex]['artist']}</h4>
    <audio
        bind:this={audio}
        on:loadeddata={() => (loaded = true)}
        id="track"
        src={`/assets/tracks/${songs[currentSongIndex]['name']}.mp3`}>
        <track kind="captions" />
    </audio>
    {#if loaded}
        <Progress {audio} />
        <Controls {audio} on:prev={prev} on:next={next} />
    {:else}
        <div class="animate-spin"><i class="fas fa-spinner" /></div>
    {/if}
</div>
