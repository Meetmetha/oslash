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

  it('ShortcutService - should be called', () => {
    const user = {userid:'user-id-from-jwt'};
    const inputs = {
      'search': 'searchQuery',
    };
    expect(shortcutService.getUserShortcut(user,inputs)).toHaveBeenCalled();
  });


  it('Should Controller to be defined', () => {
    expect(controller).toBeDefined();
  });
});