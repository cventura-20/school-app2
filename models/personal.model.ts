import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Personal extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  Id_Personal?: number;

  @property({
    type: 'number',
    required: true,
  })
  Id_Maestro: number;

  @property({
    type: 'number',
    required: true,
  })
  Id_Admin: number;

  @property({
    type: 'string',
    required: true,
  })
  No_Identidad: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Direccion: string;

  @property({
    type: 'number',
    required: true,
  })
  Telefono: number;

  @property({
    type: 'string',
    required: true,
  })
  Nivel_Estudios: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Personal>) {
    super(data);
  }
}

export interface PersonalRelations {
  // describe navigational properties here
}

export type PersonalWithRelations = Personal & PersonalRelations;
