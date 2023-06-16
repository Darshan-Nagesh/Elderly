//Store schema
export default {
	title: 'store',
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
			//image of the shop
			{
				title:'image of store',
				name:'image',
				type:'image'
			},

		//NOTE::Deleting this because It becomes difficult to fetch all the items in a store

			//array of items available in the store
			//it is pointing to the products and reference of that is stored here
			// {
			// 	title: 'Items available',
			// 	name: 'items',
			// 	type: 'array',
			// 	of: [
			// 	  {
			// 		type: 'reference',
			// 		to: [
			// 		  {type: 'products'},//pointint to products schema
					 
			// 		]
			// 	  }
			// 	]
			//   }
		]
}