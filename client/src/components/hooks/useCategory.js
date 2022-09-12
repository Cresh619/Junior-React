import { gql, useQuery } from "@apollo/client";

const GET_CATEGORY = gql`
query($name: String!){
  category(input:{title: $name}) {
    name
    products {
      name
      id
      gallery
      prices{
        amount
        currency{
          symbol
        }
      }
    }
  }
}
`;

export const useCategory = (name) => {
    const {data, loading, error} = useQuery(GET_CATEGORY, {
      variables: {
        name,
    }
  }
    );
    return {
        data,
        loading,
        error
    }
};