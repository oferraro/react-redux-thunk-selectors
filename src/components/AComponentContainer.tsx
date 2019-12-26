import React from "react";
import {connect} from "react-redux";
import {cleanUsers, fetchUsers, setFetchUsersParams} from "../redux/actions";
import {AComponentRenderer} from "./AComponentRenderer";
import './AComponent.scss';
import {userNamesSelector} from "../redux/selectors";

interface AComponentProps {
    doFetchUsers: any;
    usersFilter: string;
}

class AComponentContainer extends React.Component<any, AComponentProps> {
    public text: string = 'test';

    callDoFetchUsers(param: string) {
        this.props.doFetchUsers(param);
    }

    callDoCleanUsers() {
        this.props.doCleanUsers();
    }

    render () {
        return <AComponentRenderer
            users={this.props.users}
            doFetchUsers={ this.callDoFetchUsers.bind(this) }
            doCleanUsers={ this.callDoCleanUsers.bind(this) }
        />;
    }
}


const mapStateToProps = (state: any) => {
    return {
        users: userNamesSelector(state)
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        doCleanUsers: () => { dispatch(cleanUsers()) },
        doFetchUsers: (params: string) => {
            params = (typeof params !== 'string') ? '' : params;
            dispatch(setFetchUsersParams(params));
            dispatch(fetchUsers.bind(dispatch, params))
        },
    }
};

export const AComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(AComponentContainer);

