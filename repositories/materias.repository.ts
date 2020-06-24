import {DefaultCrudRepository} from '@loopback/repository';
import {Materias, MateriasRelations} from '../models';
import {EscuelaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MateriasRepository extends DefaultCrudRepository<
  Materias,
  typeof Materias.prototype.Id_Materias,
  MateriasRelations
> {
  constructor(
    @inject('datasources.Escuela') dataSource: EscuelaDataSource,
  ) {
    super(Materias, dataSource);
  }
}
