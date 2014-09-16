/* ---------------------------------------------------- +/

## Main ##

Global client-side code. Loads last. 

/+ ---------------------------------------------------- */

//

// Meteor.defer(function () {
//   Reveal.initialize();
// })


Template.survey.rendered = function(){
  Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true
  });
};
