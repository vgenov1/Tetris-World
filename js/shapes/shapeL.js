class ShapeL extends Shape {
  constructor(shapeType, startPosition) {
    super();
    this.shapeType = 'L'
    this.startPosition = [{row:startPosition.row,col:startPosition.col},
                          {row:startPosition.row-1,col:startPosition.col},
                          {row:startPosition.row+1,col:startPosition.col},
                          {row:startPosition.row+1,col:startPosition.col+1}];

  }
}
