import Realm from 'realm'

export class TestJS {}

TestJS.schema = {
  name: 'TestJS',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string'
  }
}
