import * as React from 'react';


//API
import { IAuthorAPI } from '../../api/IAuthorAPI';
import { AuthorAPI } from '../../api/AuthorAPI';

//props and stats
import { IDeleteProps } from './IDeleteProps';
import { IDeleteState } from './IDeleteState';
import { Author } from '../../model/Author';
import { Operations } from '../../constants/constants';

const toastr = require('toastr');


export default class Delete extends React.Component<IDeleteProps, IDeleteState> {
    private AuthorService: IAuthorAPI;

    public constructor(props: IDeleteProps, state: IDeleteState) {
        super(props);
        this.state = {
            item: ""
        };

        this.AuthorService = new AuthorAPI();
    }
    public componentDidMount() {
        let itemId: string = this.props.itemId;
        this.AuthorService.removeAuthor(itemId).then((item: string) => {
            this.setState({
                item
            });
        });
        toastr.success('Author Removed.');
        this.props.changeAppMode(Operations.READ, null)
    }
    // render the component based on current or selected mode  
    public render(): React.ReactElement<IDeleteProps> {


        return (
            <div>
            </div>
        );
    }

}
