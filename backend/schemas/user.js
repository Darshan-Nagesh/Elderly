export default 
{
	title:"user",
	name:"user",
	type:"document",
	fields:[
		{
			title:"name",
			name:"name",
			type:"string"
		}
		,
		{
			title:"address",
			name:"address",
			type:"geopoint"
		},
		{
			title:"mobile number",
			name:"mobilenum",
			type:"number"
		},
		{
			title:"email",
			name:"email",
			type:"string"
		},
		{
			title:"password",
			name:"password",
			type:"string"
		},
		{
			title:"items",
			name:"items",
			type: "array",
			of: [
				{
					type: "reference",
					to:[
						{type:"products"}
					]
				}
				]
		}
	]
}