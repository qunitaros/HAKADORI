require 'rails_helper'

RSpec.describe Like, type: :model do
  let!(:like) { create(:like) }

  describe "正常値と異常値の確認について" do
    context "バリデーションについて" do
      it "to_user_id, from_user_idがあれば有効であること" do
        expect(like).to be_valid
        expect(like.errors).to be_empty
      end

      it "to_user_idがなければ無効であること" do
        like.to_user_id = nil
        expect(like).to be_invalid
      end

      it "from_user_idがなければ無効であること" do
        like.from_user_id = nil
        expect(like).to be_invalid
      end
    end
  end
end
