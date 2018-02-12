

import Dispatcher from "../Dispatcher/Dispatcher";
import { ActionTypes } from './../constants/actionTypes';
import { EventEmitter } from 'events';
import { Author } from "../model/Author";

const assign = require('object-assign');
const _ = require('lodash');
const CHANGE_EVENT = 'change';

let _authors: Array<Author>;

class AuthorStore extends EventEmitter {

	constructor() {
		super();
		Dispatcher.register(this.dispatcherCallback.bind(this))
	}
	emitChange() {
		this.emit(CHANGE_EVENT);
	}	

	addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
	getAllAuthors() {
		
		return _authors;
	}

	getAuthorById(id) {
		return _.find(_authors, { id: id });
	}

	dispatcherCallback(action) {
		switch (action.actionType) {
			case ActionTypes.INITIALIZE:
				_authors = action.initialData.authors;				
				break;
			case ActionTypes.CREATE_AUTHOR:
				_authors.push(action.author);
				break;
			case ActionTypes.UPDATE_AUTHOR:
				debugger;
				var existingAuthor = _.find(_authors, { id: action.author.id });
				var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
				_authors.splice(existingAuthorIndex, 1, action.author);				
				break;
			case ActionTypes.DELETE_AUTHOR:
				_.remove(_authors, function (author) {
					return action.id === author.id;
				});
				break;
			default:
			// no op
		}
		this.emitChange();
        return true;
	}
}

export default new AuthorStore();



