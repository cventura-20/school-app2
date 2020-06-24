import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Materias extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  Id_Materias?: number;

  @property({
    type: 'number',
    required: true,
  })
  Id_Carga: number;

  @property({
    type: 'number',
    required: true,
  })
  Id_Maestro: number;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'date',
    required: true,
  })
  Horas_Semana: string;

  @property({
    type: 'string',
    required: true,
  })
  Descripcion: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Materias>) {
    super(data);
  }
}

export interface MateriasRelations {
  // describe navigational properties here
}

export type MateriasWithRelations = Materias & MateriasRelations;
