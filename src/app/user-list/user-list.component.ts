import { Component } from '@angular/core';
import {trigger,transition,style,animate, state} from '@angular/animations'
import { UserService } from '../services/user.service';
import { User } from '../Interfaces/user';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {

  userList:User[] =[];

  currentPage:number=1;
  per_page:number=6;
  total_pages:number=	0;
  total:number=0;

  //searchTerm:string='';

  constructor(private _userService:UserService){}

  ngOnInit():void{
    this.fetchUsers();
  }

  fetchUsers(){
    this._userService.getUsersList(this.currentPage).subscribe({
      next:(res)=>{
         this.userList=res.data;
         this.total_pages=res.total_pages;
         this.per_page=res.per_page;
        //console.log(this.userList)
      }
    })
  }

  previousPage(){
    if(this.currentPage>1){
      this.currentPage--;
      this.fetchUsers();
    }
  }

  nextPage(){
    if(this.currentPage<this.total_pages){
      this.currentPage++;
      this.fetchUsers();
    }
  }
}
