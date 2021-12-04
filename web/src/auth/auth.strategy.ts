import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback} from 'passport-google-oauth20';

require('dotenv').config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google'){
    constructor(){
        super({
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: 'http://localhost:3000/auth/google',
            scope: ['email', 'profile']
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback)
        : Promise<any> {
            const {name, emails} = profile;
            const user = {
                email: emails[0].value,
                username: name.givenName
            };

            done(null, user);
    }
}