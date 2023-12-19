import { Component } from '@angular/core';
import {newMemberModel} from '../../models/new-member.model'
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrl: './new-member.component.css'
})
export class NewMemberComponent {
  newModel: newMemberModel ={
    name: '',
    birthDate: '',
    email: '',
    mobil: ''
  }
  errorMessage = '';

  constructor(private httpService: HttpService) {}

  mentes(){
      if (!this.newModel.name) {
        this.errorMessage = 'A név mezőt ki kell tölteni';
        return;
      }
      if (!this.newModel.birthDate) {
        this.errorMessage = 'A születési dátum mezőt ki kell tölteni';
        return;
      }
      if (!this.newModel.email) {
        this.errorMessage = 'Az email mezőt ki kell tölteni';
        return;
      }if (!this.newModel.mobil) {
        this.errorMessage = 'A mobil mezőt ki kell tölteni';
        return;
      }
  
      this.httpService.sendMember(this.newModel).subscribe({
        next: (result: {message: string}) => {
          alert(`A rögzített tag olvasójegyének száma:`);
          window.location.href = 'konyvtari-tagok';
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = err.error?.message ?? err.message; 
        }
      })

  }
}
