import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth2';
import { AuthService } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly authService: AuthService) {
    super({
      clientID:
        '616263256018-dkmfp8092hgd1tav8f1n1r8oplg993fj.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:4000/auth/glogin',
      passReqToCallback: true,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile,
    email,
    done: Function,
  ) {
    try {
      console.log('Profile', profile);

      const jwt: string = ''; //await this.authService.validateOAuthLogin(
      //     profile.id,
      //     Provider.GOOGLE,
      //   );
      console.log('JWT', jwt);
      const user = {
        jwt,
      };

      return user;
    } catch (err) {
      console.log(err);
    }
  }
}
