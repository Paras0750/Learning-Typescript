"use strict";
class Instagram {
    constructor(cameraMode, filter, brust) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
    }
}
class Youtube {
    constructor(cameraMode, filter, brust, shorts, stories) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
        this.shorts = shorts;
        this.stories = stories;
    }
    createStory() {
        console.log("Creating story");
    }
}
