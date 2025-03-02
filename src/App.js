import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import AddDelo from "./components/AddDelo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goalList: [
        { id: 1, title: "Learn Html", description: "Learn basics tags" },
        { id: 2, title: "Learn Css", description: "Learn basics css" },
        { id: 3, title: "Learn JavaScript", description: "Learn basics JS" },
      ],
    };
    this.addDelo = this.addDelo.bind(this);
  }
  render() {
    return (
      <div>
        <Header title_site="Список дел" />
        <div className="display">
          <aside>
            <AddDelo onAdd={this.addDelo} />
          </aside>
          <main>
            <List goalList={this.state.goalList} />
          </main>
        </div>
      </div>
    );
  }

  addDelo(delo) {
    const id = this.state.goalList.length + 1;
    this.setState({ goalList: [...this.state.goalList, { id, ...delo }] });
  }
}

export default App;
