import { isInteger, clone } from 'lodash';

export const queryHelpers = function(schema:any) {
  schema.query.paginate = async function(this:typeof schema,page = 1, limit = 10) {
    page = isInteger(+page) ? +page : 1;
    limit = isInteger(+limit) ? +limit : 10;

    const query = clone(this);

    const count = await query.count();
    const payload = {
      pagination: {
        total: count,
        currentPage: page,
        perPage: limit,
        totalPages: Math.ceil(count / limit),
      },
      data: await this.skip((page - 1) * limit).limit(limit),
    };

    return payload;
  };
};
