<template>
  <div>
    <b-jumbotron header-level="4">
      <template slot="header">
        <b-container>
          <div class="text-center">cvpaper.challenge<br>Conference Winter 2021</div>
        </b-container>
      </template>

    </b-jumbotron>

    <b-container>
      <div class="mt-4">
        <b-container>
        <div class="text-center">
          <b-img fluid :src="require('~/static/image/cover/cccwinter2021.jpeg')" width="700"/>
        </div>
        </b-container>
      </div>
      

      <div class="mt-4">
        <h2>News</h2>
        <ul class="list-style-type: none">
          <li class="text-justify mt-1"><span class="font-weight-bold">2021/11/19 </span>プログラムを公開し、参加登録の受付を開始しました。</li>
        </ul>

        <hr class="my-4">
      </div>

      <div class="mt-4">
        <h2 id="aist_recruitment">参加登録について</h2>
        <p class="text-justify">cvpaper.challenge Conference Winter 2021 (CCC Winter 2021) への参加を希望される方は下記のフォームから事前の参加登録をお願い致します。</p>
        <p class="text-justify"><span class="font-weight-bold" style="font-size:1.5em"><a href="https://t.co/pPoZh1QKrS" target="_blank">[参加登録はこちら]</a></span></p>
      
        <hr class="my-4">
      </div> 

      <div class="mt-4">
        <h2 id="contact">お問い合わせ</h2>
        <p class="text-justify">本プログラムへの参加につきましては、参加登録フォームからお願い致します。<br>それ以外のお問い合わせについては、下記のフォームからお願い致します。</p>
        <p class="text-justify"><span class="font-weight-bold" style="font-size:1.5em"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdbe5XESwxhXrkx9q4sE-ljpX1yfrI7FIhlJUtXFfcgXAG0PQ/viewform" target="_blank">[お問い合わせはこちら]</a></span></p>
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {
    
  },
};
</script>