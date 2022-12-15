import { Global, Module, Provider, Inject } from '@nestjs/common';
import { DbService } from './db.service';
import { getModelForClass, mongoose } from '@typegoose/typegoose';
import { User } from './schemas/User.schame';
import { Game } from '@app/db/schemas/Game.schame';

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
];

@Global()
@Module({
  providers,
  exports: providers,
})
export class DbModule {}
