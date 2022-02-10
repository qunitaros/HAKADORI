# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable

  validates :name, presence: true, length: { maximum: 30 }
  validates :email, presence: true, uniqueness: true
  # VALID_PASSWORD_REGEX = /\A[a-z0-9]+\z/i
  # validates :password, format: { with: VALID_PASSWORD_REGEX } #ログアウトエラーの原因,ログインエラーの原因
  validates :field, presence: true
  validates :day_off, presence: true
  validates :birthday, presence: true
  validates :gender, presence: true
  validates :profile, length: { maximum: 160 }



  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
  mount_uploader :image, ImageUploader

  has_many :likes_from, class_name: "Like", foreign_key: :from_user_id, dependent: :destroy
  has_many :likes_to, class_name: "Like", foreign_key: :to_user_id, dependent: :destroy
  has_many :active_likes, through: :likes_from, source: :to_user  # 自分からのいいね
  has_many :passive_likes, through: :likes_to, source: :from_user # 相手からのいいね

  has_many :chat_room_users
  has_many :chat_rooms, through: :chat_room_users

  has_many :messages

  has_many :posts

  # dependent: :destroy 
  #ユーザーが退会するにあたってその関係するもの全てを削除する
end
