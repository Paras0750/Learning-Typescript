interface TakePhoto {
  cameraMode: string;
  filter: string;
  brust: number;
}

interface Stories {
  stories: number;
  createStory(): void;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public brust: number
  ) {}
}

class Youtube implements TakePhoto, Stories {

  constructor(
    public cameraMode: string,
    public filter: string,
    public brust: number,
    public shorts: number,
    public stories: number
  ) {}

  createStory(): void {
    console.log("Creating story");
  }
}
