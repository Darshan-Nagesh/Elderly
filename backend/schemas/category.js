export default {
	
		title: 'Category',
		name: 'category',
		type: 'document',
		fields: [
		  {
			title: 'Name',
			name: 'name',
			type: 'string'
		  },
		  {
			title: 'item_photo',
			name: 'photo',
			type: 'image',
			options: {
			  hotspot: true // <-- Defaults to false
		 	}
		  }
		]
	  
}