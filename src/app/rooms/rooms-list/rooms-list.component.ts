import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomList } from '../rooms';


@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent {

  @Input() rooms : RoomList[] = [];

  @Output() selectedRoom  = new EventEmitter<RoomList>();

  onSelect(room : RoomList) {
    this.selectedRoom.emit(room)
  }

}
