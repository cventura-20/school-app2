import {DefaultCrudRepository} from '@loopback/repository';
import {Carreras, CarrerasRelations} from '../models';
import {EscuelaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CarrerasRepository extends DefaultCrudRepository<
  Carreras,
  typeof Carreras.prototype.Id_Carreras,
  CarrerasRelations
> {
  constructor(
    @inject('datasources.Escuela') dataSource: EscuelaDataSource,
  ) {
    super(Carreras, dataSource);
  }
}
