import { Test, TestingModule } from '@nestjs/testing';
import { AuthWithUseCaseController } from './auth-with-use-case.controller';

describe('AuthWithUseCaseController', () => {
  let controller: AuthWithUseCaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthWithUseCaseController],
    }).compile();

    controller = module.get<AuthWithUseCaseController>(
      AuthWithUseCaseController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
