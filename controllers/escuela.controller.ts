import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Escuela} from '../models';
import {EscuelaRepository} from '../repositories';

export class EscuelaController {
  constructor(
    @repository(EscuelaRepository)
    public escuelaRepository : EscuelaRepository,
  ) {}

  @post('/escuelas', {
    responses: {
      '200': {
        description: 'Escuela model instance',
        content: {'application/json': {schema: getModelSchemaRef(Escuela)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Escuela, {
            title: 'NewEscuela',
            exclude: ['id'],
          }),
        },
      },
    })
    escuela: Omit<Escuela, 'id'>,
  ): Promise<Escuela> {
    return this.escuelaRepository.create(escuela);
  }

  @get('/escuelas/count', {
    responses: {
      '200': {
        description: 'Escuela model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Escuela) where?: Where<Escuela>,
  ): Promise<Count> {
    return this.escuelaRepository.count(where);
  }

  @get('/escuelas', {
    responses: {
      '200': {
        description: 'Array of Escuela model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Escuela, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Escuela) filter?: Filter<Escuela>,
  ): Promise<Escuela[]> {
    return this.escuelaRepository.find(filter);
  }

  @patch('/escuelas', {
    responses: {
      '200': {
        description: 'Escuela PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Escuela, {partial: true}),
        },
      },
    })
    escuela: Escuela,
    @param.where(Escuela) where?: Where<Escuela>,
  ): Promise<Count> {
    return this.escuelaRepository.updateAll(escuela, where);
  }

  @get('/escuelas/{id}', {
    responses: {
      '200': {
        description: 'Escuela model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Escuela, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Escuela, {exclude: 'where'}) filter?: FilterExcludingWhere<Escuela>
  ): Promise<Escuela> {
    return this.escuelaRepository.findById(id, filter);
  }

  @patch('/escuelas/{id}', {
    responses: {
      '204': {
        description: 'Escuela PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Escuela, {partial: true}),
        },
      },
    })
    escuela: Escuela,
  ): Promise<void> {
    await this.escuelaRepository.updateById(id, escuela);
  }

  @put('/escuelas/{id}', {
    responses: {
      '204': {
        description: 'Escuela PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() escuela: Escuela,
  ): Promise<void> {
    await this.escuelaRepository.replaceById(id, escuela);
  }

  @del('/escuelas/{id}', {
    responses: {
      '204': {
        description: 'Escuela DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.escuelaRepository.deleteById(id);
  }
}
