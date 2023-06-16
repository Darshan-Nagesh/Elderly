//products document
export default {
	title: 'products',
		name: 'products',
		type: 'document',
		fields: [
			//name of the products
			{
				title:'name',
				name:'name',
				type:'string'
			},
			//image  of the products
			{
				title:'image',
				name:'image',
				type:'image',
				options: {
					hotspot: true // <-- Defaults to false
				   }
			},
			//category of the product eg. vegetables 
			{
				title:'category',
				name:'category',
				type:'string'
			},
			
			//description of the product eg: Mallika mango
			{
				title:'description',
				name:'description',
				type:'string'
			},
			//price of the products
			{
				title: 'Price',
				name: 'price',
				type: 'number'
			  },
			  //Which shop they belong to
			  {
				title: 'shop',
				name: 'shop',
				type: 'reference',
					to: [
					  {type: 'store'},//pointing to shop 
					 
					]
			  }
		  ]
}