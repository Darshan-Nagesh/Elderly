export default{
	title:"service",
	name:"service",
	type:"document",
	fields:[
		{
			title:"name",//name of the service
			name:"name",
			type:"string"
		},
		{
			title:"location",//location of the place where service is needed
			name:"location",
			type:"geopoint"
		},
		{
			title:"date and time",
			name:"datetime",
			type:"datetime"
		},
		{
			title:"requester",//One who requests for a service
			name:"requester",
			type:"reference",
			to:[{type:"user"}]
		},
		{
			title:"accepter",//One who accepts  a service
			name:"accepter",
			type:"reference",
			to:[{type:"user"}]
		},
		
		{
			title:'work hour',
			name:'workhour',
			type:'string'
		}
	]
}
