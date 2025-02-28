// Surface Area and Volume of a Box

/* Write a function that returns the total surface area and volume of a box as an array: [area, volume] */

/* Напишите функцию, которая возвращает общую площадь поверхности и объём коробки в виде массива: [area, volume] */
/*
S = 2(ac + bc + ab) - площадь поверхности
V = a*b*c
*/

function getAreaAndVolume(a, b, c) {
    let arr = []
    let S = 2*(a*c + b*c + a*b)
    let V = a * b * c
    arr.push(S)
    arr.push(V)
    return arr
}

let result = getAreaAndVolume(5, 3, 4)
console.log(result);


/*
function getSize(width, height, depth){
  var box = { width: width, height:height, depth:depth};
  
  return [getArea(box), getVolume(box)];
}


function getArea(box){
  return (2 * (box.depth * box.height)) + (2 * (box.width * box.height)) + (2 * (box.width * box.depth));
}

function getVolume(box){
  return box.width * box.height * box.depth;
}
*/

/**
 * const getSize = (width, height, depth) => [(width * height + width * depth + height * depth) * 2, width * height * depth];
 */

/**
 * function getSize(w, h, d){
	var area = (2*d*h) + (2*w*h) + (2*d*w);
	var volume = d*w*h;
  return [area, volume];
}
 */
