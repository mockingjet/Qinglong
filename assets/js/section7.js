class Section7 extends React.Component {
  render() {
    return (
      <section id="goto56501" class="section-base contact_us background-setting bg_translucent_w"
        style={{ backgroundImage: "url(https://img.holkee.com/site/upload/5d2ed5d8-5550ws3ab-67f7-bfc96146/6c16a3265a7a15c5b06c4139f4eb8e16_normal.jpg)" }}>
        <div class="ContentsBox clearfix">
          <div class="lBox">
            <div class="mapBox">
              <amp-iframe layout="fill" sandbox="allow-scripts allow-same-origin allow-popups" resizable
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDXtBW26A1ECFElryP7Qar7EPx78d3ptV0&q=+824%E9%AB%98%E9%9B%84%E5%B8%82%E7%87%95%E5%B7%A2%E5%8D%80%E4%B8%AD%E8%8F%AF%E8%B7%AF200%E8%99%9F">
                <amp-img layout="fill" src="https://img.holkee.com/main/loading.png" placeholder></amp-img>
                <div overflow="true" role="button" aria-label=""></div>
              </amp-iframe>
            </div>
          </div>
          <div class="rBox">

            <ul class="info">
              <li>
                <p class="address"> 824高雄市燕巢區中華路200號</p>
              </li>
              <li>
                <p class="phone"><a class="ana-button-click" href="tel:+886  7 616 2585"
                  data-vars-event-category="contact" data-vars-event-label="+886  7 616 2585">+886 7
                                    616 2585</a></p>
              </li>
              <li>
                <p class="time">平日9:00am —5:00pm | 週六9:00am —4:00pm | 周日公休</p>
              </li>
              <li>
                <p class="email"><a class="ana-button-click" href="mailto:service@example.com"
                  data-vars-event-category="contact"
                  data-vars-event-label="service@example.com">service@example.com</a></p>
              </li>
            </ul>
          </div>
        </div>
      </section >
    )
  }
}
ReactDOM.render(<Section7 />, document.getElementById("section7"))
