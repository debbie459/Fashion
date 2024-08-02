import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  dropDown(){
    console.log('hey it has been clicked')
    const dropdown = document.getElementById("myDropdown")
    if(dropdown){
      dropdown.classList.toggle('show')
      console.log('i should show this content')
    }
  }
}
