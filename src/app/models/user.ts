import {Movie} from './movie';

export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
  toWatchList: [];
  continue: [];
  alreadyWatched: [];
}
