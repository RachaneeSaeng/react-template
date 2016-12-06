import * as React from 'react'; 
import * as ReactDOM from 'react-dom';

// export default function App(props) {
//   return (<h1>Hello... it's me!!!</h1>);
// }

// Inheitance pattern can trig hot-loader (conposition pattern don't)
export default class App extends React.Component<any, any> {
	constructor(props: any) {
    super(props);
  }
	render() {
		return (<h1>Hello... it's me!</h1>);
	}
}