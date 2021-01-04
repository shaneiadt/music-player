<script lang="typescript">
    export let audio: HTMLAudioElement;

    console.log(audio);
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
        width: 66%;
        transition: width 0.1s linear;
    }
    .duration-wrapper {
        position: relative;
        top: -25px;
        display: flex;
        justify-content: space-between;
    }
</style>

<div class="progress-container" id="progress-container">
    <div class="progress" id="progress" />
    <div class="duration-wrapper" id="duration-wrapper">
        <span id="current-time">0:00</span>
        <span id="duration">2:06</span>
    </div>
</div>
