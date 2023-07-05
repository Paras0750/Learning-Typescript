enum SeatChoice {
    Aisle,    // If no value is assigned, it will start from 0
    Window = 30, // If value is assigned, it will start from that value
    Middle,  // It will continue from the previous value i.e 31
    Fourth = 'fourth seat',  // can be assigned string value
    Fifth = 50, // If the last value is string, the next value should be defined else it will throw error due to discontinuity of pattern
} 

const hcSeat = SeatChoice.Window;  // = 30
const hcSeat2 = SeatChoice.Fourth; // = 'fourth seat'
const hcSeat3 = SeatChoice.Middle;  // = 31

