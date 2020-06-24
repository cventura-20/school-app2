import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Escuela extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  Id_Escuela?: number;

  @property({
    type: 'number',
    required: true,
  })
  Id_Personal: number;

  @property({
    type: 'number',
    required: true,
  })
  Id_Carrera: number;

  @property({
    type: 'number',
    required: true,
  })
  Id_Alumno: number;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Director: string;

  @property({
    type: 'string',
    required: true,
  })
  Direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  Telefono: string;

  @property({
    type: 'string',
    required: true,
  })
  Registro_Sep: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Escuela>) {
    super(data);
  }
}

export interface EscuelaRelations {
  // describe navigational properties here
}

export type EscuelaWithRelations = Escuela & EscuelaRelations;
