import { Transformer } from '@libs/core';

export class ShortcutTransformer extends Transformer {

  async transform(
    Shortcut: Record<string, any>,
  ): Promise<Record<string, any> | null> {
    return {
      shortcutId: Shortcut._id,
      shortcutlink: Shortcut.shortlink,
      description: Shortcut.description,
      url: Shortcut.url,
      tags : Shortcut.tags,
    };
  }
}
