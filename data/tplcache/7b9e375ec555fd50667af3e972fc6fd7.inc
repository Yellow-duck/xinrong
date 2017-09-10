<div class="media">
              <div class="media-left float-left">
                <p class="f-day">[field:pubdate function='strftime("%d",@me)'/]</p>
                <p class="f-year">[field:pubdate function='strftime("%Y-%m",@me)'/]</p>
              </div>
              <div class="media-body">
                <h3><a href="[field:arcurl/]" title="[field:title/]">[field:title/]</a></h3>
                <p>[field:description function='cn_substr(@me,220)'/]...</p>
              </div>
            </div>