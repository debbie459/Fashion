import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  // ngOnInit(): void {
  //   const items: NodeListOf<HTMLElement> = document.querySelectorAll('.carousel-items');
  //   const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.carousel-controls button');
  //   let currentIndex: number = 0;

  //   function updateCarousel(index: number): void {
  //       items.forEach((item: HTMLElement, i: number): void => {
  //           item.style.display = i === index ? 'flex' : 'none';
  //       });
  //       buttons.forEach((button: HTMLButtonElement, i: number): void => {
  //           button.classList.toggle('active', i === index);
  //       });
  //   }

  //   buttons.forEach((button: HTMLButtonElement, index: number): void => {
  //       button.addEventListener('click', (): void => {
  //           currentIndex = index;
  //           updateCarousel(currentIndex);
  //       });
  //   });

  //   updateCarousel(currentIndex);
  // }
}
