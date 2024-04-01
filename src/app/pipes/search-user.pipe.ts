import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../Interfaces/user';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(users: User[],term:string): User[] {
    return users.filter((user)=>user.id);
  }

}
