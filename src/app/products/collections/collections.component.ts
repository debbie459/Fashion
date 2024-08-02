import { Component } from '@angular/core';
import { NewCollectionsComponent } from "../new-collections/new-collections.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [NewCollectionsComponent, RouterOutlet],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent {

}
