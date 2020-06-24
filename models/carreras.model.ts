import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Carreras extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  Id_Carreras?: number;

  @property({
    type: 'number',
    required: true,
  })
  Id_Materias: number;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Carreras>) {
    super(data);
  }
}

export interface CarrerasRelations {
  // describe navigational properties here
}

export type CarrerasWithRelations = Carreras & CarrerasRelations;
