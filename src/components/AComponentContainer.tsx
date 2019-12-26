import React from "react";
import {connect} from "react-redux";
import {cleanUsers, fetchUsers} from "../redux/actions";
import {AComponentRenderer} from "./AComponentRenderer";
import './AComponent.scss';
import {userNamesSelector} from "../redux/selectors";

interface AComponentProps {
    doFetchUsers: any;
}

interface AComponentState {
    users: [];
}

class AComponentContainer extends React.Component<any, AComponentProps> {
    public text: string = 'test';

    componentDidMount(): void {
        console.log('here mount', this.props);
    }

    callDoFetchUsers() {
        this.props.doFetchUsers();
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
        doFetchUsers: () => { dispatch(fetchUsers) },
    }
};

export const AComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(AComponentContainer);

