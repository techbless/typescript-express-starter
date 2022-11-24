import { Op } from 'sequelize';

const OPERATOR = {
  lt: Op.lt,
  gt: Op.gt,
  lte: Op.lte,
  gte: Op.gte,
  in: Op.in,
  between: Op.between,
};

type OpType = keyof typeof OPERATOR;

class FilterQueryBuilder {
  buildFilterQuery(query: any) {
    const result: any = {};

    Object.keys(query).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(query, key)) {
        const value = query[key];

        // Build query for the multiple operation for one key
        if (typeof value === 'object' && !Array.isArray(value)) {
          result[key] = {};

          Object.keys(value).forEach((op) => {
            result[key][OPERATOR[op as OpType]] = value[op];
          });

          return;
        }

        result[key] = value;
      }
    });

    return result;
  }

  buildSortQuery(query: string) {
    if (!query) {
      return null;
    }

    if (query.charAt(0) == '-') {
      return [[query.split('-')[1], 'DESC']];
    }

    return [[query, 'ASC']];
  }
}

export default new FilterQueryBuilder();
