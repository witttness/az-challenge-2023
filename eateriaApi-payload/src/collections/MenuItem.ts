import { CollectionConfig } from 'payload/types';
import { Type as MediaType } from './Media';

const MenuItems: CollectionConfig = {
  slug: 'menuitems',
  access: {
    read: () => true
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'photo',
      label: 'Photo',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'category',
      label: 'Category',
      type: 'select',
      options: ["Add_Ons", "Appetizers", "Beverages", "Chicken", "Desserts", "Pizza", "Salads", "Sandwiches", "Specialties"]
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea'
    },
    {
      name: 'price',
      label: 'Price ($)',
      type: 'number'
    },
    {
      name: 'calories',
      label: 'Calories',
      type: 'number'
    },
    {
      name: 'customerRating',
      label: 'Customer Rating (1-5)',
      type: 'number'
    },
  ],
}

export default MenuItems;