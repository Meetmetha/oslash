import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthService } from '../auth.service';
import { ShortcutService } from '@app/shortcut/services/service';
import { Unauthorized } from '@libs/core/exceptions';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private config: ConfigService, private service: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('auth.jwt.secret')
    });
  }

  /**
   * Validate the payload received from the token.
   * @param payload
   */
  async validate(payload: any) {
    try {
      const userdata = await this.service.getUserById(payload.sub);
      return userdata;
    } catch (e) {
      throw new Unauthorized();
    }
  }
}
