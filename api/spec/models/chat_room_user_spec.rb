require 'rails_helper'

RSpec.describe ChatRoomUser, type: :model do
  let(:chat_room_user) { create(:chat_room_user) }

  describe "正常値と異常値の確認について" do
    context "バリデーションについて" do
      it "user_id, chat_room_idがあれば有効であること" do
        expect(chat_room_user.errors).to be_empty
        expect(chat_room_user).to be_valid
      end

      it "user_idがなければ無効であること" do
        chat_room_user.user_id = nil
        chat_room_user.valid?
        expect(chat_room_user.errors[:user_id]).to include("can't be blank")
      end

      it "chat_room_idがなければ無効であること" do
        chat_room_user.chat_room_id = nil
        chat_room_user.valid?
        expect(chat_room_user.errors[:chat_room_id]).to include("can't be blank")
      end
    end
  end
end
