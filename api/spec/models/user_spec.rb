require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { create(:user) }

  describe "正常値と異常値の確認について" do

    context "バリデーションについて" do
      it "name,email,password,password_confirmation,gender,prefecture,birthday,day_off,fieldがあれば有効であること" do
        expect(user).to be_valid
        expect(user.errors).to be_empty
      end

      it "nameがなければ無効であること" do
        user.name = ""
        user.valid?
        expect(user.errors[:name]).to include("can't be blank")
      end

      it "nameが30文字以上のときは無効であること" do
        user.name = "a" * 31
        user.valid?
        expect(user.errors[:name]).to include("is too long (maximum is 30 characters)")
      end

      it "emailがなければ無効であること" do
        user.email = "" 
        user.valid?
        expect(user.errors[:email]).to include("can't be blank")
      end
      
      it "重複したemailなら無効であること" do
        create(:user, email: "same@example.com")
        user.email = "same@example.com"
        user.valid?
        expect(user.errors[:email]).to include("has already been taken")
      end
    
      it "passwordが6文字より少ないときは無効であること" do
        user.password = "test"
        user.valid?
        expect(user.errors[:password]).to include("is too short (minimum is 6 characters)")
      end

      it "passwordとpassword_confirmationが一致しなければ無効であること" do
        user.password_confirmation = "docker-compose"
        user.valid?
        expect(user.errors[:password_confirmation]).to include("doesn't match Password")
      end

      it "genderがなければ無効であること" do
        user.gender = nil
        user.valid?
        expect(user.errors[:gender]).to include("can't be blank")
      end

      it "birthdayがなければ無効であること" do
        user.birthday = ""
        user.valid?
        expect(user.errors[:birthday]).to include("can't be blank")
      end

      it "fieldがなければ無効であること" do
        user.field = nil
        user.valid?
        expect(user.errors[:field]).to include("can't be blank")
      end

      it "day_offがなければ無効であること" do
        user.day_off = nil
        user.valid?
        expect(user.errors[:day_off]).to include("can't be blank")
      end

      it "profileが160文字より多い場合は無効であること" do
        user.profile = "a" * 161
        user.valid?
        expect(user.errors[:profile]).to include("is too long (maximum is 160 characters)")
      end
    end
  end



  
end
