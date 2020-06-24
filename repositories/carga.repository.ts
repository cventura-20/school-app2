import {DefaultCrudRepository} from '@loopback/repository';
import {Carga, CargaRelations} from '../models';
import {EscuelaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CargaRepository extends DefaultCrudRepository<
  Carga,
  typeof Carga.prototype.Id_Carga,
  CargaRelations
> {
  constructor(
    @inject('datasources.Escuela') dataSource: EscuelaDataSource,
  ) {
    super(Carga, dataSource);
  }
}
