import { Op } from 'sequelize';

const OPERATORS = {
  lt: Op.lt,
  gt: Op.gt,
  lte: Op.lte,
  gte: Op.gte,
  in: Op.in,
  between: Op.between,
};

class SequelizeQueryBuilder {
  static buildFilterQuery(query: Record<string, any>) {
    const result: Record<string, any> = {};

    Object.entries(query).forEach(([key, value]) => {
      if (typeof value === 'object' && !Array.isArray(value)) {
        result[key] = {};

        Object.entries(value).forEach(([op, val]) => {
          result[key][Op[op as keyof typeof Op]] = val;
        });

        return;
      }

      result[key] = value;
    });

    return result;
  }

  static buildSortQuery(query?: string) {
    if (!query) {
      return null;
    }

    const [field, order] = query.startsWith('-') ? [query.slice(1), 'DESC'] : [query, 'ASC'];
    return [[field, order]];
  }
}

export default SequelizeQueryBuilder;
