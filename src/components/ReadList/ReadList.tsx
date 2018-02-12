
import * as React from 'react';


import { IReadListProps } from './IReadListProps'
import { IReadListState } from './IReadListState'

//API
import { IAuthorAPI } from './../../api/IAuthorAPI'
import { AuthorAPI } from '../../api/AuthorAPI'
import { Author } from '../../model/Author';
import ItemRow from '../ItemRow/ItemRow';

//ReactStrap
import { Table } from 'reactstrap';
import { IItemRowProps } from './../ItemRow/IItemRowProps';


export default class ReadList extends React.Component<IReadListProps, IReadListState> {



    constructor(props: IReadListProps, state: IReadListState) {
        super(props);


        this.state = {
            items: this.props.items,
            selectionDetails: ""
        };

    }


    public render(): React.ReactElement<IReadListProps> {

        let items: JSX.Element[] = this.state.items.map((Item: Author, index: number) => {

            return (
                <ItemRow
                    key={index}
                    item={Item}
                    changeAppMode={this.props.changeAppMode} />
            );
        });

        return (


            !items.length
                ? <div className='alert alert-danger'>No Data found.</div>
                :
                <div className="row read-list">
                    <div className="col-sm-12 button-row">
                        <div className="add-new-record">
                            <div className="btn-group" role="group" aria-label="Third group">
                                <button type="button" className="btn btn-success btn-sm"><i className="fa fa-plus"></i> Add new record</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <Table bordered>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th className="text-center"><i className="fa fa-cog"></i></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items}
                                    </tbody>
                                </Table>
                            </div>
                            <div className="card-footer">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p>Page 1 of 5</p>
                                    </div>
                                    <div className="col-sm-6">

                                        <nav className="float-right" aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>

        );
    }
}