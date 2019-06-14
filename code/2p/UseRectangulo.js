const Point = require('../Programas/PA/Point2')

const Rectangulo =  require('../Programas/PA/Rectangulo')

let p1 = new Point(6,9);
let p2 = new Point(8,8);

let rectanguloPapu = new Rectangulo(p1,p2)

rectanguloPapu.toString()