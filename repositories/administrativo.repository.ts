import {DefaultCrudRepository} from '@loopback/repository';
import {Administrativo, AdministrativoRelations} from '../models';
import {EscuelaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AdministrativoRepository extends DefaultCrudRepository<
  Administrativo,
  typeof Administrativo.prototype.Id_Admin,
  AdministrativoRelations
> {
  constructor(
    @inject('datasources.Escuela') dataSource: EscuelaDataSource,
  ) {
    super(Administrativo, dataSource);
  }
}
