function flattenCoordinates (coordinates, accumulator = []) {
  if (coordinates) {
    if (coordinates.constructor === Array) {
      if (coordinates.some(coord =>
        coord && coord.constructor === Number)
      ) {
        accumulator.push(coordinates)
      } else {
        coordinates.forEach(coords => {
          accumulator.concat(
            flattenCoordinates(coords, accumulator)
          )
        })
      }
    }
  }
  return accumulator
}

export default flattenCoordinates