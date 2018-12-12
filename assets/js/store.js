import {createStore, combineReducers} from 'redux';

/*
state = {
    user_info = {username : "", fullname: "", avatar: ""}

    study_groups = [study_group_details..]

    user_created_study_group_ids = []

    user_interested_study_group_ids = []

    user_registered_study_group_ids = []

    department_categories = []

each study_group_detail
{id,title, date,location, time, description,
hostname,course,department,attendees}

 */
let user_info_static_data=[];
user_info_static_data.push({username:"test1", fullname:"testuser1", avatar: ""})

let department_categories_static_data = [];
let study_groups_static_data = [];
let last_user_info = {};
let last_user_created_study_group_ids = {};
let last_user_interested_study_group_ids = {};
let last_user_registered_study_group_ids = {};

// override storage to support object written
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
};
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
};

if(!(localStorage.getObj('study_groups_static_data'))) {
    let static_data_to_insert = [];
    static_data_to_insert.push({id:1,title:"HCI Quiz 2",date:"Friday, December 16th 2018",location:"320 Shillman Hall",
        time:" 12.30 PM",description:"A study group for UI Design Patterns and Gestalt Principles." +
        " User Analysis included.", hostname:"John Doe", course:"CS5340", department:"Computer Science",attendees:["Alice John", "Rachel Wonka", "Cathy Chapman"]});
    static_data_to_insert.push({id:2,title:"Algorithms Exam Prep",date:"Wednesday, December 20th 2018",location:"120 Snell Library",
        time:" 2.30 PM",description:"Prepare for Algorithms Final Exam by practising Dynamic Programing and Greedy Algorithms.",
        hostname:"Alice John", course:"CS5200", department:"Computer Science",attendees:["Mily Lopez", "Roshan Francis", "Teresa Antony"]});
    static_data_to_insert.push({id:3,title:"Anthropology Discourse",date:"Monday, December 29th 2018",location:"100 Snell Engineering",
        time:" 10.30 AM",description:"A discussion group to analyse meaning and relevance of public space.",
        hostname:"Mia John", course:"CS4300", department:"Humanities",attendees:["Karan Kishore", "Roshan Francis", "Teresa Antony"]});
    localStorage.setObj('study_groups_static_data', static_data_to_insert);
    study_groups_static_data = static_data_to_insert;

    let categories_static_data_to_insert = ["Computer Science", "Architecture", "Humanities", "History", "Music",
        "Human Development", "Communication", "Development Sociology"];
    localStorage.setObj('department_categories_static_data', categories_static_data_to_insert);
    department_categories_static_data = categories_static_data_to_insert;

    localStorage.setObj('user_info', {});
    localStorage.setObj('user_created_study_group_ids',{});
    localStorage.setObj('user_interested_study_group_ids',{});
    localStorage.setObj('user_registered_study_group_ids', {});
} else {
    department_categories_static_data = localStorage.getObj('department_categories_static_data');
    study_groups_static_data = localStorage.getObj('study_groups_static_data');
    last_user_info = localStorage.getObj('user_info');
    last_user_created_study_group_ids = localStorage.getObj('user_created_study_group_ids');
    last_user_interested_study_group_ids = localStorage.getObj('user_interested_study_group_ids');
    last_user_registered_study_group_ids = localStorage.getObj('user_registered_study_group_ids');
}





export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_CREATE_GROUP = "USER_CREATE_GROUP";
export const USER_JOIN_GROUP = "USER_JOIN_GROUP";
export const USER_LEAVE_GROUP = "USER_LEAVE_GROUP";
export const USER_MARK_GROUP_INTEREST = "USER_MARK_GROUP_INTEREST";
export const USER_MARK_UNINTERESTED = "USER_MARK_UNINTERESTED";
export const HOST_DELETE_GROUP = "HOST_DELETE_GROUP";

function user_info(state = last_user_info, action) {
    switch (action.type){
        case USER_LOGIN:
            let new_user_info = {username: action.username, fullname: action.username};
            localStorage.setObj('user_info', new_user_info);
            return new_user_info;
        case USER_LOGOUT:
            localStorage.setObj('user_info', {});
            return {};
        default:
            return state;
    }
}

