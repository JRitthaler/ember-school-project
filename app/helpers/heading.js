import Ember from 'ember';

export function heading([headerName, headingNumber = 1]/*, hash*/) {
//  return Ember.String.htmlSafe('<h1>' + headerName + '</h1>');
    return Ember.String.htmlSafe(`<h${headingNumber}>${headerName}</h${headingNumber}>`);
}

export default Ember.Helper.helper(heading);
