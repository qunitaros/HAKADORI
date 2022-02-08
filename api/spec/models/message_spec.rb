require 'rails_helper'

RSpec.describe Message, type: :model do
  let(:message) { create(:message) }

  describe "正常値と異常値の確認について" do
    context "バリデーションについて" do
      it "user_id, chat_room_id,contentがあれば有効であること" do
        expect(message).to be_valid
        expect(message.errors).to be_empty
      end

      it "user_idがなければ無効であること" do
        message.user_id = nil
        message.valid?
        expect(message.errors[:user_id]).to include("can't be blank")
      end

      it "chat_room_idがなければ無効であること" do
        message.chat_room_id = nil
        message.valid?
        expect(message.errors[:chat_room_id]).to include("can't be blank")
      end

      it "contentがなければ無効であること" do
        message.content = nil
        message.valid?
        expect(message.errors[:content]).to include("can't be blank")
      end
    end
  end
end
