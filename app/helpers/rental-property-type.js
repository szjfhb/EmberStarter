import Ember from 'ember';

const communityProperTypes = [
'Condo', 
'Townhouse',
'Apartment'
];

export function rentalPropertyType([type]/*, hash*/) {
	if(communityProperTypes.contains(type))
	{
		return "Community";
	}

  	return 'Standalone';
}

export default Ember.Helper.helper(rentalPropertyType);
