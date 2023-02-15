import React, { useEffect, useState } from "react";
import Message from "./components/message";

const App = () => {
	// const contentstyle = {
	//   color:"blue",
	//   Fontsize:"18px"
	//   // React上の記法として、font-sizeをFontsizeにしている。
	// };
	const onClickCountUp = () => {
		setNum(Num + 1);
	};

	const [Num, setNum] = useState(0);
	// //左側が変化する数値。右側が変化させる数値
	// 可変の状態
	// ⇒stateが変更されると再レンダリングされる
	// 劇的に値が変化するときに用いる

	const onClickswitchShowFlag = () => {
		setFaseShowFlag(!FaseShowFlag);
	};
	const [FaseShowFlag, setFaseShowFlag] = useState(false);

	useEffect(() => {
		if (Num > 0) {
			if (Num % 3 === 0) {
				FaseShowFlag || setFaseShowFlag(true);
			} else {
				FaseShowFlag && setFaseShowFlag(false);
			}
		}
	}, [Num]);
	// ステートが最初から処理が走る
	// UseEffectを使い、[]の中の条件で処置のタイミングを制御可能
	// 第２引数を[]だけにすると（今回でいう[Num]のところ）最初の１回だけ実行という処理に変更できる。

	// console,log(再レンダリング);
	return (
		<>
			<h1 style={{ color: "red" }}>こんにちは</h1>
			{/* <p　style={contentstyle}>お元気ですか</p> */}
			<Message color="pink">元気です</Message>
			<Message color="blue">元気です</Message>
			<button onClick={onClickCountUp}>カウントアップ</button>
			<br />
			<button onClick={onClickswitchShowFlag}>on/off</button>
			<button>on/off</button>
			<p>{Num}</p>
			{/* &&　⇒左辺がTrueなら右辺を出力する。論理演算子*/}
			{FaseShowFlag && <p>ON</p>}

			{/* ||　⇒左辺がFalseなら右辺を出力する */}
			{/* {FaseShowFlag || <p>OFF</p>} */}
		</>
	);
};

// このファイル以外でApp関数を利用できるよう指定
export default App;

// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
