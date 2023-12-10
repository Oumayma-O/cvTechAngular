import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {User, UsersService} from "../users.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AddUserComponent {
  @Input() usersCluster: string = '';
  @Input() users: User[] = [];

  constructor(private userService: UsersService) {}

  userFullName: string = '';

  addUser() {
    this.userService.addUser(this.users, this.userFullName);
    this.userFullName = '';
  }

}
