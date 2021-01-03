<style>
    .fas {
        font-size: 30px;
        color: rgb(129, 129, 129);
        cursor: pointer;
        user-select: none;
    }
    .fas:hover{
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
    <i class="fas fa-backward" id="prev" title="Previous" />
    <i class="fas fa-play main-button" id="play" title="Play" />
    <i class="fas fa-forward" id="next" title="Next" />
</div>
