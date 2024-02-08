import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  public profileImageSource: string = '../../../assets/DrorProfilePicture.jpg';
  public phoneNumber: string = 'tel:647-997-9506';
  public address: string = 'Richmond Hill, ON';
  public email: string = 'mailto:Drortz123@gmail.com'
  public linkedIn: string = 'https://www.linkedin.com/in/dror-tzruya/';
  public gitHub: string = 'https://github.com/drortz/';

}
