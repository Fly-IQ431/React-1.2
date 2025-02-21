import React from "react";

class List extends React.Component {
  goalList = [
    { id: 1, title: "Learn Html", description: "Learn basics tags" },
    { id: 2, title: "Learn Css", description: "Learn basics css" },
    { id: 3, title: "Learn JavaScript", description: "Learn basics JS" },
  ];

  render() {
    if (this.goalList.length > 0)
      return (
        <div className="main_delo">
          {this.goalList.map((el) => (
            <div className="delo" key={el.id}>
              <h3>{el.title} </h3>
              <p>{el.description}</p>
            </div>
          ))}
        </div>
      );
    else
      return (
        <div className="delo">
          <h3>Список пуст</h3>
        </div>
      );
  }
}

export default List;
