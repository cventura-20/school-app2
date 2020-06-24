import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Alumnos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  Id_Alumno?: number;

  @property({
    type: 'number',
    required: true,
  })
  Id_Carrera: number;

  @property({
    type: 'number',
    required: true,
  })
  Id_Carga: number;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  A_Paterno: string;

  @property({
    type: 'string',
    required: true,
  })
  A_Materno: string;

  @property({
    type: 'string',
    required: true,
  })
  Direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  Matricula: string;

  @property({
    type: 'number',
    required: true,
  })
  Telefono: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Alumnos>) {
    super(data);
  }
}

export interface AlumnosRelations {
  // describe navigational properties here
}

export type AlumnosWithRelations = Alumnos & AlumnosRelations;
