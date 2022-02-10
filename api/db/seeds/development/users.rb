10.times do |n|
  name = "user#{n}"
  email = "#{name}@example.com"
  user = User.find_or_initialize_by(email: email)
  from = Time.parse("1950/01/01")
  to = Time.parse("2000/01/01")
  date = Random.rand(from..to)

  if user.new_record?
    user.name = name
    user.password = "password"
    user.password_confirmation = "password"
    user.prefecture = n + 1
    user.gender = 1
    user.field = n
    user.day_off = 2
    user.birthday = date
    user.profile = "おなしゃす!!"
    user.save!
  end
end


puts "users = #{User.count}"
