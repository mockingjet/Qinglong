class Header extends React.Component {
  render() {
    return (
      <header class="HeaderBox">
        <nav class="Menu ContentsBox clearfix">
          <div class="TopBox clearfix">
            <ul class="top_menu clearfix">
              <li>
                <h3><a class="ana-menu-click" on="tap:goto56499.scrollTo(duration=400)"
                  data-vars-event-category="關於本社" data-vars-event-label="#goto56499">關於本社</a></h3>
              </li>
              <li>
                <h3><a class="ana-menu-click" on="tap:goto86252.scrollTo(duration=400)"
                  data-vars-event-category="產銷商品" data-vars-event-label="#goto86252">產銷商品</a></h3>
              </li>
              <li>
                <h3><a class="ana-menu-click" on="tap:goto86230.scrollTo(duration=400)"
                  data-vars-event-category="銷售客戶" data-vars-event-label="#goto86230">銷售客戶</a></h3>
              </li>
              <li>
                <h3><a class="ana-menu-click" on="tap:goto56498.scrollTo(duration=400)"
                  data-vars-event-category="理事主席" data-vars-event-label="#goto56498">理事主席</a></h3>
              </li>
              <li>
                <h3><a class="ana-menu-click" on="tap:goto56500.scrollTo(duration=400)"
                  data-vars-event-category="媒體訪問" data-vars-event-label="#goto56500">媒體訪問</a></h3>
              </li>
              <li>
                <h3><a class="ana-menu-click" on="tap:goto56501.scrollTo(duration=400)"
                  data-vars-event-category="我們的位置" data-vars-event-label="#goto56501">我們的位置</a></h3>
              </li>
              <li>
                <h3><a class="ana-menu-click" on="tap:goto56502.scrollTo(duration=400)"
                  data-vars-event-category="社群媒體" data-vars-event-label="#goto56502">社群媒體</a></h3>
              </li>
            </ul>
          </div>
          <div class="hamburger">
            <div on="tap:header-sidebar.toggle" role="button" class="hamburger-inner">
              <div class="bar bar1 hide"></div>
              <div class="bar bar2 cross"></div>
              <div class="bar bar3 cross hidden"></div>
              <div class="bar bar4 hide"></div>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}
ReactDOM.render(<Header />, document.getElementById('header'))

