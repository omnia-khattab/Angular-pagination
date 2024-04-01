import { Component, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../Interfaces/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @Input() id = '';

  user:User={} as User;
  constructor(private _userService:UserService){}

  ngOnInit():void{
    this.fetchUser();
  }

  fetchUser(){
    this._userService.getUserByID(this.id).subscribe({
      next:(res)=>{
        this.user=res.data;
        //console.log(this.user)
     }
    })
  }
}
