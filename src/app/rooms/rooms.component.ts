import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomList, Rooms } from './rooms';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RoomsListComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent { 
  hotelName = 'Marriot';

  numberOfRooms = 10;

  hideRooms = true;

  rooms : Rooms = {
    totalRooms : 20,
    availableRooms: 10,
    bookedRooms: 10 
  }

  selectedRoom !: RoomList

  roomList : RoomList[] = [
    
  ]

  ngOnInit() : void {
    this.roomList = [
    {
      roomType : 'Deluxe double bed room',
      amenities : 'TV',
      price : 70,
      photos : 'https://marriot/images/roomOne.png',
      checkInTime : new Date('11-Nov-2021'),
      checkOutTime : new Date('15-Nov-2021'),
    },
    {
      roomType : 'Deluxe single bed room',
      amenities : 'TV and Ac',
      price : 70,
      photos : 'https://marriot/images/roomTwo.png',
      checkInTime : new Date('11-Nov-2021'),
      checkOutTime : new Date('15-Nov-2021'),
    },
    {
      roomType : 'Deluxe triple bed room',
      amenities : 'TV,AC and mini gym',
      price : 70,
      photos : 'https://marriot/images/roomThree.png',
      checkInTime : new Date('11-Nov-2021'),
      checkOutTime : new Date('15-Nov-2021'),
    }
   ]
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  } 

  OnSelect(room : RoomList) {
    this.selectedRoom = room;
    console.log(room);
  }
}
