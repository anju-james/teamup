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


let study_groups_static_data = [];
study_groups_static_data.push({id:1,title:"HCI Quiz 2",date:"Friday, December 6th 2018",location:"320 Shillman Hall",
    time:"12.30 pm to 2.00 pm",description:"A study group for UI Design Patterns and Gestalt Principles." +
    " User Analysis time for projects also included.", hostname:"John Doe", course:"CS5340", department:"Computer Science",attendees:["Alice John", "Rachel Wonka", "Cathy Chapman"]});
study_groups_static_data.push({id:2,title:"Algorithms Exam Prep",date:"Wednesday, December 5th 2018",location:"120 Snell Library",
    time:"2.30 pm to 4.00 pm",description:"Prepare for Algorithms Final Exam by practising Dynamic Programing and Greedy Algorithms.",
    hostname:"Alice John", course:"CS5200", department:"Computer Science",attendees:["Mily Lopez", "Roshan Francis", "Teresa Antony"]});
study_groups_static_data.push({id:3,title:"Anthropology Discussion",date:"Monday, December 10th 2018",location:"100 Snell Engineering",
    time:"10.30 am to 12.00 pm",description:"A discussion group to analyse meaning and relevance of public space.",
    hostname:"Mia John", course:"CS5200", department:"Humanities",attendees:["Karan Kishore", "Roshan Francis", "Teresa Antony"]});

let department_categories_static_data = ["Computer Science", "Architecture", "Humanities", "History", "Music",
    "Human Development", "Communication", "Development Sociology"];


export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_CREATE_GROUP = "USER_CREATE_GROUP";
export const USER_JOIN_GROUP = "USER_JOIN_GROUP";
export const USER_LEAVE_GROUP = "USER_LEAVE_GROUP";
export const USER_MARK_GROUP_INTEREST = "USER_MARK_GROUP_INTEREST";
export const USER_MARK_UNINTERESTED = "USER_MARK_UNINTERESTED";
export const HOST_DELETE_GROUP = "HOST_DELETE_GROUP";

function user_info(state = {}, action) {
    switch (action.type){
        case USER_LOGIN:
            return {username: action.username, fullname: action.username};
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
}

function study_groups(state=study_groups_static_data, action) {
    switch (action.type) {
        case HOST_DELETE_GROUP:
            return state.filter(group => group.id != action.group_id);
        case USER_JOIN_GROUP: {
            let registered_group = state.find(group => group.id == action.group_id);
            registered_group.attendees.push(action.fullname);
            let other_groups = state.filter(group => group.id != action.group_id);
            return [...other_groups, registered_group]
        }
        case USER_LEAVE_GROUP: {
            let left_group = state.find(group => group.id == action.group_id);
            left_group.attendees = left_group.attendees.filter(uname => uname != action.fullname);
            let other_groups = state.filter(group => group.id != action.group_id);
            return [...other_groups, left_group]
        }
        default:
            return state;
    }
}

function department_categories(state=department_categories_static_data, action) {
    return state;
}

function user_created_study_group_ids(state=[], action) {
    switch (action.type) {
        case USER_CREATE_GROUP:
            return [...state, action.group_id];
        case HOST_DELETE_GROUP:
            return state.filter(group_id => group_id != action.group_id);
        default:
            return state;
    }
}

function user_interested_study_group_ids(state=[], action) {
    switch (action.type) {
        case USER_MARK_GROUP_INTEREST:
            return [...state, action.group_id];
        case USER_MARK_UNINTERESTED:
            return state.filter(group_id => group_id != action.group_id);
        default:
            return state;
    }
}

function user_registered_study_group_ids(state=[], action) {
    switch (action.type) {
        case USER_JOIN_GROUP:
            return [...state, action.group_id];
        case USER_LEAVE_GROUP:
            return state.filter(group_id => group_id != action.group_id);
        default:
            return state;
    }
}

const teampUpApp = combineReducers({user_info, study_groups, department_categories,
    user_created_study_group_ids, user_interested_study_group_ids,
    user_registered_study_group_ids});

let store = createStore(teampUpApp);
export default store;





