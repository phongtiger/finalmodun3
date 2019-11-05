import {Component, OnDestroy, OnInit} from '@angular/core';
import {IBook} from '../i-book';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnDestroy {
  info: IBook;
  sub: Subscription;
  constructor(private route: ActivatedRoute,
              private contentService: BookService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.contentService.getById(id).subscribe(
      next => (this.info = next),
      error => {
        this.info = null;
      }
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
