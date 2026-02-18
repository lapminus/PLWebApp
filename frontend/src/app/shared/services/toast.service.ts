import { Injectable, signal } from '@angular/core';
import { Toast } from '../models/toast.model';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private counter = 0;

  toasts = signal<Toast[]>([]);

  private show(message: string, type: 'success' | 'error' = 'success') {
    const id = this.counter++;
    const newToast: Toast = { id, message, type };

    this.toasts.update((toasts) => [...toasts, newToast]);
    setTimeout(() => {
      this.remove(id);
    }, 5000);
  }

  success(message: string) {
    this.show(message, 'success');
  }

  error(message: string) {
    this.show(message, 'error');
  }

  remove(toastId: number) {
    this.toasts.update((toasts) => toasts.filter((t) => t.id !== toastId));
  }
}
