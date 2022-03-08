posts = [
  {
    content: "毎週休日はカフェで勉強するようにしています!いつも一人なので暇な方いたらぜひご一緒しましょう!",
    image: "public/post_images/post_english.jpg"
  },
  {
    content: "Vue.jsならある程度教えられるレベルなのでわからないことがある人はどんどん言ってきてください!",
    image: "public/post_images/post_programing.jpg"
  },
  {
    content: "デザインを勉強すればするほど、結局余白が一番大事なんだなぁ",
    image: "public/post_images/post_design.jpg"
  },
  {
    content: "始めました。よろしくお願いします。",
    image: nil
  },
  {
    content: "WordPress導入のためPHP勉強中です!同じような方はいいねください!",
    image: "public/post_images/post_blog.jpg"
  },
  {
    content: "アナリティクスとか数字関係難しいなあ、、",
    image: "public/post_images/post_sns.jpg"
  },
  {
    content: "動画編集者あるある「高単価案件取りたいのに、高単価で提案したことがない」",
    image: "public/post_images/post_movie.jpg"
  },
  {
    content: "書店で自分の持ってる資格の参考書エリアに行くと何か嬉しくなりますよね笑笑",
    image: "public/post_images/post_finance.jpg"
  },
  {
    content: "髪色派手な人って銀色のネイルしている人多いですよね。やっぱ髪色との兼ね合いも考えなきゃなのか。。。",
    image: "public/post_images/post_neil.jpg"
  },
  {
    content: "カウンセラーって、小さい頃からイイ子ちゃんしてきたでしょってクライアントに伝えてる人多いと思うけど、実はカウンセラーこそ、クライアントにいいカウンセラーだと思われたくて「仮面」付けてるんだよねぇ…
    ",
    image: nil
  },
  {
    content: "椎間板は運動が栄養ということを初めて知って驚愕（血液からの栄養は来ない）運動が必要なのはこれだったんですね。",
    image: "public/post_images/post_medicine.jpg"
  },
  {
    content: "「議事録」ってビジネススキル問われる仕事だよなぁ…と他人が書いた議事録を読んで染み染み感じます。
    長い。長すぎる。まとめろ。簡潔に。",
    image: "public/post_images/post_bussiness.jpg"
  },
  {
    content: "タスク管理の絶対的な掟として「タスク管理自体をタスクにしない」というものがあります。営業関係はかなり教えられると思うので、是非いいねください!!!!",
    image: "public/post_images/post_sales.jpg"
  },
  {
    content: "プレゼン資料で字に色をつけるな派と重要なところに色つけろ派のどっちのご機嫌とるかの二択、皆さんはどうしてますか？",
    image: nil
  },
  {
    content: "積み立てNisa、設定をミスって分配金を受取型にしてしまった、、、",
    image: nil
  },
  {
    content: "本で学んで、周りより分かった気でいる。けど実際商品売るとなったら何も出来ない。多分マーケティングチームの会議に入っても、情報頭に入れるだけで精一杯になります。",
    image: "public/post_images/post_market.jpg"
  },
  {
    content: "カフェ勉時、マーカーだらけの六法のページ開け、カッコつけちゃって、、、
    しまいには周りの目線気にして、あえて煮詰まった時の渋い顔する
    カッコつけてボールペン回しすぎて失敗し落下",
    image: "public/post_images/post_low.jpg"
  }
]

posts.length.times do |n|
  content = posts[n][:content]
  image = posts[n][:image]

  if image == nil
    Post.create!(
      user_id: n + 1,
      content: content,
      post_field: n
    )
  else
    Post.create!(
      user_id: n + 1,
      content: content,
      post_field: n,
      post_image:File.open(image)
    )
  end
end

puts "posts = #{Post.count}"
