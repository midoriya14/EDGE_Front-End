class Hostel {
    #roomType;
    #bookingId;
  
    setDetails(roomType, bookingId) {
      this.#roomType = roomType;
      this.#bookingId = bookingId;
    }
  
    getDetails() {
      return `Room Type: ${this.#roomType}, Booking ID: ${this.#bookingId}`;
    }
  }
  
  const hostel = new Hostel();
  hostel.setDetails('Deluxe', 12345);
  console.log(hostel.getDetails());
  