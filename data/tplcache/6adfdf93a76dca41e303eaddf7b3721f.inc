<div class="xm4 xb4 xs4 xl6 margin-large-bottom">
          <div class="pro-item">
            <h3><span>0[field:global name=autoindex runphp="yes"]@me=@me;[/field:global].</span>[field:title/]</h3>
            <div class="portfolio-img"><a href="[field:arcurl/]" title="[field:title/]" class="zoomimgs" style="background-image:url([field:litpic/])"></a></div>
            <p class="desc">[field:description function='cn_substr(@me,250)'/]...</p>
            <p class="more"><a href="[field:arcurl/]" >READ MORE ></a></p>
          </div>
        </div>
       
      </div>
    </div>
  </div>


<!--首页推荐物流 end--> 

<!--首页我们的服务begin-->

<div id="fh5co-service-list" class="layout">
  <div class="bg-service">
    <div class="container">
      <div class="line fh5co-heading">
        <h2>关于我们</h2>
        <span>WHAT WE CAN DO FOR YOU</span> </div>
      <div class="line service-inner-bg">
        <div class="index-leftbar show-desc">
          <div class="item item1">
            <div class="heading">
              <div class="imgs"><img src="/style/images/tki5.png" alt="" /></div>
              <h3>关于我们</h3>
              <p>ADVANTAGE</p>
            </div>
            <div class="content"> {dede:sql sql="select content from dede_arctype where id=1"}[field:content function=cn_substr(Html2Text(@me),400)/]{/dede:sql}...</div>
            <div class="more">{dede:type typeid='1'}<a href="[field:typelink /]">READ MORE  ></a>{/dede:type}</div>
          </div>
        </div>
        <div class="index-rightbar show-list">
          <div class="right-content">
            <div class="line-big">
              {dede:channelartlist typeid='2'}
              <div class="xl6 xs6 xm4">
                <div class="item item3"><a href="{dede:field name='typeurl'/}"  title="{dede:field name='typename'/}">
                  <div class="media-img"><img src="/style/images/s{dede:global name=itemindex runphp='yes'}@me=@me;{/dede:global}.png" /></div>
                  <h3>{dede:field name='typename'/}</h3>
                  <div class="desc">{dede:field name='content'/}</div>
                  </a></div>
              </div>
              {/dede:channelartlist}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!--首页我们的服务 end--> 

<!--首页常见问题/在线预约 begin-->

<div id="fh5co-middle-list" class="layout">
  <div class="container">
    <div class="line-big show-list">
      <div class="xl12 xs6 xm6 margin-large-bottom">
        <div class="line fh5co-heading">
          <h2>{dede:type typeid='12'}[field:typename /]{/dede:type}</h2>
          <span>FREIGHT KNOWLEDGE</span> </div>
        <div class="news-list">
          <div class="media">
            <div class="media_img"><a href="javascript:;" ><img src='/style/images/zhishi.jpg' alt=''></a></div>
            <div class="media-body">
              {dede:arclist limit='0,1' titlelen='60' typeid='12'}
              <h3><a href="[field:arcurl/]" title="[field:title/]">[field:title/]</a></h3>
              <span class='time'>[field:pubdate function='strftime("%Y-%m-%d",@me)'/]</span>
              <p class="desc">[field:description function='cn_substr(@me,220)'/]...</a></p>