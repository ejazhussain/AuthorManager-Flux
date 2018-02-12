
import * as React from 'react';
import { IItemRowProps } from './IItemRowProps';
import { Operations } from '../../constants/constants';



export default class ItemRow extends React.Component<IItemRowProps, any> {
    constructor(props: any, state: any) {
        super(props);

    }

    public render(): React.ReactElement<any> {
        return (

            <tr>
                <td>{this.props.item.id}</td>
                <td>{this.props.item.firstName}</td>
                <td>{this.props.item.lastName}</td>
                <td className="operation-buttons text-center">
                    <a href='#' onClick={() => this.props.changeAppMode(Operations.Detail, this.props.item.id)} className="btn btn-info"><i className="fa fa-info-circle"></i></a>
                    <a href='#' onClick={() => this.props.changeAppMode(Operations.EDIT, this.props.item.id)} className="btn btn-primary"><i className="fa fa-pencil"></i></a>
                    <a href='#' onClick={() => this.props.changeAppMode(Operations.DELETE, this.props.item.id)} className="btn btn-danger"><i className="fa fa-trash"></i></a>
                </td>
            </tr>
        );
    }
}

// <td className="ms-Table-rowCheck"></td>
// <td>{this.props.item.id}</td>
// <td>{this.props.item.title}</td>                
// <td>
//     <a href='#'
//         onClick={() => this.props.changeAppMode('detail', this.props.item.id)}
//         className='btn btn-info m-r-1em'> View
// </a>                   
//     <a href='#'
//         onClick={() => this.props.changeAppMode('edit', this.props.item.id)}
//         className='btn btn-primary m-r-1em'> Edit
// </a>
//     <a href='#'
//         onClick={() => this.props.changeAppMode('delete', this.props.item.id)}
//         className='btn btn-danger'> Delete
//                         </a>
// </td>