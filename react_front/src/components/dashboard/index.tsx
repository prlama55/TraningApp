import React, { Component } from "react";
import Cards from "./Cards";
import Charts from "./Charts";
import {RouteComponentProps} from 'react-router-dom'
interface Props extends RouteComponentProps<any>{
  title?: string;
}
interface User {
  username: string;
  role: string;
}
interface State {
  chartData: any;
  cardData: any;
  tableData: User[];
}
class Dashboard extends Component<Props, State> {
  // state = {
  //   chartData: { c1: [1, 2, 3] },
  //   cardData: { header: "Card", body: "Body", footer: "Footer" },
  //   tableData: [],
  // };
    componentDidMount(): void {
        let getAuthFromSession= sessionStorage.getItem("auth");
        if(!getAuthFromSession){
            // @ts-ignore
            this.props.history('/login')
        }
    }

    constructor(props: Props) {
    super(props);
    this.state = {
      chartData: { c1: [1, 2, 3] },
      cardData: { header: props.title, body: "Body", footer: "Footer" },
      tableData: [],
    };
  }
  render() {
    const { chartData, cardData } = this.state;
    return (
      <div>
        <Cards title="card1" cardData={cardData} />
        <Cards title="card2" cardData={cardData} />
        <Cards title="card3" cardData={cardData} />
        <Cards title="card4" cardData={cardData} />
        <Cards title="card5" cardData={cardData} />
        <Charts chartData={chartData} />
      </div>
    );
  }
}

export default Dashboard;
