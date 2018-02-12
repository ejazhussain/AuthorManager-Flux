import * as React from 'react';


//API
import { IAuthorAPI } from '../../api/IAuthorAPI';
import { AuthorAPI } from '../../api/AuthorAPI';

//props and stats
import { IEditProps } from './IEditProps';
import { IEditState } from './IEditState';
import { Author, IAuthor } from '../../model/Author';
import { Operations } from '../../constants/constants';
import AuthorActions from '../../Actions/AuthorActions';
import AuthorStore from '../../Stores/AuthorStore';

const toastr = require('toastr');


export default class Edit extends React.Component<IEditProps, IEditState> {
    private AuthorService: IAuthorAPI;

    public constructor(props: IEditProps, state: IEditState) {
        super(props);
        this.state = {
            item: new Author()
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this._onChange = this._onChange.bind(this);
        this.AuthorService = new AuthorAPI();
    }



    public handleChange(event) {

        let field: any = event.target.name;
        let value: any = event.target.value;

        this.state.item[field] = value;
        this.setState({
            item: this.state.item
        });
    }

    public onSubmit(event) {

        debugger;
        event.preventDefault();
        AuthorActions.updateAuthor(this.state.item);
        // this.AuthorService.saveAuthor(this.state.item).then((item) => {           
        //     this.setState({
        //         item
        //     });
        // });
    }


    public componentDidMount() {
        ///AuthorStore.addChangeListener('STORE_UPDATE_AUTHOR', this._onChange); 
        AuthorStore.addChangeListener(this._onChange);

        let itemId: string = this.props.itemId;
        this.AuthorService.getAuthorById(itemId).then((item) => {
            this.setState({
                item
            });
        });

    }

    // on unmount, kill course fetching in case the request is still pending
    public componentWillUnmount() {
        //AuthorStore.removeChangeListener('STORE_UPDATE_AUTHOR', this._onChange);
        AuthorStore.removeChangeListener(this._onChange);

        //this.dataService.abort();
    }
    public _onChange() {       
        debugger; 
        toastr.success('Author saved.');
        this.props.changeAppMode(Operations.READ, null)        
    }


    // render the component based on current or selected mode  
    public render(): React.ReactElement<IEditProps> {
        return (
            <div>
                <a href='#'
                    onClick={() => this.props.changeAppMode(Operations.READ, 'null')}
                    className='btn btn-primary margin-bottom-1em'>
                    All Items
                 </a>

                <div className="card">
                    <div className="card-header">
                        Featured
                 </div>
                    <div className="card-body">
                        <h5 className="card-title">Title can go here</h5>
                        <form>
                            <fieldset>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">Id</label>
                                            <div className="col-sm-9">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="id"
                                                    name="id"
                                                    placeholder=""
                                                    value={this.state.item.id}
                                                    onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">First name</label>
                                            <div className="col-sm-9">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="firstName"
                                                    name="firstName"
                                                    placeholder=""
                                                    value={this.state.item.firstName}
                                                    onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">First name</label>
                                            <div className="col-sm-9">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="lastName"
                                                    name="lastName"
                                                    placeholder=""
                                                    value={this.state.item.lastName}
                                                    onChange={this.handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6"></div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <input type="submit" value="Save" className="btn btn-default" onClick={this.onSubmit} />
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}


