<template>
  <div>
    <b-jumbotron header-level="4">
      <template slot="header">
        <b-container>
          <div class="text-center">Recruit</div>
        </b-container>
      </template>

      <template slot="lead">
        <b-container>
          <div class="text-center">
            サーベイ・研究メンバーを募集しております。
          </div>
        </b-container>
      </template>
    </b-jumbotron>

    <b-container>
      <div class="mt-4">
        <h2>メンバー募集</h2>
        <p class="text-justify">cvpaper.challenge では CV 分野のサーベイ・研究を実施するメンバーを募集しています。<span class="font-weight-bold">サーベイメンバー</span>は CVPR 2020 網羅的サーベイなどのトップ会議のサーベイを通した<span class="font-weight-bold">研究のトレンドの把握</span>を行います。研究メンバーは新しいトレンドを創るべく研究活動を行います。2020年の目標は「<span class="font-weight-bold">Google Scholar TOP20 にリストアップされている国際会議 / ジャーナルに30本以上投稿すること</span>」です！現在までに研究員に限らずポスドク・学生を中心としたプロジェクトで CVPR/ICCV/ICRA などのトップ国際会議に投稿し、査読を突破して来ました。今後さらに活動を加速させるためにも、学生、ポスドク、研究員、教員、研究連携などを募集します。コンピュータビジョン分野以外の研究者からのご連絡も歓迎致します。</p>
        <hr class="my-4">
      </div>
      

      <div class="mt-4">
        <h2>参加形式</h2>
        <p class="text-justify">cvpaper.challenge の参加形式は大きく分けて２種類、<nuxt-link to="#survey_member">(1)サーベイメンバー</nuxt-link>、<nuxt-link to="#research_member">(2)研究メンバー</nuxt-link>としてのご参加が可能です。下記にその2種類の参加形式を記載します。</p>
        <h5 class="mt-4" id="survey_member">(1) サーベイメンバー</h5>
          <ul>
            <li class="text-justify mt-1"><span class="font-weight-bold">どなたでも</span>ご参加頂けます。</li>
            <li class="text-justify mt-1">サーベイ用のSlackにご招待しますので、本ページ下の<nuxt-link to="#contact">コンタクト</nuxt-link>に記載のメールアドレスまでご連絡ください。</li>
            <li class="text-justify mt-1">サーベイ用のSlackでは各種勉強会や論文共有チャンネル、網羅的サーベイのプロジェクトなどが動いています。</li>
            <li class="text-justify mt-1">自ら勉強会を企画してリードしてくれる、情報を積極的に共有してくれるメンバー大歓迎です。</li>
            <li class="text-justify mt-1">もちろん、勉強会等に参加するだけ、情報を確認したいというメンバーも歓迎します。</li>
          </ul>

        <h5 class="mt-4" id="research_member">(2) 研究メンバー</h5>
          <ul>
            <li class="text-justify mt-1">まずは<span class="font-weight-bold">上記の<nuxt-link to="#survey_member">サーベイメンバー</nuxt-link>になった上で</span>主宰の片岡までご相談ください。</li>
            <li class="text-justify mt-1">大学や研究所のご所属がある方が研究メンバーとして参加しやすいです。指導教員がいらっしゃる場合には予めご相談の上で許可を頂いてからcvpaper.challengeの研究メンバーとしてご参加ください。</li>
            <li class="text-justify mt-1">企業の方の場合には共同研究やその他の連携方法を探る傾向にあります。やはり主宰の片岡までご相談ください。</li>
            <li class="text-justify mt-1">研究メンバーは基本的に2〜5人単位の研究グループで活動しており、実働メンバーのみでなく研究アドバイザとしてもご参加可能です。</li>
            <li class="text-justify mt-1">研究メンバーになることの利点や活動の具体例は下のスライド資料を参照してください。</li>
            <li class="text-justify mt-1">産総研所属となり、より積極的に研究グループの活動を行いたいという場合には産総研インターン/リサーチアシスタント（RA）/ポスドクとしての募集もございます。下記の<nuxt-link to="#aist_recruitment">産総研の公募</nuxt-link>をご確認ください。（もちろん一般公募としての応募となるため、審査の上で決定します。優先的に/無条件で採用できるわけではございません。）</li>
          </ul>

        <div class="mt-4 text-center">
          <iframe src="//www.slideshare.net/slideshow/embed_code/key/MvAYHifY7890e" width="514" height="422" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/cvpaperchallenge/cvpaperchallenge-cv-229354908" title="cvpaper.challenge 研究メンバー募集 〜CV分野の今を映し，トレンドを創る挑戦〜" target="_blank">cvpaper.challenge 研究メンバー募集</a> </strong></div>
        </div>  

        <hr class="my-4">
      </div>

      <div class="mt-4">
        <h2 id="aist_recruitment">産総研の公募</h2>
        <p class="text-justify">cvpaper.challenge の主要メンバーに産総研研究員がいる関係で、産総研の各種制度を利用して研究に参加することが可能です。具体的には、以下の3つの形態でメンバーを募集しています。</p>
        
        <h5 class="mt-4">(a) 産総研インターン（技術研修員制度）</h5>
        <ul>
          <li class="text-justify mt-1"><span class="font-weight-bold">概要</span>：産総研インターンとして産総研に所属し、産総研のリソースを使いながら研究立案、実験、論文執筆、投稿を行うことができます。1ヶ月から1年単位での研究が可能です。大学の長期休暇などを利用して1ヶ月以上の期間で集中的な研究連携が可能です。</li>
          <li class="text-justify mt-1"><span class="font-weight-bold">対象</span>：学生（学部生、修士課程、博士課程）</li>
          <li class="text-justify mt-1"><span class="font-weight-bold">給与</span>：無し（旅費は支給可能、宿泊費は場合により支給可能）</li>
          <li class="text-justify mt-1"><span class="font-weight-bold">場所</span>：産総研つくばセンター（茨城県つくば市）</li>
        </ul>

        <h5 class="mt-4">(b) 産総研リサーチアシスタント (RA)</h5>
        <ul>
          <li class="text-justify mt-1"><span class="font-weight-bold">概要</span>：産総研RAとして産総研に所属し、産総研のリソースを使いながら研究立案、実験、論文執筆、投稿を行うことができます。修士型と博士型のRA制度があり、更新可能性ありの1年契約で実施します。産総研に所属して給与を得ながら研究できます。(2019/07/01雇用の方から学振DCと産総研RA（博士型）の併用が可能になりました。月平均雇用日数4日～8日の範囲であれば勤務が可能です。また、学振DCが報酬を受給する場合には、大学院の指導教員が認めるなど、他の条件が定められています。)</li>
          <li class="text-justify mt-1"><span class="font-weight-bold">対象</span>：学生（修士課程、博士課程）</li>
          <li class="text-justify mt-1"><span class="font-weight-bold">給与</span>：</li>
          <ul>
            <li class="text-justify mt-1">修士課程：時給1,500円（月7日勤務が標準だが日数変更可能、月額8万円程度）</li>
            <li class="text-justify mt-1">博士課程：時給1,900円（月14日勤務が標準だが日数変更可能、月額20万円程度）</li>
          </ul>
          <li class="text-justify mt-1"><span class="font-weight-bold">場所</span>：産総研つくばセンター（茨城県つくば市）</li>
          <li class="text-justify mt-1"><span class="font-weight-bold">勤務時間</span>：9:00-17:45 または 9:30-18:15</li>
          <li class="text-justify mt-1"><span class="font-weight-bold">詳細情報</span>：<a href="https://www.aist.go.jp/aist_j/collab/ra/ra_index.html">産総研のHP</a>をご確認ください。</li>
        </ul>
        <h5 class="mt-4">(c) 産総研ポスドク</h5>
        <ul>
          <li class="text-justify mt-1"><span class="font-weight-bold">概要</span>：産総研ポスドクとして産総研に所属し、産総研のリソースを使いながら研究立案、実験、論文執筆、投稿を行うことができます。雇用プロジェクトの研究に従事しつつ cvpaper.challenge メンバーと独自の研究をすることができます。雇用可能なプロジェクトの有無や研究内容は場合により異なるのでお問い合わせください。</li>
          <li class="text-justify mt-1"><span class="font-weight-bold">対象</span>：博士号取得者（学位取得後7年以内）</li>
          <li class="text-justify mt-1"><span class="font-weight-bold">給与</span>：時給2200円、2500円、2700円（産総研規定により決定）</li>
          <li class="text-justify mt-1"><span class="font-weight-bold">場所</span>：産総研つくばセンター（茨城県つくば市）</li>
          <li class="text-justify mt-1"><span class="font-weight-bold">勤務時間</span>：週5日、1日7時間45分（休憩1時間）、フレックスタイム制可</li>
          <li class="text-justify mt-1"><span class="font-weight-bold">詳細情報</span>：<a href="https://www.aist.go.jp/aist_j/humanres/04keiyaku/index.html">産総研のHP</a>をご確認ください。</li>
        </ul>
        <hr class="my-4">
      </div>

      <div class="mt-4">
        <h2 class="mt-4">注力分野</h2>

        <h5 class="mt-4">動画像認識</h5>
        <ul>
          <li class="text-justify mt-1"><a href="https://arxiv.org/abs/1711.09577" target="_blank">3次元畳み込みの解析（CVPR 2018）</a></li>
          <li class="text-justify mt-1"><a href="https://ieeexplore.ieee.org/document/8793709" target="_blank">教師無し文脈外行動理解（ICRA 2019）</a></li>
          <li class="text-justify mt-1"><a href="https://arxiv.org/abs/1608.07876" target="_blank">人を見ない人物行動認識（ECCV 2016 Workshop; Brave New Idea）</a></li>
          <li class="text-justify mt-1"><a href="http://www.bmva.org/bmvc/2016/papers/paper012/index.html" target="_blank">遷移行動認識による短期行動予測（BMVC 2016）</a></li>
        </ul>

        <h5 class="mt-4">自動運転/予防安全</h5>
        <ul>
          <li class="text-justify mt-1"><a href="https://arxiv.org/abs/1804.02555" target="_blank">交通ニアミスDBと動画解析（ICRA 2018）</a></li>
          <li class="text-justify mt-1"><a href="https://arxiv.org/abs/1804.02675" target="_blank">適応的誤差関数による交通事故解析（CVPR 2018）</a></li>
        </ul>

        <h5 class="mt-4">大規模DB構築</h5>
        <ul>
          <li class="text-justify mt-1"><a href="https://arxiv.org/abs/1703.07920" target="_blank">超大規模ファッションDB解析（CVPR 2019 Workshop, MIRU 2017 Best Student Paper)</a></li>
          <li class="text-justify mt-1"><a href="https://kaken.nii.ac.jp/grant/KAKENHI-PROJECT-19H01134/" target="_blank">自然の形成原理に即した深層学習の真相究明（科研費基盤研究(A)採択）</a></li>
        </ul>

		<h5 class="mt-4">生成モデル</h5>
		<ul>
			<li class="text-justify mt-1">GAN の Generatorの圧縮（<a href="https://db-event.jpn.org/webdbf2019/award.html" target="_blank">WebDB 2019 最優秀学生ポスター発表賞</a>, <a href="https://www.kogakuin.ac.jp/news/2019/2020021401.html" target="_blank">ISAT-18 Excellent Oral Paper Presentation Award</a>）</li>
			<li class="text-justify mt-1">GAN による Novel View Synthesis（<a href="http://ssii.jp/ssii/ssii_history.html?eventCode=ssii2020&strLocale=ja" target="_blank">SSII2019 優秀学術賞</a>）</li>

		</ul>

        <h5 class="mt-4">その他</h5>
        <ul>
          <li class="text-justify mt-1"><a href="https://arxiv.org/abs/1805.11850" target="_blank">ボケをかますAI -Neural Joking Machine-（CVPRW 2018）</a></li>
          <li class="text-justify mt-1"><a href="https://arxiv.org/abs/1811.06943" target="_blank">論文の自動要約 (ICMV 2018)</a></li>
        </ul>

        <hr class="my-4">
      </div>

      <div class="mt-4">
        <h2>Q&A</h2>
        <ul>
          <li class="text-justify mt-2"><span class="font-weight-bold">メンバーはどのくらいいるの？</span>：2020年2月現在、サーベイメンバー360名超、研究メンバーが約50名います。研究グループは合計で8グループあります。</li>
          <!-- <li class="text-justify mt-2"><span class="font-weight-bold">サーベイについてノルマはある？</span>：サーベイ用Slackのチャンネルを閲覧するだけでしたら個人としてのノルマは発生しません。ですが、せっかくでしたら有志メンバーとしてご参加頂き、論文サマリを作成して議論するのが論文調査の効果が大きいです。</li> -->
          <li class="text-justify mt-2"><span class="font-weight-bold">研究はどうやって進める？</span>：多数の論文をインプットとして、ブレストによるアイディア考案とディスカッションを繰り返し研究テーマを設定しています。大枠の研究テーマ毎に研究グループとして複数人で研究を効率的に進めていきます。</li>
          <li class="text-justify mt-2"><span class="font-weight-bold">どうやってまとめればよい？</span>：各リーダーが運営する勉強会により異なりますが、Google Drive や GitHub、手元のPPTファイルにより共有することが多いです。</li>
          <li class="text-justify mt-2"><span class="font-weight-bold">ツライんじゃない？</span>：サーベイや研究はツラいですが、それ以上に研究コミュニティへの参加を通してその面白さを知って欲しいと思ってます。コミュニティではモチベーションの高いメンバー同士がディスカッションしているため、メンバーの声を聞いてみると驚くほどモチベーションが高いです。</li>
          <li class="text-justify mt-2"><span class="font-weight-bold">みんなどのくらい読んでいる？</span>：人により異なります。年間数本から、一番多く読んでいる学生さんで年間数百本以上読んでいます。学部生で月80本読んだ、という学生さんもいますがご自身のペースで進めるのが良いです。</li>
          <li class="text-justify mt-2"><span class="font-weight-bold">求める人材像は？</span>：モチベーションが高い人を求めていますが、さらにこれまでの取り組みの中で「返信が早い」「自ら提案できる」人はサーベイや研究の進度が速い傾向にあります。</li>
          <li class="text-justify mt-2"><span class="font-weight-bold">研究メンバーは選抜あるの？</span>：能力による選抜はありません。しかし、特に学生さんで研究室の指導教員がいらっしゃる場合には研究室との関係性が良好であるかどうかが重要です。例えば、多くの研究メンバーは卒・修・博論になるようなメイン研究が問題なく進んでいるという前提で、その上で cvpaper.challenge の研究メンバーとしてグループ研究を実施しています。さらに、研究室以外に研究コミュニティに参加するということに対してご理解があることが望ましいです。</li>
          <li class="text-justify mt-2"><span class="font-weight-bold">プログラミングできなくても研究メンバーになれる？</span>：なれます。ご自身で実装ができるに越したことはありませんが、研究室配属後ゼロから勉強して約半年で国際会議の論文に採択されたという例もございます。研究プロジェクト内でゼロから勉強することも可能です。</li>
          <li class="text-justify mt-2"><span class="font-weight-bold">今までの実績について教えて！</span>：現在までに Google Scholar TOP20にリストアップされている論文に20本以上採択されています（TOP-1の CVPR や ICRA にも複数本の論文が採択）。また、論文サマリは4,000本以上ございます。詳細は<nuxt-link to="/resources">リソースページ</nuxt-link>をご確認ください。</li>
          <li class="text-justify mt-2"><span class="font-weight-bold">研究メンバーとしての目標は？</span>：2020年は「Google Scholar TOP20 にリストアップされている国際会議 / ジャーナルに30本以上投稿すること」を目標として掲げています。「30本以上投稿」という目標は論文を執筆して投稿するまでの経験を重ねるために設けましたが、もちろん全て査読突破できるレベルまで持っていけるよう内部査読などの完成度を高める工夫を行っています。</li>
          <li class="text-justify mt-2"><span class="font-weight-bold">コンピュータビジョンが専門ではないんだけど大丈夫？</span>：コンピュータビジョンや他分野の融合により大きなインパクトを生み出した、という例は少なくないです。他分野の方も大歓迎です！</li>
          <li class="text-justify mt-2"><span class="font-weight-bold">大学や企業、研究機関をまたいだ横のつながりはないの？</span>：サーベイメンバーに関しては、所属機関の制約は設けておりません。勉強会や情報共有チャンネルを立ち上げてディスカッションを行なっています。新しい勉強会やサーベイプロジェクト、懇親会やイベント等、積極的に企画してください。</li>
          <li class="text-justify mt-2"><span class="font-weight-bold"><a href="http://xpaperchallenge.org/nlp/">nlpaper.challenge</a>や<a href="https://sites.google.com/view/robotpaperchallenge/home">robotpaper.challenge</a>との関係性は？</span>：研究コミュニティ名は異なりますが、基本的には連携して活動しています。これらの研究コミュニティと連携して網羅的サーベイや研究プロジェクトを加速させていきたいです。</li>
        </ul>  
        <hr class="my-4">
      </div>

      <div class="mt-4">
        <h2 id="contact">コンタクト</h2>
        <p class="text-justify">ご連絡は主宰の片岡裕雄（産総研; hirokatsu.kataoka[at]aist.go.jp） と運営メンバー（cvpaper.challenge[at]gmail.com）の2つを宛先にしてメールをお願いします。</p>
        <p class="text-justify">日本のCV分野を強くするために、チャレンジしましょう！ -- 片岡裕雄</p>
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