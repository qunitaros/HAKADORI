# require 'rails_helper'

# RSpec.describe "API::V1::Posts", type: :request do
#   let(:user) { { email: "test@example.com", password: "password" } }
#   let(:auth_token) { sign_in(user) }

#   describe "GET /api/v1/posts" do
#     context "ユーザー認証をしているとき" do
#       it "post一覧を取得できること" do
#         get(api_v1_posts_path)
#         expect(response.status).to eq(200)
#         expect(res["posts"].length).to eq(Post.count)
#       end
#     end

#     context "ユーザー認証をしていないとき" do
#       it "/api/v1/postsに遷移できないこと" do

#       end
#     end

#   end

#   describe "POST /api/v1/posts" do
#     context "ユーザー認証をしているとき" do
#       it "postを投稿できること" do
#         params = {
#           post: {
#             content: "hogehoge",
#             post_field: 3
#           }
#         }
#         # expect {
#           post(api_v1_posts_path, params: params)
#         # }.to change(Post, :count).by(+1)
#         expect(response.status).to eq(200)
#         expect(res["data"]).to eq("hogehoge")
#         expect(res[:data][:post]).to eq(3)
#       end
#     end

#     context "ユーザー認証をしていないとき" do
      
#     end
#   end

#   describe "DELETE /api/v1/post/[:id]" do
#     context "ユーザー認証をしているとき" do
#       it "postを削除できること" do

#       end
#     end
#   end
# end
