import Ember from 'ember';

export function ratingBar([rating, inputWidth], {color = 'blue'}) {
  let width = inputWidth ? `${inputWidth}px` : '100%';
  let percentage = rating * 10;
  return Ember.String.htmlSafe(`
      <div class='rating-bar' style='width: ${width};'>
        <span class = "inner-bar" style='width: ${percentage}%;
                      background-color: ${color}'></span>
      </div>
    `);
}

export default Ember.Helper.helper(ratingBar);
