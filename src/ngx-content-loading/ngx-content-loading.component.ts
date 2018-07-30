import { Defaults } from './defaults.enum';
import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'ngx-content-loading',
    templateUrl: './ngx-content-loading.component.html',
    styleUrls: ['./ngx-content-loading.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxContentLoadingComponent implements OnInit {
    constructor(private _sanitizer: DomSanitizer) { }

    @Input()
    public width = Defaults.Width;

    @Input()
    public height = Defaults.Height;

    @Input()
    public primaryColor: string = Defaults.PrimaryColor;

    @Input()
    public secondaryColor: string = Defaults.SecondaryColor;

    @Input()
    public speed: string = Defaults.Speed;

    @Input()
    public preserveAspectRatio = Defaults.PreserveAspectRatio;

    @Input()
    public svgStyle = Defaults.SvgStyle;

    public get sanitizedSvgStyle() {
        return this._sanitizer.bypassSecurityTrustStyle(this.svgStyle);
    }

    public get viewBox(): string {
        return `0 0 ${this.width} ${this.height}`;
    }

    public ngOnInit(): void { }
}

