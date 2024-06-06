import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent {
  @ViewChild('white_board_iframe')
  whiteBoardIframe!: ElementRef<HTMLIFrameElement>;
  @ViewChild('black_board_iframe')
  blackBoardIframe!: ElementRef<HTMLIFrameElement>;

  gameFinished = false;
  iFrameWhiteBoardUrl: SafeResourceUrl = '';
  iFrameBlackBoardUrl: SafeResourceUrl = '';

  constructor(private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.iFrameWhiteBoardUrl = this.getIframePageUrl(true);
    this.iFrameBlackBoardUrl = this.getIframePageUrl();
  }

  ngAfterViewInit() {
    window.addEventListener('message', (event) => {
      if (event.data.mate) {
        this.gameFinished = true;
      }

      const lastTurnColor = event.data.color;

      const targetIframe =
        lastTurnColor === 'white'
          ? this.blackBoardIframe
          : this.whiteBoardIframe;

      const targetWindow = targetIframe.nativeElement.contentWindow;
      if (targetWindow) {
        targetWindow.postMessage(event.data, this.getIframePageUrl());
      }
    });
  }

  onGameEnd() {
    this.gameFinished = true;
  }

  reset() {
    this.gameFinished = false;

    const resetData = { reset: true };

    this.whiteBoardIframe.nativeElement.contentWindow?.postMessage(
      resetData,
      this.iFrameWhiteBoardUrl
    );

    this.blackBoardIframe.nativeElement.contentWindow?.postMessage(
      resetData,
      this.iFrameBlackBoardUrl
    );

    localStorage.clear();
  }

  getIframePageUrl(isWhite: boolean = false): SafeResourceUrl {
    const blackBoardUrl = `${window.location.origin}/iframepage`;

    if (isWhite) {
      const whiteBoardUrl = `${blackBoardUrl}/?isWhite=true`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(whiteBoardUrl);
    } else {
      return this.sanitizer.bypassSecurityTrustResourceUrl(blackBoardUrl);
    }
  }
}
