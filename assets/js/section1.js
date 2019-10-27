class Section1 extends React.Component {
  // 寬高比 0.81757508342
  state = {
    width: window.innerWidth > 600 ? 367.5 : window.innerWidth * 0.4,
    height: window.innerWidth > 600 ? 449.5 : window.innerWidth * 0.4 / 0.817
  };

  render() {
    return (
      <section id="goto56497" class="section-base mainBox background-setting"
        style={{ backgroundImage: "url(https://img.holkee.com/site/upload/5d2ed5d8-5550ws3ab-67f7-bfc96146/a042d313519572dcf08549f73e072309_normal.jpg)" }}>
        <div class="ContentsBox">
          <div class="imgBox">
            <amp-img
              src="https://img.holkee.com/site/upload/5d2ed5d8-5550ws3ab-67f7-bfc96146/08ee5a422d77d0ffd20e2bd05fd8eb44_normal.png"
              width={this.state.width} height={this.state.height} layout="intrinsic" />
          </div>
          <p class="sub_title">
            -高雄市燕巢青隆果菜運銷合作社-</p>
        </div>
      </section>
    )
  }
}
ReactDOM.render(<Section1 />, document.getElementById("section1"))

// class Section1 extends React.Component {
//   render() {
//     return (
//       <section id="goto56497" class="section-base mainBox background-setting"
//         style={{ backgroundImage: "url(https://img.holkee.com/site/upload/5d2ed5d8-5550ws3ab-67f7-bfc96146/a042d313519572dcf08549f73e072309_normal.jpg)" }}>
//         <div class="ContentsBox">
//           <div class="imgBox">
//             <amp-img
//               src="https://img.holkee.com/site/upload/5d2ed5d8-5550ws3ab-67f7-bfc96146/08ee5a422d77d0ffd20e2bd05fd8eb44_normal.png"
//               width="367.5" height="449.5" layout="intrinsic" />
//           </div>
//           <p class="sub_title">
//             -高雄市燕巢青隆果菜運銷合作社-</p>
//         </div>
//       </section>
//     )
//   }
// }
// ReactDOM.render(<Section1 />, document.getElementById("section1"))
