class Stone {
  constructor() {
    this.newStone();
    this.img = loadImage("../img/stones.png");
  }
  newStone() {
    this.x = Math.floor(random(width));
    this.y = Math.floor(random(height));

    this.x = Math.floor(this.x / GRID_SIZE) * GRID_SIZE;
    this.y = Math.floor(this.y / GRID_SIZE) * GRID_SIZE;
  }
  show() {
    image(this.img, this.x, this.y, GRID_SIZE,GRID_SIZE);
    // fill(201, 0, 195);
    // square(this.x, this.y, GRID_SIZE, GRID_SIZE, GRID_SIZE, GRID_SIZE, 0);
  }
}
