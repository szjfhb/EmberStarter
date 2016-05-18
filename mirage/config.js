export default function() {
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  this.timing = 0;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');
  */
    this.get('/datafeeds');
	this.get('/templates', (schema, request) =>{
    console.log('templates');
    console.log(schema);
    console.log(request);
    var template = schema.template.find(request.queryParams.id);
    if(request.queryParams.page !== undefined)
    {
      return template.pages.findBy('id', request.queryParams.page);
    }
    return template;
  });
  this.get('/templates/:id', (schema, request) =>{
    // console.log('templates/:id');
    // console.log(schema);
    // console.log(request);
    return schema.template.find(request.params.id);
  });
  var templateJson = 'template.json';
  this.get(templateJson, (schema, request) =>{
    console.log(schema);
    console.log(request);
  });
  this.post(templateJson, (schema) =>{
    //save the template...
  });

  this.put(templateJson, (schema) =>{
    //update records.
  });

  this.del(templateJson, (schema) =>{
    //delete records.
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
      }, {
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
      }, {
        type: 'rentals',
        id: 4,
        attributes: {
          title: 'Millennium Park Plaza',
          owner: 'Millennium Park Plaza Co.',
          city: 'Chicago',
          type: 'Apartment',
          bedrooms: 80,
          image: '/assets/EA-s.JPG'
        }
      }];

      if (request.queryParams.city !== undefined) {
        let filteredRentals = rentals.filter(
          function(i) {
            return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
          });
        return {
          data: filteredRentals
        };
      } else {
        return {
          data: rentals
        };
      }
    });
}

  /*
  You can optionally export a config that is only loaded during tests
  export function testConfig() {

  }
  */