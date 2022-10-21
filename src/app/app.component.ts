import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'listApp';

  loadedFeature = 'recipe';

  onNavigate(loaded: string) {
    this.loadedFeature = loaded;

    // console.log('from onNavagate: ' + loaded);
  }
}
