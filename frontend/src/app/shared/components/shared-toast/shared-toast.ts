import { Component, inject } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shared-toast',
  imports: [CommonModule],
  templateUrl: './shared-toast.html',
  styleUrl: './shared-toast.scss',
})
export class SharedToast {
  toastService = inject(ToastService);
}
