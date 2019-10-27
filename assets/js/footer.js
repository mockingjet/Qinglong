class Footer extends React.Component {
  render() {
    return (
      <div class="ContentsBox clearfix">
        <ul class="share-tools">
          <li>
            <amp-social-share role="button" class="ana-share-click" type="facebook" data-param-app_id="1864999493718715"
              width="75" height="24" data-vars-event-category="share" data-vars-event-label="Facebook">分享</amp-social-share>
          </li>
          <li>
            <amp-social-share role="button" class="ana-share-click" type="line" width="75" height="24"
              data-vars-event-category="share" data-vars-event-label="LINE">分享</amp-social-share>
          </li>
        </ul>
        <p class="copyrights">Copyrights All Rights Reserved.</p>
      </div>
    )
  }
}
ReactDOM.render(<Footer />, document.getElementById("footer"))