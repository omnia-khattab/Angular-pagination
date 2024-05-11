import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../Interfaces/user';
import { Router } from '@angular/router';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  foundUser: User = {} as User;

  opacity_0: string = 'opacity-0';
  opacity_1: string = 'opacity-1';

  constructor(
    private _userService: UserService,
    private router: Router,
    public _loaderService: LoaderService
  ) {}

  onSearchInput(event: any) {
    const searchQuery = event.target.value;
    this._userService.getUserByID(searchQuery).subscribe({
      next: (res) => {
        this.foundUser = res.data;
        //console.log(this.foundUser)
      },
      error:(err)=>{
        this.foundUser = {} as User;
        //console.log(this.foundUser)
      }
    });
  }
  navigateToSearchResult() {
    this.router.navigate(['/search-results', this.foundUser.id], {
      state: { user: this.foundUser },
    });
  }

  // @Output() searchEvent = new EventEmitter<string>();

  // onSearchInput(event: any) {
  //   this.searchEvent.emit(event);
  // }
}
