//Store schema
export default {
	title: 'store name',
		name: 'store',
		type: 'document',
		fields: [
			//name of the shop
			{
				
					title:'name of the shop',
					name:'name',
					type:'string'
				
			},
			//brief description of the shop
			{
				title:'description',
				name:'desc',
				type:'string'
			},
			//array of items available in the store
			//it is pointing to the products and reference of that is stored here
			{
				title: 'Items available',
				name: 'items',
				type: 'array',
				of: [
				  {
					type: 'reference',
					to: [
					  {type: 'products'},//pointint to products schema
					 
					]
				  }
				]
			  }
		]
}