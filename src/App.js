import React from "react";
import Header from "./components/Header";
import List from "./components/List";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header title_site="Список дел" />
        <main>
          <List />
        </main>
        <aside></aside>
      </div>
    );
  }
}

export default App;
