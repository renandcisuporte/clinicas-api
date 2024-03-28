import { Test, TestingModule } from '@nestjs/testing';
import { UsersWithUseCaseController } from './users-with-use-case.controller';

describe('UsersWithUseCaseController', () => {
  let controller: UsersWithUseCaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersWithUseCaseController],
      providers: [],
    }).compile();

    controller = module.get<UsersWithUseCaseController>(
      UsersWithUseCaseController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
