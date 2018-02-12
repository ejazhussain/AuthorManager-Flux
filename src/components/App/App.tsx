import * as React from "react";
import { IAppProp } from "../App/IAppProp"
import { IAppState } from "../App/IAppState"

//Constants
import { Operations } from "../../constants/constants"

//External Components
import Read from "../Read/Read";
import Detail from "../Detail/Detail";
import Edit from "../Edit/Edit";
import Delete from "../Delete/Delete";

//ReactStrap
//let img = require('../../images/airplane.png');
// import { Button } from 'reactstrap';




export class App extends React.Component<IAppProp, IAppState>{

    /**
     *
     */
    constructor(props: IAppProp, state: IAppState) {
        super(props, state);

        this.state = {
            currentMode: Operations.READ,
            itemId: null
        }
        this.changeAppMode = this.changeAppMode.bind(this);

    }

    // used when use clicks something that changes the current mode
    public changeAppMode(currentMode, itemId) {

        this.setState({
            currentMode,
            itemId: itemId != null ? itemId : null
        })
    }



    render() {

        let mode: JSX.Element = <Read changeAppMode={this.changeAppMode} />;

        switch (this.state.currentMode) {
            case Operations.READ:
                break;
            case Operations.Detail:
                mode = <Detail itemId={this.state.itemId} changeAppMode={this.changeAppMode} />;
                break;
            // case 'create':
            //   modeComponent = <CreateCourseComponent changeAppMode={this.changeAppMode} />;
            //   break;
            case Operations.EDIT:
                mode = <Edit itemId={this.state.itemId} changeAppMode={this.changeAppMode} />;
                break;
            case Operations.DELETE:
                mode = <Delete itemId={this.state.itemId} changeAppMode={this.changeAppMode} />;
                break;
            default:
                break;
        }

        return (
            <div className="container">
                <br /><br />
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Authors Manager</h1>
                    </div>
                </div>
                {mode}
            </div>
        );

    }
}


