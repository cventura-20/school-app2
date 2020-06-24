import {DefaultCrudRepository} from '@loopback/repository';
import {Personal, PersonalRelations} from '../models';
import {EscuelaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PersonalRepository extends DefaultCrudRepository<
  Personal,
  typeof Personal.prototype.Id_Personal,
  PersonalRelations
> {
  constructor(
    @inject('datasources.Escuela') dataSource: EscuelaDataSource,
  ) {
    super(Personal, dataSource);
  }
}
