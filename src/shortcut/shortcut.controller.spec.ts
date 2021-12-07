import { Test, TestingModule } from '@nestjs/testing';
import { ShortcutController } from './controller/controller';
import { ShortcutService } from '@app/shortcut/services/service';

class ShortcutServiceMock {
  getShortcut(_user: string, _body: string) {
    return {
      shortlink: 'miteshmetha',
      description: "This is description",
      url:"https://miteshmetha.com",
      tags:["Mitesh", "Metha"],
      user:"userid"
    };
  }
}

describe('StudentService', () => {
  let shortcutService: ShortcutService;

  beforeEach(async () => {
    const ShortcutApiServiceProvider = {
      provide: ShortcutService,
      useClass: ShortcutServiceMock,
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShortcutService, ShortcutApiServiceProvider],
    }).compile();

    shortcutService = module.get<ShortcutService>(ShortcutService);
  });

  it('ShortcutService - should be defined', () => {
    expect(shortcutService).toBeDefined();
  });

  describe('getUserShortcut', () => {
    it('should get user shortcut', async () => {
      const expectedShortcutData = 3.8;
      const user = {
        user:"mitesh"
      };
      const inputs = {
        body:"This is body"
      }
      const gpa = await shortcutService.getUserShortcut(user,inputs);
      expect(gpa).toEqual(expectedShortcutData);
    });
  });
});