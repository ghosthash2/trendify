import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import TradingViewBuy from "./pages/TradingViewBuy";
import LandingPage from "./pages/LandingPage";
import CoinDirectoryTrending from "./pages/CoinDirectoryTrending";
import TradingViewSell from "./pages/TradingViewSell";
import SearchCoins from "./pages/SearchCoins";
import Profile from "./pages/Profile";
import SearchAccounts from "./pages/SearchAccounts";
import CreateCoin from "./pages/CreateCoin";
import CoinDirectoryLatest from "./pages/CoinDirectoryLatest";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/coin-directory-trending":
        title = "";
        metaDescription = "";
        break;
      case "/trading-view-sell":
        title = "";
        metaDescription = "";
        break;
      case "/search-coins":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/search-accounts":
        title = "";
        metaDescription = "";
        break;
      case "/create-coin":
        title = "";
        metaDescription = "";
        break;
      case "/coin-directory-latest":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<TradingViewBuy />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route
        path="/coin-directory-trending"
        element={<CoinDirectoryTrending />}
      />
      <Route path="/trading-view-sell" element={<TradingViewSell />} />
      <Route path="/search-coins" element={<SearchCoins />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/search-accounts" element={<SearchAccounts />} />
      <Route path="/create-coin" element={<CreateCoin />} />
      <Route path="/coin-directory-latest" element={<CoinDirectoryLatest />} />
    </Routes>
  );
}
export default App;
