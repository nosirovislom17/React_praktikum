import React from "react";
// ============================ | function component | ===================================

// export const Counter = () => {
//   const [count, setCount] = useState(0);
//   function inc() {
//     return setCount(count + 1);
//   }
//   function dec() {
//     return setCount(count - 1);
//   }
//   return (
//     <>
//       <h3>Count:{count}</h3>
//       <button onClick={inc} className="btn btn-success">
//         Inc
//       </button>
//       <button onClick={dec} className="btn btn-danger">
//         Dec
//       </button>
//     </>
//   );
// };

// ============================ | class component | ===================================

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
  }

  inc() {
    this.setState({ count: this.state.count + 1 });
  }
  dec() {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <>
        <h3>Count:{this.state.count}</h3>
        <button className="btn btn-success" onClick={this.inc}>
          inc
        </button>
        <button className="btn btn-danger" onClick={this.dec}>
          dec
        </button>
      </>
    );
  }
}
