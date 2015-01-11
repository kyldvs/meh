/**
 * @providesModule Vector
 * @flow
 */
'use strict';

var Point = require('Point');

class Vector {
  static from() {
    if (!arguments) {
      return null;
    }

    if (arguments.length === 2) {
      return Vector.fromPoints(arguments[0], arguments[1]);
    }

    if (arguments.length === 6) {
      return Vector.fromCoords(
        arguments[0],
        arguments[1],
        arguments[2],
        arguments[3],
        arguments[4],
        arguments[5]
      );
    }
  }

  static fromPoints(u, v) {
    return new Vector(u, v);
  }

  static fromCoords(x1, y1, z1, x2, y2, z2) {
    return new Vector(new Point(x1, y1, z1), new Point(x2, y2, z2));
  }

  constructor(u, v) {
    this.u = u;
    this.v = v;
  }
}

module.exports = Vector;
