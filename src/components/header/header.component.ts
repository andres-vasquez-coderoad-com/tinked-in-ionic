import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    QueryList,
    Renderer2,
    SimpleChanges,
    ViewChildren
} from '@angular/core';
import {JobPostModel} from '../../model/job-post.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
    @Output() profileClickEvent = new EventEmitter();
    @Output() homeClickEvent = new EventEmitter();
    @Output() chatClickEvent = new EventEmitter();

    constructor() {
    }

    ngAfterViewInit(): void {
    }

    profileClick() {
        this.profileClickEvent.emit();
    }

    homeClick() {
        this.homeClickEvent.emit();
    }

    chatClick() {
        this.chatClickEvent.emit();
    }
}
