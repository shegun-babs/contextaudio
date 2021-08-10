class ContextAudio {
    audioContext = null;
    buffer = null;
    source = null;
    playbackTime = 0;
    startTimestamp = 0;
    isPlaying = false;
    bufferDuration = 0;
    
    
    constructor(_audioContext) {
        this.audioContext = _audioContext;
    }
    
    get context() {
        return this.audioContext;
    }
    
    initBuffer(buffer) {
        this.stop();
        this.buffer = buffer;
        this.playbackTime = 0;
    }
}
