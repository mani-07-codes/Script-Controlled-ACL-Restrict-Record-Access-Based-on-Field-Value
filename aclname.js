(function() {
    // Deny editing if incident is Closed
    if (current.state == 6 || current.state == 7) { // 6=Resolved, 7=Closed
        answer = false;
        return;
    }

    // Only allow if assigned_to is current user
    if (current.assigned_to == gs.getUserID()) {
        answer = true;
    } else {
        answer = false;
    }
})();