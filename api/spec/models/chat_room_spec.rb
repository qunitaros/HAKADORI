require 'rails_helper'

RSpec.describe ChatRoom, type: :model do
  let(:chat_room) { create(:chat_room) }

  describe "正常値と異常値の確認について" do
    context "バリデーションについて" do
      it "有効であること" do
        expect(chat_room.errors).to be_empty
        expect(chat_room).to be_valid
      end
    end
  end
end
