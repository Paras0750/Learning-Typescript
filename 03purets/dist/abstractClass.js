"use strict";
class TakePhoto2 {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 15;
    }
}
class Instagramm extends TakePhoto2 {
    constructor(cameraMode, filter, brust) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
    }
    getSepiaFilter() {
        console.log("Got Sepia Filter");
    }
}
const pn = new Instagramm("portrait", "normal", 10);
