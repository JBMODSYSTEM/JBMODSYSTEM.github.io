import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-monedag',
  standalone: true,
  imports: [],
  templateUrl: './monedag.component.html',
  styleUrl: './monedag.component.scss'
})
export class MonedagComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const coin = this.renderer.selectRootElement('.coin');
    let rotation = 0;

    setInterval(() => {
      rotation += 360;
      this.renderer.setStyle(coin, 'transform', `rotateY(${rotation}deg)`);
    }, 4000); // Rotation interval
  }
}
