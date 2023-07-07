abstract class TakePhoto2 {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepiaFilter(): void;

  getReelTime(): number {
    return 15;
  }
}

class Instagramm extends TakePhoto2 {
  constructor(
    public cameraMode: string,
    public filter: string,
    public brust: number
  ) {
    super(cameraMode, filter);
  }

  getSepiaFilter(): void {
    console.log("Got Sepia Filter");
  }
}
const pn = new Instagramm("portrait", "normal", 10);
