import { Component, OnInit } from '@angular/core';
import { ToggleStateService } from '@example-libraries/toggle';

@Component({
  selector: 'example-libraries-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'example-app';

  currentStateValue = 'off';

  constructor(private service: ToggleStateService) { }

  ngOnInit(): void {
    this.service.state.subscribe(s => {
      this.currentStateValue = (s.on) ? 'on' : 'off';
    });

    
  }

  toggleState() {
    this.service.transform();
  }
}
