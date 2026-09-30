(function(){
    // User can see HR Case only if they are the subject_person
    answer = (current.subject_person == gs.getUserID());
})();