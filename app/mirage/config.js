export default function() {
  this.get('/pages',function(db, request){
      //console.log("login info:" + request.username + "/" + request.password);
//Title: DS.attr(),
//owner: DS.attr(),
//Text: DS.attr(),
//Type: DS.attr(),
      let pscomponents = [{
              type: 'pscomponents',
              id: 1,
              attributes:
              {
                owner: 'Odin Xiong',
                type: 'Text',
                title: 'Title A',
                text: 'This is the first demo text',
              },
      },
      {
              type: 'pscomponents',
              id: 2,
              attributes:
              {
                owner: 'Jaycee Shi',
                type : 'Text',
                title :'Title B',
                text : 'This is the second demo text',
              },
      },
      {
              type: 'pscomponents',
              id: 3,
              attributes:
              {
                owner: 'Odin Xiong',
                type : 'Text',
                title :'Title C',
                text : 'This is the third demo text',
              },
      },];

      let pages = [{
          type: 'pages',
          id:1,
          attributes:{
            pageNum : 1,
            components: [{
              type: 'pscomponents',
              id: 1,
              attributes:
              {
                owner: 'Odin Xiong',
                type: 'Text',
                title: 'Title A',
                text: 'This is the first demo text',
              },
        }],
          }
        },
        {
          type: 'pages',
          id: 2,
          attributes:{
            pageNum : 2,
            components: pscomponents.filter(id, 1),
          }
        },
        {
          id: 3,
          type: 'pages',
          attributes:{
            pageNum : 3,
            components: pscomponents.filter(id, 1),
          }
        },
      ];
      return {data: pages};
  });
  
this.get('/rentals', function(db, request) {
    let rentals = [{
        type: 'rentals',
        id: 1,
        attributes: {
          title: 'Grand Old Mansion',
          owner: 'Veruca Salt',
          city: 'San Francisco',
          type: 'Estate',
          bedrooms: 152,
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
        }
      }, {
        type: 'rentals',
        id: 2,
        attributes: {
          title: 'Urban Living',
          owner: 'Mike Teavee',
          city: 'Seattle',
          type: 'Condo',
          bedrooms: 1,
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
        }
      }, 
      {
        type: 'rentals',
        id: 3,
        attributes: {
          title: 'Downtown Charm',
          owner: 'Violet Beauregarde',
          city: 'Portland',
          type: 'Apartment',
          bedrooms: 3,
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
        }
      },
        {
          type: 'rentals',
          id: 4,
          attributes:
          {
            title: 'Millennium Park Plaza',
            owner: 'Millennium Park Plaza Co.',
            city: 'Chicago',
            type: 'Apartment',
            bedrooms: 80,
            image: '/assets/EA-s.JPG'
          }
      }];

      if(request.queryParams.city !== undefined)
      {
        let filteredRentals = rentals.filter(
          function(i) 
          {
            return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
          });
        return {data: filteredRentals};
      }
      else
      {
        return {data: rentals};
      }
  });
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */
  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
