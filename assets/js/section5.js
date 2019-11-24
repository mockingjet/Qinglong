class Section5 extends React.Component {


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
    const wrappedElement = document.querySelector('.imgBox5');
    if (this.isBottom(wrappedElement)) {
      console.log('header bottom reached');
      wrappedElement.classList.remove('hidden')
      wrappedElement.classList.add('bounceIn')
      document.removeEventListener('scroll', this.trackScrolling);
    }
  };

  render() {
    return (
      <section id="goto56498" class="section-base about_us_box background-setting"
        style={{ backgroundImage: "url(https://img.holkee.com/site/theme/unknown/fa695fab69b265db3b5a47f6cd658377_normal.jpg)" }}>
        <div class="ContentsBox clearfix">
          <div class="tBox">
            <h3 class="main_title">
              關於他的一些故事<br />
              理事主席-張厚深</h3>
          </div>
          <div class="bBox">
            <div class="imgBox imgBox5 hidden">
              <amp-img
                src="https://img.holkee.com/site/upload/5d2ed5d8-5550ws3ab-67f7-bfc96146/68728b21c9c6eb62583cd6c100d508f1_normal.jpg"
                width="640" height="550" layout="intrinsic" />
            </div>
            <p class="sub_title"
              style={{ color: "#666" }}>
              年方三十的張厚深是現任燕巢青隆運銷合作社理事主席， 很多人以為他少年得志， 其實他已經拚搏十年之久。十九歲時父親驟逝， 他放下學業， 回家接手父親的貨運事業， 二十三歲時母親生病，
              再接下母親經營的合作社， 順勢將運、銷合而為一， 將果農運到合作社的芭樂， 再透過貨運團隊運送出去， 成功轉換為「一條龍」模式。於他而言， 每天最重要的事， 卻是要確保芭樂貨源充足、價格穩定，
                        讓果農收入無虞，也讓貨運可以按時出貨， 維持信用， 十年如一日。<br />
              <br />
            </p>
          </div>
        </div>
      </section>
    )
  }
}
ReactDOM.render(<Section5 />, document.getElementById("section5"))