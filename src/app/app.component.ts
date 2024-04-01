import { Component } from '@angular/core';
import { User } from './Interfaces/user';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pagination';

  //foundUser: User={} as User;

  //constructor(private _userService: UserService,private router: Router) {}

  // ngOnInit() {
  //   this._userService.clearDataEvent.subscribe(() => {
  //     this.foundUser = {} as User; // Clear search results as well
  //   });
  // }

  // onSearch(event: any) {
  //   const searchQuery = event.target.value;
  //   //console.log('Received search query in AppComponent:', searchQuery);
  //   this._userService.getUserByID(searchQuery).subscribe({
  //     next: (res) => {
  //       this.foundUser = res.data;
  //       console.log(this.foundUser);//the data is returned correctly
  //       this.router.navigate(['/search-results'],{
  //         state: { user: this.foundUser }
  //       });
  //     },
  //     error:(err)=>{
  //       this.foundUser = {} as User
  //     }
      
  //   });
  // }
}
