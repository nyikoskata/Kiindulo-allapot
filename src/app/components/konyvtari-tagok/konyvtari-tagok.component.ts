import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { KonyvtariTagokModel } from '../../models/konyvtari-tagok.model';

@Component({
  selector: 'app-konyvtari-tagok',
  templateUrl: './konyvtari-tagok.component.html',
  styleUrl: './konyvtari-tagok.component.css'
})
export class KonyvtariTagokComponent {

  userModel: KonyvtariTagokModel  = {
    id: 187,
    name: "kovács",
    from: "2022-02-12T00:00:00",
    to: null
  };

  visible: boolean = false;
  

  users: KonyvtariTagokModel[] = [];


  constructor(private httpService: HttpService) {}
  
  search(){
    this.getUsers(this.userModel.name);
  }

  getUsers(name: string) {
    if(name != ""){
      this.visible = false;
      this.httpService.listUsers(name).subscribe({
        next: (result: KonyvtariTagokModel[]) => this.users = result,
        error: (err) => console.log(err)
      });
    }
    else{
      this.visible = true;
      return;
    }
  }

  
}
