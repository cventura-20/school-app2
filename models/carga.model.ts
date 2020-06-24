import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Carga extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  Id_Carga?: number;

  @property({
    type: 'string',
    required: true,
  })
  Semestre: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Carga>) {
    super(data);
  }
}

export interface CargaRelations {
  // describe navigational properties here
}

export type CargaWithRelations = Carga & CargaRelations;
