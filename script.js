// ACL Type: Record
// Operation: read
// Name: incident
// Description: Restrict record access based on field value - caller_id

(function() {

    // Allow if user is admin or has itil_admin - bypass restriction
    if (gs.hasRole('admin') || gs.hasRole('itil_admin')) {
        answer = true;
        return;
    }

    // If new record, allow (field not set yet)
    if (current.isNewRecord()) {
        answer = true;
        return;
    }

    // 1. Restriction based on single field value: caller_id
    if (current.caller_id == gs.getUserID()) {
        answer = true;
        return;
    }

    // 2. Restriction based on field containing value: watch_list (glide_list)
    var watchList = current.watch_list.toString();
    if (watchList.indexOf(gs.getUserID()) > -1) {
        answer = true;
        return;
    }

    // 3. Restriction based on custom field value: e.g., only allow if u_department == user's department
    // var userDept = gs.getUser().getDepartmentID();
    // if (current.u_department == userDept) {
    // answer = true;
    // return;
    // }

    // Default deny
    answer = false;

})();