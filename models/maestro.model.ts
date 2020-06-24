import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Maestro extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id_Maestro?: string;

  @property({
    type: 'number',
    required: true,
  })
  Id_Carga: number;

  @property({
    type: 'number',
    required: true,
  })
  Sueldo_Base: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Maestro>) {
    super(data);
  }
}

export interface MaestroRelations {
  // describe navigational properties here
}

export type MaestroWithRelations = Maestro & MaestroRelations;
