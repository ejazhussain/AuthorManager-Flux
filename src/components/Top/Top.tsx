import * as React from 'react';
import ReactDOM from 'react-dom';

import { ITopProps } from './ITopProps';
import { ITopState } from './ITopState';





export default class Top extends React.Component<ITopProps, ITopState> {

    public constructor(props: ITopProps, state: ITopState) {
        super(props);
    }

    // render the component based on current or selected mode  
    public render(): React.ReactElement<ITopProps> {
        return (
            <div className="card top-card">
                <div className="row">
                    <div className="col-md-2"> </div>
                    <div className="col-md-8">
                        <div className="card-body text-center">
                            <h5 className="card-title">Search</h5>
                            <div className="form-group">
                                <input className="form-control form-control-lg" type="text" placeholder="" />
                            </div>

                            <div className="form-group top-button-group">
                                <div className="btn-group" role="group" aria-label="Third group">
                                    <button type="button" className="btn btn-success">Search</button>
                                </div>
                                <div className="btn-group" role="group" aria-label="Fourth group">
                                    <button type="button" className="btn btn-light">Reset</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-2"> </div>
                </div>
            </div>


        );
    }

}

// <a href='#'
            //         onClick={() => this.props.changeAppMode('create', null)}
            //         className='btn btn-primary margin-bottom-1em'> Create Course
            // </a>