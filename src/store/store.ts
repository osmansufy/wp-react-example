import apiFetch from "@wordpress/api-fetch";
import { createReduxStore, register } from "@wordpress/data";

// Define types for state and actions
export interface State {
  posts: any[];
  prices: Record<string, number>;
  discountPercent?: number;
  extentions: {
    [ExtentionType.DokanLite]: boolean;
    [ExtentionType.DokanPro]?: boolean;
  };
}
enum ExtentionType {
  DokanLite = "DokanLite",
  DokanPro = "DokanPro",
}
interface FetchFromAPIAction {
  type: "FETCH_FROM_API";
  path: string;
}

interface SetPostsAction {
  type: "SET_POSTS";
  posts: any[];
}

interface SetPriceAction {
  type: "SET_PRICE";
  item: string;
  price: number;
}

interface StartSaleAction {
  type: "START_SALE";
  discountPercent: number;
}

type Action =
  | FetchFromAPIAction
  | SetPostsAction
  | SetPriceAction
  | StartSaleAction;

const DEFAULT_STATE: State = {
  posts: [],
  prices: {},
  extentions: {
    [ExtentionType.DokanLite]: true,
  },
};

const actions = {
  fetchFromAPI(path: string): FetchFromAPIAction {
    return {
      type: "FETCH_FROM_API",
      path,
    };
  },
  setPosts(posts: any[]): SetPostsAction {
    return {
      type: "SET_POSTS",
      posts,
    };
  },
  setPrice(item: string, price: number): SetPriceAction {
    return {
      type: "SET_PRICE",
      item,
      price,
    };
  },
  startSale(discountPercent: number): StartSaleAction {
    return {
      type: "START_SALE",
      discountPercent,
    };
  },
};

export const storeName = "my-shop";

const store = createReduxStore(storeName, {
  reducer(state: State = DEFAULT_STATE, action: Action): State {
    switch (action.type) {
      case "SET_PRICE":
        return {
          ...state,
          prices: {
            ...state.prices,
            [action.item]: action.price,
          },
        };

      case "START_SALE":
        return {
          ...state,
          discountPercent: action.discountPercent,
        };

      case "SET_POSTS":
        return {
          ...state,
          posts: action.posts,
        };

      default:
        return state;
    }
  },

  actions,

  selectors: {
    getPosts(state: State) {
      return state.posts;
    },
    getPrice(state: State, item: string) {
      return state.prices[item] || 0;
    },
    getDiscountPercent(state: State) {
      return state.discountPercent || 0;
    },
  },

  controls: {
    FETCH_FROM_API(action: FetchFromAPIAction) {
      return apiFetch({ path: action.path });
    },
  },

  resolvers: {
    *getPosts(): Generator<any, any, any> {
      const path = "/wp/v2/posts";
      const posts = yield actions.fetchFromAPI(path);
      return actions.setPosts(posts);
    },
  },
});

register(store);
