import { Op } from "sequelize";

const OPERATOR = {
  lte: Op.lte,
  gte: Op.gte,
  lt: Op.lt,
  gt: Op.gt,
  in: Op.in,
  like: Op.like,
};

type OpType = keyof typeof OPERATOR;

class QueryBuilder {
  static buildFilterQuery(filterQuery: Object) {
    let result: any = {};

    for (const key in filterQuery) {
      // retrieve key-value
      let value: any | string = filterQuery[key as keyof typeof filterQuery];

      // convert object into given operator such as 'price[gte]', 'price[lte]'
      if (typeof value === "object" && !Array.isArray(value)) {
        result[key] = {};
        for (const op in value) {
          result[key][OPERATOR[op as OpType]] = value[op];
        }
        continue;
      }

      // convert array into 'in' operator
      if (Array.isArray(value)) {
        result[key] = {};
        result[key][Op.in] = value;
        continue;
      }

      // convert into 'like' operator
      if (
        typeof value === "string" &&
        value.charAt(0) == "%" &&
        value.charAt(value.length - 1) == "%"
      ) {
        value = value.replace(/^%/, ""); // 시작이 %면, 제거
        value = value.replace(/%$/, ""); // 마지막이 %면, 제거
        value = decodeURIComponent(value);
        value = "%" + value + "%";
        result[key] = { [Op.like]: value };
        continue;
      }

      // convert into default equal operator
      result[key] = value;
    }

    return result;
  }

  static buildSortQuery(sortQuery: string) {
    if (!sortQuery) {
      return null;
    }

    if (sortQuery.charAt(0) == "-") {
      return [[sortQuery.split("-")[1], "DESC"]];
    } else {
      return [[sortQuery, "ASC"]];
    }
  }
}
export default QueryBuilder;
