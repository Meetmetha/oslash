import { UnprocessableEntityException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ShortcutController } from '../controller/controller';
import { ShortcutService } from '../services/service';

jest.mock('../services/service');

describe('ShortcutController', () => {
  let controller: ShortcutController;
  let shortcutService: ShortcutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShortcutController],
      providers: [ShortcutService],
    }).compile();

    controller = module.get<ShortcutController>(ShortcutController);
    shortcutService = module.get<ShortcutService>(ShortcutService);
  });

  it('ShortcutService:getting UserShortcut - should be called', () => {
    const user = {userid:'user-id-from-jwt'};
    const inputs = {
      'search': 'searchQuery', //Search Query to Search
    };
    const returnHits = {
      description: "This is Hira",
      tags: ['jira'],
      _id: 'mongodb-objectid',
      user: 'user-id-from-jwt',
      shortlink: 'jira',
      url: 'https://miteshmetha.com',
      createdAt: 'date',
      uodatedAt: 'date',
      __V: 0
    }
    return shortcutService.getUserShortcut(user,inputs).then((returnedResult) => {
      expect(returnedResult).toBe(returnHits);
    });
  });

  it('should throw empty data', () => {
    const user = {userid:'user-id-from-jwt'};
    const inputs = {
      'search': '', //Empty Search Term
    };
    return shortcutService.getUserShortcut(user,inputs).then((returnedResult) => {
      expect(returnedResult).rejects.toThrow(
        UnprocessableEntityException,
      );
    });
  });


  it('Should Controller to be defined', () => {
    expect(controller).toBeDefined();
  });
});