function study_groups(state=study_groups_static_data, action) {
    switch (action.type) {
        case HOST_DELETE_GROUP:
            let new_state_host_delete = state.filter(group => group.id != action.group_id);
            localStorage.setObj('study_groups_static_data', new_state_host_delete);
            return new_state_host_delete;
        case USER_JOIN_GROUP: {
            let registered_group = state.find(group => group.id == action.group_id);
            registered_group.attendees.push(action.fullname);
            let other_groups = state.filter(group => group.id != action.group_id);
            let new_state_join = [...other_groups, registered_group];
            localStorage.setObj('study_groups_static_data', new_state_join);
            return new_state_join;
        }
        case USER_LEAVE_GROUP: {
            let left_group = state.find(group => group.id == action.group_id);
            left_group.attendees = left_group.attendees.filter(uname => uname != action.fullname);
            let other_groups = state.filter(group => group.id != action.group_id);
            let new_state_leave = [...other_groups, left_group];
            localStorage.setObj('study_groups_static_data', new_state_leave);
            return new_state_leave;
        }
        case USER_CREATE_GROUP: {
            let new_state_create = [...state, action.group];
            localStorage.setObj('study_groups_static_data', new_state_create);
            return new_state_create;
        }
        default:
            return state;
    }
}

function department_categories(state=department_categories_static_data, action) {
    return state;
}

function user_created_study_group_ids(state=last_user_created_study_group_ids, action) {
    switch (action.type) {
        case USER_CREATE_GROUP:
            let new_state_create = state;
            if (!(action.group.hostname in new_state_create)) {
                new_state_create[action.group.hostname] = []
            }
            new_state_create[action.group.hostname] = [...new_state_create[action.group.hostname], action.group.id];
            localStorage.setObj('user_created_study_group_ids', new_state_create);
            return new_state_create;
        case HOST_DELETE_GROUP:
            let new_state_delete = state;
            if (action.group.hostname in new_state_create) {
                new_state_delete[action.group.hostname] =
                    new_state_delete[action.group_id.hostname].filter(group_id => group_id != action.group_id);
            }
            localStorage.setObj('user_created_study_group_ids', new_state_delete);
            return new_state_delete;
        default:
            return state;
    }
}

function user_interested_study_group_ids(state=last_user_interested_study_group_ids, action) {
    switch (action.type) {
        case USER_MARK_GROUP_INTEREST:
            let new_state_interest = state;
            if (!(action.username in new_state_interest)) {
                new_state_interest[action.username] = []
            }
            new_state_interest[action.username] = [...new_state_interest[action.username], action.group_id];
            localStorage.setObj('user_interested_study_group_ids', new_state_interest);
            return new_state_interest;
        case USER_MARK_UNINTERESTED:
            let new_state_remove = state;
            if (action.username in new_state_remove) {
                new_state_remove[action.username] =
                    new_state_remove[action.username].filter(group_id => group_id != action.group_id);
            }
            localStorage.setObj('user_interested_study_group_ids', new_state_remove);
            return new_state_remove;
        default:
            return state;
    }
}

function user_registered_study_group_ids(state=last_user_registered_study_group_ids, action) {
    switch (action.type) {
        case USER_JOIN_GROUP:
            let new_state_join = state;
            if (!(action.username in new_state_join)) {
                new_state_join[action.username] = []
            }
            new_state_join[action.username] = [...new_state_join[action.username], action.group_id];
            localStorage.setObj('user_registered_study_group_ids', new_state_join);
            return new_state_join;
        case USER_LEAVE_GROUP:
            let new_state_leave = state;
            if (action.username in new_state_leave) {
                new_state_leave[action.username] =
                    new_state_leave[action.username].filter(group_id => group_id != action.group_id);
            }
            localStorage.setObj('user_registered_study_group_ids', new_state_leave);
            return new_state_leave;
        default:
            return state;
    }
}

const teampUpApp = combineReducers({user_info, study_groups, department_categories,
    user_created_study_group_ids, user_interested_study_group_ids,
    user_registered_study_group_ids});

let store = createStore(teampUpApp);
export default store;





