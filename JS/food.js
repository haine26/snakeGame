class Food {
  constructor() {
    this.newFood();
    this.img = loadImage("img/chick.png");
  }
  newFood() {
    this.x = Math.floor(random(width));
    this.y = Math.floor(random(height));

    this.x = Math.floor(this.x / GRID_SIZE) * GRID_SIZE;
    this.y = Math.floor(this.y / GRID_SIZE) * GRID_SIZE;
  }
  show() {
    image(this.img, this.x, this.y, GRID_SIZE,GRID_SIZE);

    // rect(this.x, this.y, GRID_SIZE, GRID_SIZE);
    // square(this.x, this.y, GRID_SIZE, GRID_SIZE, GRID_SIZE, GRID_SIZE, GRID_SIZE);
  }
}
