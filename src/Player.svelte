<script lang="typescript">
    import Progress from "./Progress.svelte";
    import Controls from "./Controls.svelte";

    let audio: HTMLAudioElement;
    let currentSongIndex = 0;

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

    function prev() {
        currentSongIndex =
            currentSongIndex - 1 < 0 ? currentSongIndex : currentSongIndex - 1;
    }
    function next() {
        currentSongIndex =
            currentSongIndex + 1 >= songs.length
                ? currentSongIndex
                : currentSongIndex + 1;
    }
</script>

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
        src={`/assets/tracks/${songs[currentSongIndex]['name']}.mp3`}>
        <track kind="captions" />
    </audio>
    {#if audio}
        <Progress {audio} />
        <Controls {audio} on:prev={prev} on:next={next} />
    {/if}
</div>
