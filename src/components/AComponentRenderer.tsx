import React, {ReactNode} from "react";

interface AComponentRendererState {
    doFetchUsers: any;
    doCleanUsers: any;
    users: any[];
}

export class AComponentRenderer extends React.Component<AComponentRendererState> {

    public render () {
        const users: any[] = [];
        if (!!this.props.users && this.props.users.length > 0){
            this.props.users.forEach((user) => {
                users.push (<li key={ user.id }>{ `${user.id}- ${user.name}` }</li>);
            });
        }
        return <>
            <ul className={ (this.props.users.length > 0 ? 'users-list': '') }>
                { users as ReactNode}
            </ul>
            <button onClick={this.props.doFetchUsers.bind(this)}>get Users</button>
            <button onClick={this.props.doCleanUsers.bind(this)}>clean Users</button>
        </>
    }
}

