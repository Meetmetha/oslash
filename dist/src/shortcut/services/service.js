"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortcutService = void 0;
const provider_map_1 = require("../provider.map");
const common_1 = require("@nestjs/common");
const addShortcut_1 = require("../Validator/addShortcut");
const removeShortcut_1 = require("../Validator/removeShortcut");
const validator_1 = require("../../../libs/core/src/validator");
const exceptions_1 = require("../../../libs/core/src/exceptions");
const utils_1 = require("../utils");
require('dotenv').config();
let ShortcutService = class ShortcutService {
    constructor(validator, Shortcuts) {
        this.validator = validator;
        this.Shortcuts = Shortcuts;
    }
    async getUserShortcut(user, inputs) {
        if (inputs.search == '' || inputs.search == undefined) {
            const usershortcuts = await this.Shortcuts.getWhere({ user: user._id }, false);
            if (!usershortcuts) {
                throw new common_1.BadRequestException("User haven't created any shortcuts yet");
            }
            return usershortcuts;
        }
        else {
            const search = await utils_1.Meili.searchShortcut(inputs.search, user._id);
            if (search == '' || search == undefined) {
                return [];
            }
            return search.hits;
        }
    }
    async addShortcut(user, inputs) {
        await this.validator.fire(inputs, addShortcut_1.addShortcut);
        const shortcutData = await this.Shortcuts.create({
            user: user._id,
            shortlink: inputs.shortlink,
            url: inputs.url,
            description: inputs.description,
            tags: inputs.tags,
        });
        const newShortcutArray = [];
        newShortcutArray.push(shortcutData);
        await utils_1.Meili.addShortcut(newShortcutArray);
    }
    async removeShortcut(user, inputs) {
        await this.validator.fire(inputs, removeShortcut_1.removeShortcut);
        const userShortcut = await this.Shortcuts.firstWhere({ user: user._id, _id: inputs.shortcutid });
        if (!userShortcut) {
            throw new common_1.BadRequestException("No shortcut Exists with this ID");
        }
        const Shortcutremoval = await this.Shortcuts.deleteWhere({ _id: inputs.shortcutid });
        await utils_1.Meili.deleteShortcut(inputs.shortcutid);
        return Shortcutremoval;
    }
};
ShortcutService = __decorate([
    common_1.Injectable(),
    __param(1, common_1.Inject(provider_map_1.providerMap.SHORTCUT_REPO)),
    __metadata("design:paramtypes", [validator_1.BaseValidator, Object])
], ShortcutService);
exports.ShortcutService = ShortcutService;
//# sourceMappingURL=service.js.map