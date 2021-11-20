"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortcutModule = void 0;
const common_1 = require("@nestjs/common");
const provider_1 = require("./provider");
const controller_1 = require("./controller/controller");
const mongoose_1 = require("@nestjs/mongoose");
const models_1 = require("./models");
const service_1 = require("./services/service");
const provider_map_1 = require("./provider.map");
const database_1 = require("./repositories/database");
const sessionChecker_1 = require("../auth/sessionChecker");
const auth_service_1 = require("../auth/auth.service");
const auth_1 = require("../auth");
let ShortcutModule = class ShortcutModule {
};
ShortcutModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature(models_1.getModels(), 'database')],
        controllers: [controller_1.ShortcutController],
        providers: provider_1.getProviders(),
        exports: [
            {
                provide: provider_map_1.providerMap.SHORTCUT_REPO,
                useClass: database_1.ShortcutRepository,
            },
            service_1.ShortcutService,
        ],
    })
], ShortcutModule);
exports.ShortcutModule = ShortcutModule;
//# sourceMappingURL=index.js.map