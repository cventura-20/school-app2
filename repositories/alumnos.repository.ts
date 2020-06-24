import {DefaultCrudRepository} from '@loopback/repository';
import {Alumnos, AlumnosRelations} from '../models';
import {EscuelaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AlumnosRepository extends DefaultCrudRepository<
  Alumnos,
  typeof Alumnos.prototype.Id_Alumno,
  AlumnosRelations
> {
  constructor(
    @inject('datasources.Escuela') dataSource: EscuelaDataSource,
  ) {
    super(Alumnos, dataSource);
  }
}
