import { gql, useQuery } from "@apollo/client";

const PRODUCT_DETAIL = gql`
  query Product($id: String!) {
    product(id: $id) {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        name
      }
      prices {
        currency {
          symbol
        }
        amount
      }
      brand
    }
  }
`;

export const useProduct = (id) => {
  const { error, loading, data } = useQuery(PRODUCT_DETAIL, {
    variables: {
      id,
    },
  });
  return {
    error,
    loading,
    data,
  };
};
