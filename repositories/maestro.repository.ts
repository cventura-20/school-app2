import {DefaultCrudRepository} from '@loopback/repository';
import {Maestro, MaestroRelations} from '../models';
import {EscuelaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MaestroRepository extends DefaultCrudRepository<
  Maestro,
  typeof Maestro.prototype.Id_Maestro,
  MaestroRelations
> {
  constructor(
    @inject('datasources.Escuela') dataSource: EscuelaDataSource,
  ) {
    super(Maestro, dataSource);
  }
}
