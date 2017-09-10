<li>
                <div class="media media-x">
                  <div class="caldata float-left">
                    <div class="content text-center">
                      <p class="day">[field:pubdate function='strftime("%d",@me)'/]</p>
                      <p class="mon-year">[field:pubdate function='strftime("%Y-%m",@me)'/]</p>
                    </div>
                  </div>
                  <div class="media-body">
                    <h3><a href="[field:arcurl/]" title="[field:title/]">[field:title/]</a></h3>
                    <p class="desc">[field:description function='cn_substr(@me,250)'/]...</p>
                  </div>
                </div>
              </li>