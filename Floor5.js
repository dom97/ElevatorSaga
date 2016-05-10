{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator
        var elevator1 = elevators[1];
        var elevator2 = elevators[2];
        var elevator3 = elevators[3];

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            if(elevator.getPressedFloors().length > 0) {
                elevator.goToFloor(elevator.getPressedFloors()[elevator.getPressedFloors().length -1]);
            }
            else
                elevator.goToFloor(0);
        });
        elevator1.on("idle", function() {
            if(elevator1.getPressedFloors().length > 0) {
                elevator1.goToFloor(elevator1.getPressedFloors()[elevator1.getPressedFloors().length -1]);
            }
            else
                elevator1.goToFloor(5);
        });
        elevator2.on("idle", function() {
            if(elevator2.getPressedFloors().length > 0) {
                elevator2.goToFloor(elevator2.getPressedFloors()[elevator2.getPressedFloors().length -1]);
            }
            else
                elevator2.goToFloor(2);
        });
        elevator3.on("idle", function() {
            if(elevator3.getPressedFloors().length > 0) {
                elevator3.goToFloor(elevator3.getPressedFloors()[elevator3.getPressedFloors().length -1]);
            }
            else
                elevator3.goToFloor(3);
        });
        elevator.on("passing_floor", function(floorNum, direction) { 
        if (elevator.getPressedFloors().indexOf(floorNum) > 0 )
            elevator.goToFloor(floorNum, true);
        });
        
        elevator1.on("passing_floor", function(floorNum, direction) { 
            if (elevator1.getPressedFloors().indexOf(floorNum) > 0 )
                elevator1.goToFloor(floorNum, true);
        });
        elevator2.on("passing_floor", function(floorNum, direction) { 
            if (elevator2.getPressedFloors().indexOf(floorNum) > 0 )
                elevator2.goToFloor(floorNum, true);
        });
        elevator3.on("passing_floor", function(floorNum, direction) { 
        if (elevator3.getPressedFloors().indexOf(floorNum) > 0 )
            elevator3.goToFloor(floorNum, true);
        });
        
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}