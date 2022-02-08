require 'rails_helper'

RSpec.describe Post, type: :model do
  let(:post) { build(:post) }

  describe "正常値と異常値の確認について" do

    context "バリデーションについて" do
      it "user_id,content,post_fieldがあれば有効であること" do
        expect(post.errors).to be_empty
      end

      it "contentがなければ無効であること" do
        post.content = ""
        post.valid?
        expect(post.errors[:content]).to include("can't be blank")
      end

      it "user_idがなければ無効であること" do
        post.user_id = nil
        post.valid?
        expect(post.errors[:user_id]).to include("can't be blank")
      end

      it "post_fieldがなければ無効であること" do
        post.post_field = nil
        post.valid?
        expect(post.errors[:post_field]).to include("can't be blank")
      end
    end
  end

end
