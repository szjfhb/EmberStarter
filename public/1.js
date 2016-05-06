// ---------- DATA LAYER ---------- //

Promise = Ember.RSVP.Promise;

function resolveLater(data) {
  return new Promise(function(resolve) {
    Ember.run.later(null, resolve, data, Math.random() * 3000);
  });
}

function rejectLater(reason) {
  return new Promise(function(_, reject) {
    Ember.run.later(null, reject, reason, Math.random() * 3000);
  });
}

function GetYelpReview(id) {
  switch(id) {

    case "tasty-n-alder-portland":
      return resolveLater({
        id:    "tasty-n-alder-portland",
        name:  "Tasty n Alder",
        stars: 5
      });

    case "coava-coffee-roasters-portland":
      return resolveLater({
        id:    "coava-coffee-roasters-portland",
        name:  "Coava Coffee Roasters",
        stars: 4
      });

    case "nongs-khao-man-gai-portland":
      return resolveLater({
        id:    "nongs-khao-man-gai-portland",
        name:  "Coava Coffee Roasters",
        stars: 3
      });

    default:
      return rejectLater({
        message: "Business Not Found"
      });

  }
}

function GetRelatedYelpReviews(id) {
  return resolveLater([
    {
      id:    "tasty-n-alder-portland",
      name:  "Tasty n Alder",
      stars: 5
    },
    {
      id:    "coava-coffee-roasters-portland",
      name:  "Coava Coffee Roasters",
      stars: 4
    },
    {
      id:    "nongs-khao-man-gai-portland",
      name:  "Nong’s Khao Man Gai",
      stars: 3
    }
  ].rejectBy('id', id));
}

















// ---------- APP CODEZ ---------- //

App = Ember.Application.create();

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return [
      {
        id: "tasty-n-alder-portland",
        name: "Tasty n Alder"
      },
      {
        id: "coava-coffee-roasters-portland",
        name: "Coava Coffee Roasters"
      },
      {
        id: "nongs-khao-man-gai-portland",
        name: "Nong’s Khao Man Gai"
      },
      {
        id: "no-such-business",
        name: "No Such Business"
      }
    ];
  }
});

App.YelpReviewComponent = Ember.Component.extend({

  businessId: null, // Passed in
  
  classNames: ['yelp-review'],
  
  classNameBindings: [
    'color',
    'isLoading:loading',
    'isLoaded:loaded',
    'isError:error'
  ],

  promise: function() {
    if (this.get('businessId')) {
      return GetYelpReview( this.get('businessId') );    
    } else {
      return null;
    }
  }.property('businessId'),

  recommendation: function() {
    var stars = this.get('model.stars');
    
    switch(stars) {

      case 5:
        return "drop everything and go there now!";
  
      case 4:
        return "would you like to book a table for lunch tomorrow?";
  
      case 3:
        return "meh.";

    }
  }.property('model.stars'),

  // This persist across model changes!
  click: function() {
    var colors = ['salmon', 'cornsilk', 'gold', 'maroon'];

    this.set('color', colors[ Math.floor( Math.random() * 4) ]);
  }

});

App.RelatedYelpReviewsComponent = Ember.Component.extend({

  businessId: null, // Passed in

  promise: function() {
    if (this.get('businessId')) {
      return GetRelatedYelpReviews( this.get('businessId') );    
    } else {
      return null;
    }
  }.property('businessId')
  
});





























// ----------- HAX ----------- //

Ember.Component.reopen({

  init: function() {
    this._super();

    // I'm not sure if passing in the model
    // directly is a good idea, but feels
    // like it should be possible. Or perhaps
    // the promise hook should get to decide
    // whether to use it or not?

    if (this.get('model')) {
      this.setProperties({
        isLoading: false,
        isLoaded: true,
        isError: false
      });
    } else {
      this._resolve();
    }
  },
  
  _resolve: function() {    
    var component = this;
    var promise = component.get('promise');

    if (!promise) {
      return;
    }

    // "Safe" re-render
    function rerender() {
      component.notifyPropertyChange('context');
    }
    
    component.setProperties({
      model: null,
      isLoading: true,
      isLoaded: false,
      isError: false
    });

    rerender();

    promise.then(
      function(model) {
        component.setProperties({
          model: model,
          isLoading: false,
          isLoaded: true,
          isError: false
        });
        rerender();
      },
      function(reason) {
        component.setProperties({
          model: reason,
          isLoading: false,
          isLoaded: false,
          isError: true
        });
        rerender();
      }
    );
  }.observes('promise'),

  layout: function() {
    if (this.get('isLoading')) {
      return this._loadingLayout;
    } else if (this.get('isError')) {
      return this._errorLayout;
    } else {
      return this._layout;
    }
  }.property().volatile()

});

Ember.ComponentLookup.reopen({
  
  lookupFactory: function(name, container) {
    container = container || this.container;

    var fullName = 'component:' + name;

    var templateFullName = 'template:components/' + name;

    var loadingTemplateFullName = 'template:components/' + name + '/loading';

    var errorTemplateFullName = 'template:components/' + name + '/error';

    container.injection(fullName, '_layout', templateFullName);

    container.injection(fullName, '_loadingLayout', loadingTemplateFullName);

    container.injection(fullName, '_errorLayout', errorTemplateFullName);

    return container.lookupFactory(fullName);
  }

});
















