import { request, gql } from 'graphql-request';
const MASTER_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

/**
 * Fetch categories from the backend
 * @returns  The fetched categories
 */
const GetCategory = async () => {
  const query = gql`
    query Categories($first: Int) {
      categories(first: $first) {
        id
        name
        slug
        icon {
          url
        }
      }
    }
  `;

  const variables = { first: 50 };

  try {
    const result = await request(MASTER_URL, query, variables);
    return result;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return null;
  }
};

const GetBusiness = async (category) => {
  const query = gql`
    query GetBusiness($category: String!) {
      restaurants(where: { categories_some: { slug: $category } }) {
        about
        address
        banner {
          url
        }
        categories {
          name
        }
        id
        name
        restroType
        workingHours
      }
    }
  `;
  
  const variables = { category: category.trim() };

  try {
    console.log('Sending request with variables:', variables); // Debugging log
    const result = await request(MASTER_URL, query, variables);
    console.log('Received result:', result); // Debugging log
    return result;
  } catch (error) {
    console.error('Error fetching businesses:', error);
    return null;
  }
};
const GetBusinessDetail = async (businessid) => {
  const query = `
  query RestaurantDetail {
    restaurant(where: { id: "`+businessid+`" }) {
      about
      address
      banner {
        url
      }
      categories {
        name
      }
      id
      name
      restroType
      workingHours
      slug
      menu {
        ... on Menu {
          id
          category
          menuitem {
            ... on Menuitem {
              id
              name
              description
              price
              productimage {
                url
              }
            }
          }
        }
      }
    }
  }
`;

  try {
    //console.log('Sending request with variables:'); // Debugging log
    const result = await request(MASTER_URL, query);
    console.log('Received result:', result); // Debugging log
    return result;
  } catch (error) {
    console.log('Error fetching businesses:', error);
    return null;
  }
}
const AddtoCart=async(data)=>{
  const query=gql`
  mutation Addtocart {
  createUserCart(
    data: {email: "`+data?.email+`", price:`+data.price+`,
     productDescription: "`+data.description+`", productName: "`+data.name+`", productimage: "`+data.productImage+`"}
  ) {
    id
  }
  publishManyUserCarts(to: PUBLISHED) {
    count
  }
}`
}
export default {
  GetCategory,
  GetBusiness,
  GetBusinessDetail,
  AddtoCart
};
