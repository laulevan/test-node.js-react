function getNumberOfLayers(rug) {
  return [...new Set(rug)].length;
}

module.exports = getNumberOfLayers;