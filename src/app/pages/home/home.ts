import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [HttpClientModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
