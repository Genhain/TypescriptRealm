import { ObjectSchema, ObjectPropsType } from 'realm'

export class Test implements ObjectPropsType {
	public static schema: ObjectSchema = {
		name: 'Test',
		primaryKey: 'id',
		properties: {
			id: 'int',
			name: 'string'
		}
	}

	public id: number
	public name: string

	constructor(id: number, name: string) {
		this.id = id
		this.name = name
	}
}
