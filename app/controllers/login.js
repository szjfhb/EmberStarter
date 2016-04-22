import Ember from 'ember';

export default Ember.Controller.extend({
	reset: function (){
		this.setProperties({
			username:"",
			password:"",
			errorMessage:""
		});
	},
	login: function(){
		this.set('errorMessage', "");
		var data = this.getProperties('username', 'password');
		//alert("Username: " + data.username + " Password: " + data.password);
		if(true)//data.username == "test" && data.password=="mstar")
		{
			//Ember.url.redirect('/PSWeb/');
		}
		else
		{
			this.set('errorMessage', "");
		}
		
		//Ember.$.post('auth.json', data).then(function(response)
		//{
			//if(response.success)
			//{
				//this.set('token', response.token);
			//}
		//});
	}
});
