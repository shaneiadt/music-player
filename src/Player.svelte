<script lang="typescript">
    import Progress from "./Progress.svelte";
    import Controls from "./Controls.svelte";

    let audio: HTMLAudioElement;
</script>

<div
    class="player-container flex flex-col items-center shadow-xl rounded-xl bg-gray-100 w-auto h-auto px-1 px-8 pb-8">
    <div class="img-container relative -top-25 w-64 h-64">
        <img
            class="h-full object-cover shadow-md rounded-lg w-full"
            src="assets/imgs/jacinto-1.jpg"
            alt="Album Art" />
    </div>
    <h2 id="title" class="text-xl font-bold">Electric Chill Machine</h2>
    <h4 id="artist" class="text-lg">Jacinto</h4>
    <audio bind:this={audio} src="/assets/tracks/jacinto-1.mp3">
        <track kind="captions" />
    </audio>
    <Progress />
    <Controls audio={audio} />
</div>
