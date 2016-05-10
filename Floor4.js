{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator
        var elevator1 = elevators[1];

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            if(elevator.getPressedFloors().length > 0) {
                elevator.goToFloor(elevator.getPressedFloors()[0]);
            }
            else
                elevator.goToFloor(0);
        });
        elevator1.on("idle", function() {
            if(elevator1.getPressedFloors().length > 0) {
                elevator1.goToFloor(elevator1.getPressedFloors()[0]);
            }
            else
                elevator1.goToFloor(7);
        });
        elevator.on("passing_floor", function(floorNum, direction) { 
        
        });
        
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}