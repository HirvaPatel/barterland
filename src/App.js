import "./App.css";
import { Footer } from "./components/footer/footer";
import { Nav } from "./components/nav/nav";
import { ProductList } from "./components/productList/productList";
import { SearchOptions } from "./components/searchOptions/searchOptions";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <SearchOptions></SearchOptions>
      <ProductList></ProductList>
      <Footer></Footer>
    </div>
  );
}

export default App;
