import {DefaultCrudRepository} from '@loopback/repository';
import {Escuela, EscuelaRelations} from '../models';
import {EscuelaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EscuelaRepository extends DefaultCrudRepository<
  Escuela,
  typeof Escuela.prototype.Id_Escuela,
  EscuelaRelations
> {
  constructor(
    @inject('datasources.Escuela') dataSource: EscuelaDataSource,
  ) {
    super(Escuela, dataSource);
  }
}
