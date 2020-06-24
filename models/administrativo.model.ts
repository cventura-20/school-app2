import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Administrativo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  Id_Admin?: number;

  @property({
    type: 'string',
    required: true,
  })
  Cargo: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Administrativo>) {
    super(data);
  }
}

export interface AdministrativoRelations {
  // describe navigational properties here
}

export type AdministrativoWithRelations = Administrativo & AdministrativoRelations;
