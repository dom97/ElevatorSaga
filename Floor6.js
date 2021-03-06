{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator
        var elevator1 = elevators[1];

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
                elevator1.goToFloor(1);
        });
        
        
        elevator.on("passing_floor", function(floorNum, direction) { 
        if (elevator.getPressedFloors().indexOf(floorNum) > 0 )
            elevator.goToFloor(floorNum, true);
        });
        
        elevator1.on("passing_floor", function(floorNum, direction) { 
            if (elevator1.getPressedFloors().indexOf(floorNum) > 0 )
                elevator1.goToFloor(floorNum, true);
        });
        
        
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}