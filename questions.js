const questions = [
  {
    question: "現在の時刻は夜の10時。何をする？",
    visiblePlus: [0, 1, 2],
    choices: [
      { text: "眠くなるまで動画を見る", plus: 5, minus: 6 }, // -1
      { text: "1時間だけ動画を見る", plus: 4, minus: 4 }, // 0
      { text: "寝る", plus: 2, minus: 1 }, // +1
    ]
  },
  {
    question: "ゲームでどうしても欲しいキャラがいる。どうする？",
    visiblePlus: [0, 2],
    choices: [
      { text: "諦める", plus: 2, minus: 1 }, // +1
      { text: "無課金でできるところまで頑張る", plus: 4, minus: 4 }, // 0
      { text: "思い切って課金する", plus: 5, minus: 7 }, // -2
    ]
  },
  {
    question: "嫌いなクラスメイトがSNSで失敗している。",
    visiblePlus: [0, 1],
    choices: [
      { text: "匿名アカウントでボロクソに書く", plus: 4, minus: 5 }, // -1
      { text: "「これ、ひどくない？」と友達にだけDMで送る", plus: 3, minus: 5 }, // -2
      { text: "何も書かずにスマホを閉じる", plus: 2, minus: 1 }, // +1
    ]
  },
  {
    question: "自分の部屋で撮ったピース写真をSNSにのせたい。",
    visiblePlus: [0, 1],
    choices: [
      { text: "壁だけの背景にするか、家の中では撮らない", plus: 2, minus: 1 }, // +1
      { text: "そのままアップする", plus: 4, minus: 6 }, // -2
      { text: "顔だけスタンプで隠してアップする", plus: 2, minus: 3 }, // -1
    ]
  },
  {
    question: "夜10時。宿題が終わっていないけど、推しのライブ配信が始まった！",
    visiblePlus: [1, 2],
    choices: [
      { text: "宿題をやりながら、画面を横に置いて見る", plus: 6, minus: 6 }, // 0
      { text: "配信は諦めて宿題を終わらせ、後でアーカイブを見る", plus: 3, minus: 1 }, // +2
      { text: "配信を優先して、宿題は明日早く起きてやる", plus: 7, minus: 8 }, // -1
    ]
  },
  {
    question: "「この画像を3人に送らないと、あなたのスマホが壊れる」というメッセージが来た。",
    visiblePlus: [0, 2],
    choices: [
      { text: "ゴミ箱に入れて、そのメッセージを消す", plus: 3, minus: 0 }, // +3
      { text: "嘘だとは思うけど、一応SNSにのせる", plus: 5, minus: 6 }, // -1
      { text: "怖いので、とりあえず親友3人に送る", plus: 5, minus: 6 }, // -1
    ]
  },
  {
    question: "人気の有料ゲームが、別のサイトで「無料」でダウンロードできる。",
    visiblePlus: [1, 2],
    choices: [
      { text: "友達に「これ大丈夫かな？」とURLを送る", plus: 3, minus: 3 }, // 0
      { text: "ラッキー！と思ってダウンロードする", plus: 5, minus: 7 }, // -2
      { text: "公式サイトで正規の値段で買う", plus: 2, minus: 1 }, // +1
    ]
  },
  {
    question: "立ち入り禁止の場所だけど、ここから撮れば最高の写真が撮れそう！",
    visiblePlus: [0, 2],
    choices: [
      { text: "こっそり入って写真を撮る", plus: 4, minus: 6 }, // -2
      { text: "ギリギリの境界線から、ズームで撮る", plus: 3, minus: 4 }, // -1
      { text: "安全な場所から、ルールを守って撮る", plus: 2, minus: 1 }, // +1
    ]
  },
  {
    question: "勉強中、スマホの通知がバンバン来て集中できない！",
    visiblePlus: [1, 2],
    choices: [
      { text: "通知が来たらすぐに返信する", plus: 4, minus: 5 }, // -1
      { text: "通知をオフにして別の部屋に置く", plus: 2, minus: 1 }, // +1
      { text: "スマホを裏返して置いておく", plus: 3, minus: 3 }, // 0
    ]
  },
  {
    question: "ダンス動画を公園で撮ったら、後ろに知らない人が映り込んでいた。",
    visiblePlus: [0, 1],
    choices: [
      { text: "背景にモザイクをかけてからアップする", plus: 4, minus: 2 }, // +2
      { text: "自分が可愛く撮れたので、そのままアップする", plus: 5, minus: 6 }, // -1
      { text: "人がいないところで撮り直す", plus: 3, minus: 1 }, // +2
    ]
  },
  {
    question: "読みたかったマンガが、公式じゃないサイトで全巻無料で読める。",
    visiblePlus: [0, 2],
    choices: [
      { text: "公式のアプリや本屋さんでお金を出して読む", plus: 2, minus: 1 }, // +1
      { text: "全部タダで読めるので、一気に読み切る", plus: 4, minus: 5 }, // -1
      { text: "友達にも教えてあげて、みんなで読む", plus: 4, minus: 5 }, // -1
    ]
  },
  {
    question: "スマホやPCの画面に「ウイルスが感染しました」という警告が出てきた！",
    visiblePlus: [0, 2],
    choices: [
      { text: "急いで画面に出ている対処法を試してみる", plus: 5, minus: 1 }, // -2
      { text: "親に相談して、タブやブラウザをすべて閉じる", plus: 4, minus: 0 }, // +4
      { text: "急いで自分で対処法を調べる", plus: 4, minus: 1 }, // +3
    ]
  },
  {
    question: "明日提出の読書感想文。AIに頼んだらすごいのが出てきた！",
    visiblePlus: [1],
    choices: [
      { text: "AIは使わず、一文字目から自分で悩んで書く", plus: 2, minus: 1 }, // +1
      { text: "そのまま書き写して提出する", plus: 6, minus: 8 }, // -2
      { text: "AIの文章を参考にして、自分の言葉で書く", plus: 4, minus: 4 }, // 0
    ]
  },
  {
    question: "クラスのグループLINEで、誰かがひどいイジリを受けている。",
    visiblePlus: [2],
    choices: [
      { text: "何も書かずに既読スルーする", plus: 2, minus: 2 }, // 0
      { text: "「それはやりすぎだよ」と勇気を出して書く", plus: 2, minus: 1 }, // +1
      { text: "自分もノリに乗って、スタンプを送る", plus: 2, minus: 5 }, // -3
    ]
  },
  {
    question: "地震があったけど無事なことをSNSのフォロワーに伝える。どうする？",
    visiblePlus: [0],
    choices: [
      { text: "「震度〇だったけど無事です」と投稿する", plus: 3, minus: 5 }, // -2
      { text: "「皆さんは大丈夫でしたか」と投稿する", plus: 3, minus: 0 }, // +3
      { text: "何も投稿しない", plus: 0, minus: 1 }, // -1
    ]
  }
];
