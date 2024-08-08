import { Component } from '@angular/core';

@Component({
  selector: 'app-like',
  standalone: true,
  imports: [],
  template: `
    <p>Like Template</p>
    <div class="container">
      <img src="assets/like.png" alt="My Image" width="50" height="50">
    </div>
  `,
  styles: `div {background-color: black; padding: 10px}`,
})
export class LikeComponent {}
