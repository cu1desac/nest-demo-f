import { Global, Module, Provider } from '@nestjs/common';
import { getModelForClass, mongoose } from '@typegoose/typegoose';
import { User } from './schemas/User.schame';
import { Game } from '@app/db/schemas/Game.schame';
import { Summoner } from '@app/db/schemas/Summoner.schame';

const providers: Provider[] = [
  {
    provide: 'DB_CONNECTION',
    useFactory: () => mongoose.connect('mongodb://127.0.0.1:27017/lol'),
  },
  {
    provide: User.name,
    useFactory: () => getModelForClass(User),
  },
  {
    provide: Game.name,
    useFactory: () => getModelForClass(Game),
  },
  {
    provide: Summoner.name,
    useFactory: () => getModelForClass(Summoner),
  },
];

@Global()
@Module({
  providers,
  exports: providers,
})
export class DbModule {}
