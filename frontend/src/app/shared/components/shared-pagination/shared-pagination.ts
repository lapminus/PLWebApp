import { Component, effect, input, OnInit, output, signal } from '@angular/core';
import { PageItem } from '../../models/page-item.type';

@Component({
  selector: 'app-shared-pagination',
  imports: [],
  templateUrl: './shared-pagination.html',
  styleUrl: './shared-pagination.scss',
})
export class SharedPagination {
  // 0 = 1
  receivedMaxPages = input.required<number>();
  receivedCurrentPage = input.required<number>();
  pageChanged = output<number>();

  private elementsDisplayed = 3;
  before = signal<PageItem[]>([]);
  after = signal<PageItem[]>([]);

  constructor() {
    effect(() => {
      this.listElementsBefore();
      this.listElementsAfter();
    });
  }

  private listElementsBefore() {
    if (this.elementsDisplayed < this.receivedCurrentPage() - 1) {
      const start = this.receivedCurrentPage() - this.elementsDisplayed + 1;
      const pages = this.range(start, this.receivedCurrentPage() + 1).map(
        (x) => ({ type: 'page', value: x }) as const,
      );

      this.before.set([{ type: 'elipsis' }, ...pages]);

      // console.log(`yes (...) ${this.before().forEach((x) => console.log(x))}`);
    } else {
      this.before.set(
        this.range(2, this.receivedCurrentPage() + 1).map(
          (x) => ({ type: 'page', value: x }) as const,
        ),
      );

      // console.log(`no (...) ${this.before().forEach((x) => console.log(x))}`);
    }
  }

  private listElementsAfter() {
    if (this.receivedCurrentPage() + this.elementsDisplayed < this.receivedMaxPages() - 2) {
      const pages = this.range(
        this.receivedCurrentPage() + 2,
        this.receivedCurrentPage() + this.elementsDisplayed + 2,
      ).map((x) => ({ type: 'page', value: x }) as const);

      this.after.set([...pages, { type: 'elipsis' }]);
      // console.log(`yes (...) ${this.after().forEach((x) => console.log(x))}`);
    } else {
      this.after.set(
        this.range(this.receivedCurrentPage() + 2, this.receivedMaxPages()).map(
          (x) => ({ type: 'page', value: x }) as const,
        ),
      );
      // console.log(`no (...) ${this.after().forEach((x) => console.log(x))}`);
    }
  }

  increment() {
    this.pageChanged.emit(this.receivedCurrentPage() + 1);
  }

  decrement() {
    this.pageChanged.emit(this.receivedCurrentPage() - 1);
  }

  clicked(value: number) {
    this.pageChanged.emit(value);
  }

  // range = [a,b)
  private range(start: number, end: number): number[] {
    return Array.from({ length: end - start }, (_, i) => start + i);
  }
}
