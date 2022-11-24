import { Op } from 'sequelize';

class FilterQueryBuilder {
  buildFilterQuery(query: any) {
    const result: any = {};

    Object.keys(query).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(query, key)) {
        const value = query[key];

        // Build query for the multiple operation for one key
        if (typeof value === 'object' && !Array.isArray(value)) {
          result[key] = {};

          if (value.lte) {
            result[key][Op.lte] = value.lte;
          }
          if (value.gte) {
            result[key][Op.gte] = value.gte;
          }
        } else {
          result[key] = value;
        }
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
