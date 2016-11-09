import { Component } from '@angular/core';
import { VotesService } from './votes.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ VotesService ]
})

export class AppComponent {

    private currentYear: string = '2012';
    private data: any;

    constructor() { }

    mapChanged(data) {
        this.data = data;
    }

    yearChanged(year) {
        this.currentYear = year;
    }
}