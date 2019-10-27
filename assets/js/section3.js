class Section3 extends React.Component {

  state = {
    width: window.innerWidth > 600 ? 400 : 300,
    height: window.innerWidth > 600 ? 400 : 300
  };

  render() {
    return (
      <section id="goto86252" class="section-base about_us_box background-setting bg_translucent_k"
        style={{ backgroundImage: "url(https://img.holkee.com/site/upload/5d2ed5d8-5550ws3ab-67f7-bfc96146/8a59de351718171a3f30c0740d30fe8b_normal.jpg)" }}>
        <div class="ContentsBox clearfix">
          <div class="tBox">
            <h3 class="main_title">
              主要產銷商品為番石榴<br />
              另外也有其他品項</h3>

          </div>
          <div class="bBox">
            <div class="imgBox">
              <amp-img
                src="https://img.holkee.com/site/upload/5d2ed5d8-5550ws3ab-67f7-bfc96146/f4d4389fbf7899c0b2f2cd516b0ed4ea_normal.jpg"
                width={this.state.width} height={this.state.height} layout="intrinsic" />
            </div>
            <p class="sub_title">
              品種：珍珠芭樂、帝王芭樂<br />
              <br />
              銷售國家 : 杜拜、加拿大。<br />
              產品認證 : GGAP全球認證，TGAP台灣產銷履歷驗證、高雄首選。<br />
              <br />
              其他農產品：<br />
              小玉西瓜、大西瓜、橙蜜香小番茄、玉女小番茄、麗金小番茄、富有柿、高接梨、新興梨、幸水梨、砂糖橘、椪柑、檸檬、玉荷包荔枝、枇杷、百香果、美濃瓜</p>
          </div>
        </div>
      </section>
    )
  }
}
ReactDOM.render(<Section3 />, document.getElementById("section3"))
