class Snake {
  constructor() {
    this.vel = createVector(1, 0);
    this.head = createVector(
      Math.floor(random(0)),
      Math.floor(random(HEIGHT / GRID_SIZE)) * GRID_SIZE
    );
    this.length = 3;
    this.body = [];
    this.isDead = false;
    this.score = 0;
  }
  update() {
    this.body.push(createVector(this.head.x, this.head.y));

    this.head.x += this.vel.x * GRID_SIZE;
    this.head.y += this.vel.y * GRID_SIZE;

    this.head.x = (this.head.x + WITDH) % WITDH;
    this.head.y = (this.head.y + HEIGHT) % HEIGHT;

    if (this.length < this.body.length) {
      this.body.shift();
    }

    for (let vector of this.body) {
      if (vector.x == this.head.x && vector.y == this.head.y) {
        this.isDead = true;
      }
    }
    if (this.head.x == stone.x && this.head.y == stone.y) {
      this.isDead = true;
    }
   
  }
  show() {
    noStroke();
    // Draw snake head
    fill(0, 105, 146);
    rect(this.head.x, this.head.y, GRID_SIZE, GRID_SIZE);
    // square(this.head.x, this.head.y, GRID_SIZE,GRID_SIZE, 0, GRID_SIZE, 0);

    // Draw snake body
    fill(34, 130, 164);
    for (let vector of this.body) {
      rect(vector.x, vector.y, GRID_SIZE, GRID_SIZE);
    }
  }
}
