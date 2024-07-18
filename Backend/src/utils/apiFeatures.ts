import { Query } from 'mongoose';

export default class APIFeatures {
  query: Query<any, any>;
  queryString: { [key: string]: string };

  constructor(query: Query<any, any>, queryString: { [key: string]: string }) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObject = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    //Delete fields we dont want in our queryObject
    excludedFields.forEach((el) => delete queryObject[el]);

    // 1B) Advance filtering
    let queryString = JSON.stringify(queryObject);
    queryString = queryString.replace(
      /\b(gte|gt|le|lte)\b/g,
      (match) => `$${match}`
    );
    this.query = this.query.find(JSON.parse(queryString));

    return this;
  }

  sort() {
    // 2) Sorting
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
      // sort('price ratingAverage')
    } else {
      //sort by default the most recent to last
      this.query = this.query.sort('-createdAt');
    }

    return this;
  }

  limitFields() {
    // 3) Limiting Fields
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v'); // excluding the __v field add by mongodb
    }

    return this;
  }

  paginate() {
    // 4) Pagination
    const page = parseInt(this.queryString.page) || 1; // convert string to number ;
    const limit = parseInt(this.queryString.limit) || 100;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}
