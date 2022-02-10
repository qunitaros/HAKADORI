FactoryBot.define do
  factory :user do
    name { "test" }
    sequence(:email) { |n| "test#{n}@example.com" }
    password { "password" }
    password_confirmation { "password" }
    field { 1 }
    birthday { "2000/01/01" }
    gender { 1 }
    prefecture { 36 }
    day_off { 2 }
    profile { "僕はdocker-compose exec api rails console です。よろしくお願いいたします。" }
  end
end
