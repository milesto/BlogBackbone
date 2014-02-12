class Api::V1::PostsController < Api::V1::ApiController
  defaults resource_class: Post

  protected

  def collection
    @posts ||= end_of_association_chain.order('created_at desc')
  end

  def build_resource_params
    [params.fetch(:post, {}).permit(:title, :content)]
  end
end
