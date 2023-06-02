import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { InputTextComponent } from '@marketplace/web-store/ui/input-text';

@Component({
  selector: 'marketplace-shipping-address-form',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, InputTextComponent, MatCheckboxModule, FormsModule, ReactiveFormsModule],
  templateUrl: './shipping-address-form.component.html',
  styleUrls: ['./shipping-address-form.component.scss'],
})
export class ShippingAddressFormComponent {
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
