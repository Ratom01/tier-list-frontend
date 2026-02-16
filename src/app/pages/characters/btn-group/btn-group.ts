import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForOf, NgIf } from "@angular/common";

@Component({
  selector: 'btn-group',
  imports: [NgForOf, NgIf],
  templateUrl: './btn-group.html',
  styleUrl: './btn-group.css',
})
export class BtnGroup implements OnInit{
  @Input() isAll : boolean = false;
  @Input() isIcon : boolean = false;
  @Input() types : any;
  @Input() oldType : any;
  @Output() newType = new EventEmitter<any>();

  selectedType : any = null;
  
  ngOnInit(): void {
    console.log(this.oldType);
    if(this.oldType){
      this.onClick(this.oldType);
    }
  }

  onClick(value : any){
    this.selectedType = value;
    this.newType.emit(value);
  }

}
