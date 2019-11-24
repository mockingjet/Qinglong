class Section6 extends React.Component {
  componentDidMount() {
    document.addEventListener('scroll', _.debounce(this.trackScrolling, 100));
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  outOfBottom(el) {
    return el.getBoundingClientRect().bottom * 2 < -window.innerHeight / 2;
  }

  trackScrolling = () => {
    const wrappedElement = document.querySelector('.main_title6');

    if (this.isBottom(wrappedElement)) {
      console.log('header bottom reached');
      wrappedElement.classList.add('animated', 'pulse')
      // document.removeEventListener('scroll', this.trackScrolling);

    }
    if (this.outOfBottom(wrappedElement)) {
      wrappedElement.classList.remove('animated', 'pulse')
    }
  };

  render() {
    return (
      <section id="goto56500" class="section-base video_box background-setting"
        style={{ backgroundImage: "url(https://img.holkee.com/site/upload/5d2ed5d8-5550ws3ab-67f7-bfc96146/d84134072d342e960fec85c28b5611ae_normal.jpg)" }}>
        <div class="ContentsBox">
          <h3 class="main_title main_title6"
            style={{ color: "#8BC34A" }}>
            <br />
            感謝大愛電視台<br />
            採訪及播出</h3>
          <p class="sub_title"
            style={{ color: "#000000" }}>
            農夫與他的田</p>
          <div class="embedBox">
            <amp-youtube width="960" height="600" layout="responsive" data-videoid="90ykAumC4A0" autoplay>
            </amp-youtube>
          </div>
        </div>
      </section>
    )
  }
}
ReactDOM.render(<Section6 />, document.getElementById("section6"))
