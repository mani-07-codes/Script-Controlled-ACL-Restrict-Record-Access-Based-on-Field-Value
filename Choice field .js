(function(){
    if (current.confidential == true) {
        // Only HR Managers can see confidential records
        answer = gs.hasRole('sn_hr_core.manager');
    } else {
        answer = true;
    }
})();