import * as React from 'react';


//API
import { IAuthorAPI } from '../../api/IAuthorAPI';
import { AuthorAPI } from '../../api/AuthorAPI';

//props and stats
import { IDetailProps } from './IDetailProps';
import { IDetailState } from './IDetailState';
import { Author } from '../../model/Author';



export default class Detail extends React.Component<IDetailProps, IDetailState> {
    private AuthorService: IAuthorAPI;

    public constructor(props: IDetailProps, state: IDetailState) {
        super(props);
        this.state = {
            item: new Author()
        };
        debugger;
        this.AuthorService = new AuthorAPI();
    }
    public componentDidMount() {
        let itemId: string = this.props.itemId;
        this.AuthorService.getAuthorById(itemId).then((item) => {
            this.setState({
                item
            });
        });
    }
    // render the component based on current or selected mode  
    public render(): React.ReactElement<IDetailProps> {


        return (
            <div>
                <a href='#'
                    onClick={() => this.props.changeAppMode('read', 'null')}
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
                            <fieldset disabled>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">Id</label>
                                            <div className="col-sm-9">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="itemId"
                                                    placeholder=""
                                                    value={this.state.item.id} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">First name</label>
                                            <div className="col-sm-9">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="firstName"
                                                    placeholder=""
                                                    value={this.state.item.firstName} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6"></div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}


