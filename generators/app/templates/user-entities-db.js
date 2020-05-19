import GenericDB from './generic-db'

export default class User<%= entityNameCapitalized %>sDB extends GenericDB {
  constructor(userId) {
    super(`users/${userId}/<%= entityName %>s`)
  }

  // Here you can extend User<%= entityNameCapitalized %>sDB with custom methods
}
