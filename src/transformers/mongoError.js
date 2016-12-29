import Transformer from './transformer';

export default class MongoErrorTransformer extends Transformer {

  static transform(mongoError) {
    return {
      code: mongoError.code,
      message: mongoError.errmsg,
    };
  }
}
