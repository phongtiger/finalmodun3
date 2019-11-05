import {Component, OnDestroy, OnInit} from '@angular/core';
import {IBook} from '../i-book';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit, OnDestroy {
  output: IBook[] = [];
  info: IBook;
  sub: Subscription;
  constructor(private route: ActivatedRoute,
              private contentService: BookService) {
    this.contentService.getContents().subscribe(next => {
      this.output = next;
    });
  }

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
  deleteContent(i: number) {
    this.contentService.deletePost(i).subscribe( () => {
      this.output = this.output.filter(t => t.id !== i);
    }, this.errorHandle);
  }

  errorHandle(error: any) {
    alert('Khong thanh cong');
  }

}
