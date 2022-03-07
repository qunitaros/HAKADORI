users = [
  { name: "yuji", 
    prof:  "初めまして、yuujiです。将来海外で働いてみたいと思い、最近英語を勉強し始めました。是非とも一緒に勉強しましょう!", 
    gender: 0,
    image: "../../public/icons/english_man.jpg"
  },
  { name: "恵", 
    prof:  "エンジニアです。主にフロント部分を触ってます。" ,
    gender: 0,
    image: "../../public/icons/programing_man.jpg"
  },
  { name: "ゆうた", 
    prof:  "デザインの勉強をしています。人見知りなのですが、よろしくお願いいたします。" ,
    gender: 0,
    image: "../../public/icons/design_man.jpg"
  },
  { name: "トゲ", 
    prof:  "ライター",
    gender: 0, 
    image: "../../public/icons/writer_man.jpg"
  },
  { name: "悟", 
    prof:  "ブログ始めました!まだまだ初心者なので詳しい方と一緒に勉強できれば幸いです!" ,
    gender: 0,
    image: "../../public/icons/blog_man.jpg"
  },
  { name: "panda", 
    prof:  "よろしくお願います!!!!!インフルエンサーになりたいです!!!!!" ,
    gender: 0,
    image: "../../public/icons/panda_man.jpg"
  },
  { name: "葵", 
    prof:  "葵です。会社で動画を編集する仕事が回ってきたので急遽勉強しています。" ,
    gender: 0,
    image: "../../public/icons/movie_man.jpg"
  },
  { name: "七海建人", 
    prof:  "ファイナンシャルプランナーになりたくてファイナンス周りを勉強しています。アウトプットを兼ねて誰かに教えてみたいです。" ,
    gender: 0,
    image: "../../public/icons/finace_man.jpg"
  },
  { name: "のばら", 
    prof:  "今まで身だしなみに気をつかってこなかったのですが、最近ネイルやメイクの勉強をしています。皆さんがどのようにしているのか知りたいです!" ,
    gender: 1,
    image: "../../public/icons/neil_woman.jpg"
  },
  { name: "まき", 
    prof:  "カウンセラーを目指して日々勉強中です。SNSなどでアウトプットしているのですが、対面でもアウトプットしたいと考えています。" ,
    gender: 1,
    image: "../../public/icons/counselor_woman.jpg"
  },
  { name: "祥子", 
    prof:  "初めまして!,健康やストレッチの勉強をしています!プロの療法士の方と喋ってみたいです!できればメンターを頼みたいです!" ,
    gender: 1,
    image: "../../public/icons/medicine_woman.jpg"
  },
  { name: "アカリ", 
    prof:  "企画の仕事をしていて、休日は主にその勉強をしています。いつも一人で退屈一緒に勉強しませんか？" ,
    gender: 1,
    image: "../../public/icons/plan_woman.jpg"
  },
  { name: "桃", 
    prof:  "営業をしており、休日は営業日記などを眺めてアウトプットしています。" ,
    gender: 1,
    image: "../../public/icons/salse_woman.jpg"
  },
  { name: "まいちゃん", 
    prof:  "プレゼン資料が見にくい!!を上司に怒られてしまいました。上手に作れるようになりたい!" ,
    gender: 1,
    image: "../../public/icons/presen_woman.jpg"
  },
  { name: "歌姫", 
    prof:  "将来のことが不安で、積み立てなどの勉強を始めました。ゆくゆくは株式にも力を入れてみたいです!" ,
    gender: 1,
    image: "../../public/icons/money_woman.jpg"
  },
  { name: "めいめい", 
    prof:  "広報部の仕事をしているのですが、毎日勉強しながらなんとか仕事について行っている状態です。教えてくれる人がいれば幸いです。" ,
    gender: 1,
    image: "../../public/icons/market_woman.jpg"
  },
  { name: "yuki", 
    prof:  "司法試験の勉強で毎日部屋にこもって勉強しています。いつも一人で寂しい上に全然捗らないので始めました。SNSで毎日アウトプットしているのですが、対面でもアウトプットしていきたいです。" ,
    gender: 1,
    image: "../../public/icons/low_woman.jpg"
  }
]

users.length.times do |n|
  name = users[n][:name]
  email = "user#{n}@example.com"
  user = User.find_or_initialize_by(email: email)
  prefecture = Random.rand(1..47)
  gender = users[n][:gender]
  from = Time.parse("1970/01/01")
  to = Time.parse("2000/01/01")
  date = Random.rand(from..to)
  day_off = Random.rand(0..3)
  profile = users[n][:prof]
  image = users[n][:image]

  if user.new_record?
    user.name = name
    user.password = "password"
    user.password_confirmation = "password"
    user.prefecture = prefecture
    user.gender = gender
    user.field = n
    user.day_off = day_off
    user.birthday = date
    user.profile = profile
    user.image:File.open(image)
    user.save!
  end
end


puts "users = #{User.count}"


