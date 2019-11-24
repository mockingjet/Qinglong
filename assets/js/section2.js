class Section2 extends React.Component {



  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  trackScrolling = () => {
    const wrappedElement = document.querySelector('.imgBox2');
    if (this.isBottom(wrappedElement)) {
      console.log('header bottom reached');
      wrappedElement.classList.remove('hidden')
      wrappedElement.classList.add('bounceIn')
      document.removeEventListener('scroll', this.trackScrolling);
    }
  };

  render() {
    return (
      <section id="goto56499" class="section-base about_us_box background-setting bg_translucent_w"
        style={{ backgroundImage: "url(https://img.holkee.com/site/upload/5d2ed5d8-5550ws3ab-67f7-bfc96146/13c39ccd2de871786cca357560ff84da_normal.jpg)" }}>
        <div class="ContentsBox clearfix">
          <div class="tBox">
            <h3 class="main_title">
              80位果農<br />
              100公頃種植面積</h3>
          </div>
          <div class="bBox">

            <div class="imgBox imgBox2 hidden">
              <amp-img
                src="https://img.holkee.com/site/upload/5d2ed5d8-5550ws3ab-67f7-bfc96146/5bae4930fc4d1894f4631275fb0f07de_normal.jpg"
                width="960" height="350" layout="intrinsic" />
            </div>
            <p class="sub_title">
              燕巢青隆合作社目前與80位芭樂果農合作，總種植面積達100公頃，本合作社嚴格控管用藥，確保品質，採共計共選方式，將芭樂按照等級分級再計價，也多元開發合作對象，除了果菜市場，也在各種頂級販售通路，確保銷售管道暢通無礙。<br />
              <br />
              <b>"讓好品質作物得到應有的價格，是我們的責任與成就感。"</b><br />
              <br />
              本公司主要輔導行銷農產品生產來源：<br />
              燕巢青隆果菜運銷合作社、高雄市果樹產銷班第26、28班、高雄市政府青年型農、行政院農委會產銷履歷達人等農產品生產及行銷。<br />
              <br />
              自有品牌：<br />
              <b>燕巢青隆、燕巢芭樂哥、玉荷寶寶</b></p>
          </div>
        </div >
      </section >
    )
  }
}
ReactDOM.render(<Section2 />, document.getElementById("section2"))
