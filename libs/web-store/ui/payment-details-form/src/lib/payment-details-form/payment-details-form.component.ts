import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from '@marketplace/web-store/ui/input-text';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'marketplace-payment-details-form',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, InputTextComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './payment-details-form.component.html',
  styleUrls: ['./payment-details-form.component.scss'],
})
export class PaymentDetailsFormComponent {
  public _controls: { [key: string]: FormControl } = {};
  public _formGroup: FormGroup = new FormGroup({});

  @Input()
  public set group(formGroup: FormGroup) {
    this._formGroup = formGroup;
    this._controls = this._formGroup.controls as { [key: string]: FormControl };
  }
  public get group(): FormGroup {
    return this._formGroup;
  }
}
