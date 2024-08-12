import { Component } from '@angular/core';
import { ContainerModule } from './container/container.module';
import { ProductModule } from './product/product.module';
import { ProductBemModule } from './product-bem/product-bem.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContainerModule, ProductModule, ProductBemModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'curso-angular17';
}
