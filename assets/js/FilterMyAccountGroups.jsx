import React from 'react';

class FilterMyAccountGroups extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div class="chip">
                    Registered Groups
                </div>
                <div class="chip">
                    Interested Groups
                </div>
                <div class="chip">
                    Created Groups
                </div>
            </div>
        );
    }
}

export default FilterMyAccountGroups