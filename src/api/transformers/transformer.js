export default class Transformer {
  static transformCollection(items) {
    return items.map(Transformer.transform);
  }
  static transform() {
    throw new Error('transform not defined');
  }
}
