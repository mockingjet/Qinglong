class Sidebar extends React.Component {
  render() {
    return (
      <amp-sidebar id="header-sidebar" class="mobile-nav" layout="nodisplay" side="right">
        <div class="hamburger open">
          <div on="tap:header-sidebar.toggle" role="button" class="hamburger-inner">
            <div class="bar bar1 hide"></div>
            <div class="bar bar2 cross"></div>
            <div class="bar bar3 cross hidden"></div>
            <div class="bar bar4 hide"></div>
          </div>
        </div>
        <nav class="mobile-menu-inner">
          <ul class="Oneself">
            <li>
              <p><a class="ana-menu-click" href="#goto56499" on="tap:goto56499.scrollTo(duration=400)"
                data-vars-event-category="關於本社" data-vars-event-label="#goto56499">關於本社</a></p>
            </li>
            <li>
              <p><a class="ana-menu-click" href="#goto86252" on="tap:goto86252.scrollTo(duration=400)"
                data-vars-event-category="產銷商品" data-vars-event-label="#goto86252">產銷商品</a></p>
            </li>
            <li>
              <p><a class="ana-menu-click" href="#goto86230" on="tap:goto86230.scrollTo(duration=400)"
                data-vars-event-category="銷售客戶" data-vars-event-label="#goto86230">銷售客戶</a></p>
            </li>
            <li>
              <p><a class="ana-menu-click" href="#goto56498" on="tap:goto56498.scrollTo(duration=400)"
                data-vars-event-category="理事主席" data-vars-event-label="#goto56498">理事主席</a></p>
            </li>
            <li>
              <p><a class="ana-menu-click" href="#goto56500" on="tap:goto56500.scrollTo(duration=400)"
                data-vars-event-category="媒體訪問" data-vars-event-label="#goto56500">媒體訪問</a></p>
            </li>
            <li>
              <p><a class="ana-menu-click" href="#goto56501" on="tap:goto56501.scrollTo(duration=400)"
                data-vars-event-category="我們的位置" data-vars-event-label="#goto56501">我們的位置</a></p>
            </li>
            <li>
              <p><a class="ana-menu-click" href="#goto56502" on="tap:goto56502.scrollTo(duration=400)"
                data-vars-event-category="社群媒體" data-vars-event-label="#goto56502">社群媒體</a></p>
            </li>
          </ul>
        </nav>
      </amp-sidebar>
    )
  }
}
ReactDOM.render(<Sidebar />, document.getElementById("sidebar"))